// Proyek dari CV dan screenshot. Field bernilai null/kosong disembunyikan otomatis.
// Gambar: taruh di public/assets/projects/ lalu ubah field `image`.
export const projects = [
  {
    id: 'peminjaman-uks-pnp',
    placeholder: false,
    title: 'Peminjaman UKS PNP',
    summary:
      'Sistem web untuk mengelola peminjaman dan pengembalian fasilitas UKM Seni kampus, dari studio musik sampai peralatan panggung.',
    image: '/assets/projects/uks-pnp.jpg',
    imageIsPlaceholder: false,
    imageAlt: 'Tampilan beranda Peminjaman UKS PNP dengan judul Wujudkan Karya Seni Terbaikmu',
    tech: ['PHP' , 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: 'Proyek mata kuliah',
    role: 'Mengembangkan sistem sebagai proyek mata kuliah di Politeknik Negeri Padang.',
    features: ['Peminjaman fasilitas', 'Pengembalian fasilitas', 'Pengelolaan data fasilitas', 'Profil UKM dan masuk pengguna'],
    github: null,
    demo: null,
  },
  {
    id: 'findu-sma',
    placeholder: false,
    title: 'FindU SMA: Persebaran SMA Negeri di Kota Padang',
    summary:
      'Website untuk menjelajahi data dan lokasi SMA Negeri di seluruh Kota Padang, lengkap dengan peta persebaran dan pencarian sekolah.',
    image: '/assets/projects/findu-sma.jpg',
    imageIsPlaceholder: false,
    imageAlt: 'Tampilan beranda FindU SMA dengan judul Temukan Lokasi SMA Negeri di Kota Padang',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    status: null,
    role: null,
    features: ['Peta persebaran SMA Negeri', 'Pencarian data SMA', 'Halaman admin'],
    github: null,
    demo: null,
  },
]