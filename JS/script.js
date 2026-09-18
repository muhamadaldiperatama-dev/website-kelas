/* =========================================================
   CLASS CC
   NAVBAR MOBILE
   ========================================================= */


/* Ambil elemen navbar */

const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");


/* Jika tombol menu ditekan */

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        menuButton.classList.toggle("active");

    });

}


/* =========================================================
   MENUTUP MENU SETELAH MEMILIH HALAMAN
   ========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuButton.classList.remove("active");

    });

});

