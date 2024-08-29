
//Create 
const uploadImageCreate = document.querySelector("[upload-image-create]");
if (uploadImageCreate) {
    const uploadImageInputCreate = document.querySelector("[upload-image-input-create]");
    const uploadImagePreviewCreate = document.querySelector("[upload-image-preview-create]");
    const buttonImgCloseCreate = document.querySelector("[img-close-create]")
    const imgClose = document.querySelector(".img-close")
    imgClose.hidden = true;
    uploadImageInputCreate.addEventListener("change", (e) => {
        const file = e.target.files[0]
        if (file) {
            uploadImagePreviewCreate.src = URL.createObjectURL(file);
            imgClose.hidden = false;
        }
    })
    buttonImgCloseCreate.addEventListener("click", (e) => {
        uploadImageInputCreate.value = "";
        uploadImagePreviewCreate.src = "";
        imgClose.hidden = true;
    })
}
//Edit 
const uploadImageEdit = document.querySelector("[upload-image-edit]");
if (uploadImageEdit) {
    const uploadImageInputEdit = document.querySelector("[upload-image-input-edit]");
    const uploadImagePreviewEdit = document.querySelector("[upload-image-preview-edit]");
    const buttonImgCloseEdit = document.querySelector("[img-close-edit]")
    const imgClose = document.querySelector(".img-close")
    imgClose.hidden = false;
    uploadImageInputEdit.addEventListener("change", (e) => {
        const file = e.target.files[0]
        if (file) {
            uploadImagePreviewEdit.src = URL.createObjectURL(file);
            imgClose.hidden = false;
        }
    })
    buttonImgCloseEdit.addEventListener("click", (e) => {
        uploadImageInputEdit.value = "";
        uploadImagePreviewEdit.src = "";
        imgClose.hidden = true;
    })
}
//Delete 
const buttonsDelete = document.querySelectorAll("[button-delete]");
if (buttonsDelete.length > 0) {
    const formDeleteItem = document.querySelector("#form-delete-item");
    const path = formDeleteItem.getAttribute("data-path")
    buttonsDelete.forEach(button => {
        button.addEventListener("click", () => {
            //console.log(button)
            const isConfirm = confirm("Bạn có chắc muốn xóa hay không?")
            if (isConfirm) {
                const id = button.getAttribute("data-id");
                //console.log(id)
                const action = `delete/${id}?_method=DELETE`
                console.log(action)
                formDeleteItem.action = action
                formDeleteItem.submit();
            }
        })
    })
}




















// // Chọn Ảnh
// const online = document.querySelector(".online");
// const offline = document.querySelector(".offline");
// const back = document.querySelector(".back");
// const link = document.querySelector(".link");
// const device = document.querySelector(".device");
// const linkOnline = document.querySelector(".link-online");
// const linkOffline = document.querySelector(".link-offline");
// const save = document.querySelector(".btn-primary");
// const input = document.querySelector(".myImg")
// online.addEventListener("click", function (e) {
//     link.hidden = false;
//     device.hidden = true;
//     online.hidden = true;
//     offline.hidden = true;
//     back.hidden = false;
//     back.addEventListener("click", function (e) {
//         online.hidden = false;
//         offline.hidden = false;
//         link.hidden = true;
//         device.hidden = true;

//     })
//     linkOnline.addEventListener("change", function (e) {
//         save.addEventListener("click", function (e) {
//             input.value = linkOnline.value
//         })
//     })
// })
// offline.addEventListener("click", function (e) {

//     link.hidden = true;
//     device.hidden = false;
//     online.hidden = true;
//     offline.hidden = true;
//     back.hidden = false;
//     back.addEventListener("click", function (e) {
//         online.hidden = false;
//         offline.hidden = false;
//         link.hidden = true;
//         device.hidden = true;

//     })
//     linkOffline.addEventListener("change", function (e) {
//         const file = event.target.files[0]; // Lấy tệp hình ảnh đầu tiên từ input

//         if (file) {
//             const reader = new FileReader();

//             reader.onload = function (e) {
//                 var base64String = e.target.result;
//                 console.log(base64String); // Mã Base64 của hình ảnh
//                 const save = document.querySelector(".btn-primary");
//                 save.addEventListener("click", function (e) {
//                     console.log("Trong Hàm: ")
//                     console.log(base64String)
//                     input.value = base64String;
//                 })
//             };
//             reader.readAsDataURL(file); // Đọc file và chuyển đổi thành chuỗi Base64

//         }

//     })
// })
// //Edit
// const imgMini = document.querySelector(".img-mini");
// save.addEventListener("click", function (e) {
//     imgMini.src = input.value
// })

