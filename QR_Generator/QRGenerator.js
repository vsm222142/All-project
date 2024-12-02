
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}





















// const qrText=document.querySelector("#qr-text");
// const sizes=document.querySelector("#sizes");
// const generateBtn=document.querySelector("#generateBtn");
// const downloadBtn=document.querySelector("#downloadBtn");
// const qrBody=document.querySelector('.qr-body');

// let size=sizes.value;

// generateBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     isEmptyInput();
    
// });

// function isEmptyInput(){
//     // if(qrText.value.length>0){
//     //     generateQRCode();
//     // }else{
//     //     alert("Enter the text or URL to generate your Code ");
//     // }

//     qrText.value.length>0 ? generateQRCode(): alert("Enter the text or URL to generate your Code ");
// }

// sizes.addEventListener("change",()=>{
//     size=e.target.value;
//     isEmptyInput();
// })

// downloadBtn.addEventListener("click",()=>{
//     let img=document.querySelector(".qr-body img");
//     if(img!==null){
//         let imgAtt=img.getAttribute("src");
//         downloadBtn.setAttribute("href",imgAtt);
//     }
//     else{
//         downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURl()}`);
//     }
// });
// function generateQRCode(){
//     qrBody.innerHTML="";
//     new generateQRCode(qrBody , {
//         text:qrText.value,
//         height:size,
//         width:size,
//         colorLight:"#fff",
//         colorDark:"#000",
//     });
// }


