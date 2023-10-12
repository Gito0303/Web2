document.getElementById('registration-form').addEventListener('submit', function(event) {
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const email = document.getElementById('email').value;

    if (nama === '' || alamat === '' || email === '') {
        alert('Anda harus mengisi data dengan lengkap !');
        event.preventDefault(); // Mencegah form submit jika ada data yang kosong
    } else {
        alert('Data Berhasil di Tambahkan!!')
    }
});
