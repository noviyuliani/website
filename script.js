document.addEventListener("DOMContentLoaded", function() {
    // Array warna latar belakang yang bisa dipilih
    const colors = ["#f3e9dd", "#d2b48c", "#8b5e34", "#bfa87a", "#a7865b"];

    // Event listener untuk tombol 'colorToggleBtn'
    document.getElementById("colorToggleBtn").addEventListener("click", function() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});

// Event listener untuk form 'contactForm'
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil nilai dari formulir
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan pesan konfirmasi
    alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.\nSubjek: ${subject}\nPesan: ${message}`);

    // Reset formulir setelah pengiriman
    this.reset();
});

// Event listener untuk tombol 'colorToggleBtn' untuk mengubah warna latar belakang
document.getElementById("colorToggleBtn").addEventListener("click", function() {
    const colors = ["#f3e9dd", "#d2b48c", "#8b5e34", "#bfa87a", "#a7865b"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
