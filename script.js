const form = document.getElementById("contactForm");

const nama = document.getElementById("nama");

const pesan = document.getElementById("pesan");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    const nomorWhatsApp = "6283806212581"


    const pesanWhatsApp =
        "Halo, saya " +
        nama.value +
        ".\n\n" +
        "Saya membutuhkan website:\n" +
        pesan.value;


    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        encodeURIComponent(pesanWhatsApp);


    window.open(url, "_blank");

});