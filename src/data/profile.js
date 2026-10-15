// Data profil. Perubahan di sini otomatis tampil di navbar, hero, about, contact, dan footer.
// Kontak: isi href dengan null untuk menyembunyikan salah satunya.

export const profile = {
  name: 'Nabilla Putri Insani',
  shortName: 'Nabilla',
  role: 'Junior Web Developer',
  greeting: 'Halo, saya',
  headline: 'Mengubah data dan kebutuhan nyata menjadi website yang mudah dipakai.',
  intro:
    'Mahasiswa D3 Manajemen Informatika di Politeknik Negeri Padang. Saya membuat website berbasis data dengan PHP, Laravel, dan MySQL, mulai dari sistem PPDB sampai platform peminjaman fasilitas UKM Seni.',
  photo: '/assets/profile/nabilla.jpg',
  photoAlt: 'Foto profil Nabilla Putri Insani',
  photoIsPlaceholder: false,
  email: 'nabillaputrii1485@gmail.com',
  about: [
    'Saya Nabilla, mahasiswa D3 Manajemen Informatika di Politeknik Negeri Padang yang sedang membangun jalan sebagai Junior Web Developer. Saya menulis kode dengan PHP, Laravel, dan MySQL untuk membuat sistem yang membantu pekerjaan sehari-hari, seperti pendaftaran siswa baru (PPDB) dan peminjaman fasilitas UKM Seni.',
    'Sebelum kuliah, saya magang sebagai IT Support di Dinas Pendidikan Kabupaten Dharmasraya dan ikut menyiapkan jaringan LAN kantor. Pengalaman itu membuat saya terbiasa melihat teknologi dari sisi infrastruktur sekaligus sisi pengguna. Website ini tempat saya menunjukkan proyek dan proses belajar saya.',
  ],
  // Kontak yang tampil di bagian Kontak. type: email | whatsapp | github | linkedin
  contacts: [
    { type: 'email', label: 'Email', value: 'nabillaputrii1485@gmail.com', href: 'mailto:nabillaputrii1485@gmail.com' },
    { type: 'github', label: 'GitHub', value: 'nabillaputrii1485-bot', href: 'https://github.com/nabillaputrii1485-bot' },
    { type: 'linkedin', label: 'LinkedIn', value: 'Nabilla Putri', href: 'https://www.linkedin.com/in/nabilla-putri-1864a4443' },
  ],
}
