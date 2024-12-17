// Ambil elemen tombol menu dan menu mobile
const menuButton = document.querySelector('button[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

// Fungsi toggle menu dan ikon hamburger
menuButton.addEventListener('click', () => {
    // Toggle menu tampil atau tersembunyi
    mobileMenu.classList.toggle('hidden');

    // Toggle ikon hamburger dan ikon close (X)
    const iconBars = menuButton.querySelector('svg:nth-child(1)');
    const iconClose = menuButton.querySelector('svg:nth-child(2)');
    iconBars.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});

// Tutup menu jika klik di luar area navbar
document.addEventListener('click', (e) => {
    const isClickInsideNavbar = menuButton.contains(e.target) || mobileMenu.contains(e.target);
    if (!isClickInsideNavbar) {
        closeMobileMenu(); // Panggil fungsi tutup menu
    }
});

// Fungsi untuk menutup menu dan reset ikon
function closeMobileMenu() {
    mobileMenu.classList.add('hidden'); // Sembunyikan menu
    const iconBars = menuButton.querySelector('svg:nth-child(1)');
    const iconClose = menuButton.querySelector('svg:nth-child(2)');
    iconBars.classList.remove('hidden'); // Tampilkan ikon garis tiga
    iconClose.classList.add('hidden');   // Sembunyikan ikon close (X)
}

// Tutup menu saat berpindah halaman (DOMContentLoaded)
window.addEventListener('DOMContentLoaded', () => {
    closeMobileMenu(); // Pastikan menu tertutup saat halaman dimuat
});

// Ambil elemen navbar
const navbar = document.querySelector('nav');

// Fungsi untuk menambahkan shadow pada navbar saat scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) { // Saat scroll lebih dari 10px
        navbar.classList.add('shadow-lg'); // Tambahkan shadow
    } else {
        navbar.classList.remove('shadow-lg'); // Hapus shadow
    }
});
