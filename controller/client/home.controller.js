const Img = require("../../models/img.model")

module.exports.index = async (req, res) => {
    let find = {
        deleted: false
    }
    const image = await Img.find(find);
    //console.log(image)
    res.render("client/pages/home/index.pug", {
        title: "Trang Chủ",
        img: image
    }
    );
}
//[GET] Create /create
module.exports.create = async (req, res) => {
    res.render("client/pages/home/create.pug", {
        title: "Trang Thêm Mới",
    }
    );
}
//[POST] CreatePost /create
module.exports.createPost = async (req, res) => {
    req.body.deleted = false;
    req.body.thumbnail = `/img/` + req.file.filename
    const img = new Img(req.body);
    console.log(req.file.filename)
    await img.save();
    res.redirect("/");

}

//[GET] Edit /edit/:id
module.exports.edit = async (req, res) => {
    const id = req.params.id
    //console.log(req.params)
    let find = {
        _id: id,
        deleted: false
    }
    //res.send("OK")
    const record = await Img.findOne(find)
    res.render("client/pages/home/edit.pug", {
        title: "Sửa sản phẩm",
        record: record
    })
}
//[PATCH] /edit/:id
module.exports.editPatch = async (req, res) => {
    req.body.deleted = false;
    console.log(req.file)
    if (req.file) {
        req.body.thumbnail = `/img/${req.file.filename}`
    }
    await Img.updateOne({ _id: req.params.id }, req.body)
    res.redirect("back")
}
module.exports.delete = async (req, res) => {
    const id = req.params.id;
    await Img.updateOne({ _id: id }, { deleted: true })
    res.redirect("back");
}