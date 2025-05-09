const qrText = document.getElementById("inputforqr");
const sizes = document.getElementById("sizes");
const genbtn = document.getElementById("generatebutton");
const downbtn = document.getElementById("downloadbutton");

const qrcontainer = document.querySelector(".qr-body");

let size = sizes.value;

genbtn.addEventListener("click", (e) => {
    e.preventDefault();
    isempty();
});

function isempty() {
    qrText.value.length > 0
        ? generateqr()
        : alert("enetr atleast character in text box");

    // if (qrText.value.length > 0) {
    //   generateqr();
    // } else {
    //   alert("enetr atleast character in text box");
    // }
}
sizes.addEventListener("change", (e) => {
    size = e.target.value;
    isempty();
});

function generateqr() {
    qrcontainer.innerHTML = "";
    new QRCode(qrcontainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

downbtn.addEventListener("click", (e) => {
    let img = document.querySelector(".qr-body img");
    if (img !== null) {
        let imgarr = img.getAttribute("src");
        downbtn.setAttribute("href", imgarr);
    } else {
        downbtn.setAttribute(
            "href",
            `${docment.querySelector("canvas").toDataURL}`
        );
    }
});
