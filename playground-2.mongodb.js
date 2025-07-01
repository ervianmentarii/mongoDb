use('Project_uas');

db.user.insertMany([
    {
        _id:1,
        nama_user:'Andi Saputra',
        no_tlpn_user:'0812-1234-5678',
        lokasi_user:'Jakarta'
    },
    {
        _id:2,
        nama_user:'Budi Santoso',
        no_tlpn_user:'0821-8765-4321',
        lokasi_user:'Bandung'
    },
    {
        _id:3,
        nama_user:'Citra Dewi',
        no_tlpn_user:'0852-3333-5566',
        lokasi_user:'Surabaya'
    },
    {
        _id:4,
        nama_user:'Deni Pratama',
        no_tlpn_user:'0838-1122-3344',
        lokasi_user:'Medan'
    },
    {
        _id:5,
        nama_user:'Eka Lestari',
        no_tlpn_user:'0813-9988-7766',
        lokasi_user:'Yogyakarta'
    },
]);

db.driver.insertMany([
    {
        _id:1,
        user_id:1,
        no_telp_driver:'(0210) 609 5718',
        lokasi_driver:'Pangkalpinang'
    },
    {
        _id:2,
        user_id:2,
        no_telp_driver:'(0239) 127 6823',
        lokasi_driver:'Cilegon'
    },
    {
        _id:3,
        user_id:3,
        no_telp_driver: '+62 192-513-6228',
        lokasi_driver:'Tarakan'
    },
    {
        _id:4,
        user_id:4,
        no_telp_driver:'(0357) 987 2279',
        lokasi_driver:'Banjarbaru'
    },
    {
        _id:5,
        user_id:5,
        no_telp_driver:'+62 813-2211-4455',
        lokasi_driver:'Padang'
    },
]);

db.rider.insertMany([
    {   
        _id:1,
        user_id: 1,
        no_telpn_rider: "0812-7654-3210",
        lokasi_rider: "Jakarta"
    },
    {
        _id:2,
        user_id: 2,
        no_telpn_rider: "0823-1234-5678",
        lokasi_rider: "Bandung"
    },
    {
        _id:3,
        user_id: 3,
        no_telpn_rider: "0856-7788-9900",
        lokasi_rider: "Surabaya"
    },
    {
        _id:4,
        user_id: 4,
        no_telpn_rider: "0813-1122-3344",
        lokasi_rider: "Medan"
    },
    {
        _id:5,
        user_id: 5,
        no_telpn_rider: "0813-4455-6677",
        lokasi_rider: "Yogyarkarta"
    }
]);

db.vehicletype.insertMany([
    {   
        _id:1,
        tipe_kendaraan: "motor" 
    },
    {   
        _id:2,
        tipe_kendaraan: "mobil" 
    },
    { 
        _id:3,
        tipe_kendaraan: "motor" 
    },
    { 
        _id:4,
        tipe_kendaraan: "mobil" 
    },
    { 
        _id:5,
        tipe_kendaraan: "motor" 
    }
]);

db.vehicle.insertMany([
    {
        _id:1,
        driver_id: 1,
        vehicle_type_id: 1,
        jenis: "UberX"
    },
    {
        _id:2,
        driver_id: 2,
        vehicle_type_id: 2,
        jenis: "UberXL"
    },
    {
        _id:3,
        driver_id: 3,
        vehicle_type_id: 3,
        jenis: "UberX"
    },
    {
        _id:4,
        driver_id: 4,
        vehicle_type_id: 4,
        jenis: "UberX"
    },
    {
        _id:5,
        driver_id: 5,
        vehicle_type_id: 5,
        jenis: "UberXL"
    }
]);

db.license.insertMany([
    {   
        _id:1,
        driver_id: 1,
        status_licensi: "aktif",
        tanggal_licensi: new Date("2022-01-15"),
        jenis_licensi: "Sim A"
    },
    {
        _id:2,
        driver_id: 2,
        status_licensi: "aktif",
        tanggal_licensi: new Date("2022-06-10"),
        jenis_licensi: "Sim C"
    },
    {
        _id:3,
        driver_id: 3,
        status_licensi: "nonaktif",
        tanggal_licensi: new Date("2021-12-01"),
        jenis_licensi: "Sim A"
    },
    {
        _id:4,
        driver_id: 4,
        status_licensi: "aktif",
        tanggal_licensi: new Date("2023-07-19"),
        jenis_licensi: "Sim C"
    },
    {
        _id:5,
        driver_id: 5,
        status_licensi: "aktif",
        tanggal_licensi: new Date("2023-03-25"),
        jenis_licensi: "Sim A"
    }
]);

db.tripstatus.insertMany([
    { 
        _id: 1,
        nama_status: "aktif" 
    },
    {
         _id: 2,
        nama_status: "dibatalkan" 
    },
    { 
        _id: 3, 
        nama_status: "selesai" 
    },
    { 
        _id: 4, 
        nama_status: "aktif" 
    },
    { 
        _id: 5, 
        nama_status: "dibatalkan" 
    }
]);

db.promocode.insertMany([
    {
        _id:1,
        kode_promo: "HEMAT10",
        diskon: 10,
        batas_berlaku: new Date("2025-07-31")
     },
    {
        _id:2,
        kode_promo: "GOJEK20",
        diskon: 20,
        batas_berlaku: new Date("2025-08-15")
    },
    {
        _id:3,
        kode_promo: "GRAB15",
        diskon: 15,
        batas_berlaku: new Date("2025-07-10")
    },
    {
        _id:4,
        kode_promo: "PROMO30",
        diskon: 30,
        batas_berlaku: new Date("2025-09-01")
    },
    {
        _id:5,
        kode_promo: "ONGKIR50",
        diskon: 50,
        batas_berlaku: new Date("2025-07-05")
    }
]);

db.trip.insertMany([
    {   
        _id:1,
        rider_id: 1,
        driver_id: 1,
        trip_status_id: 1,
        promo_id: 1,
        waktu_mulai: new Date("2025-06-01T08:00:00"),
        waktu_selesai: new Date("2025-06-01T08:45:00"),
        biaya: 25000.00,
        lokasi_awal: "Jakarta",
        lokasi_tujuan: "Depok"
    },
    {
        _id:2,
        rider_id: 2,
        driver_id: 2,
        trip_status_id: 2,
        promo_id: 2,
        waktu_mulai: new Date("2025-06-02T09:15:00"),
        waktu_selesai: new Date("2025-06-02T09:50:00"),
        biaya: 32000.00,
        lokasi_awal: "Bandung",
        lokasi_tujuan: "Cimahi"
    },
    {
        _id:3,
        rider_id: 3,
        driver_id: 3,
        trip_status_id: 3,
        promo_id: 3,
        waktu_mulai: new Date("2025-06-03T14:00:00"),
        waktu_selesai: new Date("2025-06-03T14:35:00"),
        biaya: 28000.00,
        lokasi_awal: "Surabaya",
        lokasi_tujuan: "Sidoarjo"
    },
    {
        _id:4,
        rider_id: 4,
        driver_id: 4,
        trip_status_id: 4,
        promo_id: 4,
        waktu_mulai: new Date("2025-06-04T07:00:00"),
        waktu_selesai: new Date("2025-06-04T07:40:00"),
        biaya: 30000.00,
        lokasi_awal: "Medan",
        lokasi_tujuan: "Binjai"
    },
    {
        _id:5,
        rider_id: 5,
        driver_id: 5,
        trip_status_id: 5,
        promo_id: 5,
        waktu_mulai: new Date("2025-06-05T17:30:00"),
        waktu_selesai: new Date("2025-06-05T18:10:00"),
        biaya: 27000.00,
        lokasi_awal: "Yogyakarta",
        lokasi_tujuan: "Sleman"
    }
]);

db.paymentmethod.insertMany([
    { 
        _id: 1, 
        nama_metode: "tunai" 
    },
    { 
        _id: 2, 
        nama_metode: "qris" 
    },
    { 
        _id: 3, 
        nama_metode: "e-pay" 
    },
    { 
        _id: 4, 
        nama_metode: "transfer" 
    },
    { 
        _id: 5, 
        nama_metode: "tunai" 
    }
]);

db.payment.insertMany([
    {
        _id:1,
        trip_id: 1,
        payment_method_id: 1,
        jumlah: 30000,
        status_pembayaran: "lunas"
    },
    {
        _id:2,
        trip_id: 2,
        payment_method_id: 2,
        jumlah: 40000,
        status_pembayaran: "lunas"
    },
    {
        _id:3,
        trip_id: 3,
        payment_method_id: 1,
        jumlah: 0,
        status_pembayaran: "belum"
    },
    {
        _id:4,
        trip_id: 4,
        payment_method_id: 1,
        jumlah: 25000,
        status_pembayaran: "lunas"
    },
    {
        _id:5,
        trip_id: 5,
        payment_method_id: 3,
        jumlah: 45000,
        status_pembayaran: "lunas"
    }
]);

db.rating.insertMany([
     {
        _id:1,
        trip_id: 1,
        user_id: 1,
        nilai_rating: "baik",
        komentar: "Pelayanan sangat baik"
    },
    {
        _id:2,
        trip_id: 2,
        user_id: 2,
        nilai_rating: "baik",
        komentar: "Sopir ramah"
    },
    {
        _id:3,
        trip_id: 4,
        user_id: 4,
        nilai_rating: "baik",
        komentar: "Cepat dan aman"
    },
    {
        _id:4,
        trip_id: 5,
        user_id: 5,
        nilai_rating: "baik",
        komentar: "Cukup baik"
    },
    {
        _id:5,
        trip_id: 3,
        user_id: 3,
        nilai_rating: "baik",
        komentar: "sangat baik"
    }
]);

db.location.insertMany([
    {
        _id:1,
        user_id: 1,
        label: "Rumah",
        latitude: -6.200000,
        longitude: 106.816666
    },
    {
        _id:2,
        user_id: 2,
        label: "Kantor",
        latitude: -6.914744,
        longitude: 107.609810
    },
    {
        _id:3,
        user_id: 3,
        label: "Kos",
        latitude: -7.257472,
        longitude: 112.752090
    },
    {
        _id:4,
        user_id: 4,
        label: "Stasiun",
        latitude: -6.241586,
        longitude: 106.992416
    },
    {
        _id:5,
        user_id: 5,
        label: "Bandara",
        latitude: 3.595196,
        longitude: 98.672226
    }
]);

db.triproute.insertMany([
     {
        _id:1,
        trip_id: 1,
        titik_awal: "Jakarta",
        titik_tengah: "Cawang",
        titik_akhir: "Depok"
    },
    {
        _id:2,
        trip_id: 2,
        titik_awal: "Bandung",
        titik_tengah: "Cimahi",
        titik_akhir: "Bekasi"
    },
    {
        _id:3,
        trip_id: 3,
        titik_awal: "Surabaya",
        titik_tengah: "Wonokromo",
        titik_akhir: "Sidoarjo"
    },
    {
        _id:4,
        trip_id: 4,
        titik_awal: "Bekasi",
        titik_tengah: "Cibitung",
        titik_akhir: "Jakarta"
    },
    {
        _id:5,
        trip_id: 5,
        titik_awal: "Medan",
        titik_tengah: "Tuntungan",
        titik_akhir: "Binjai"
    }
]);

db.Notification.insertMany([
    {
        _id:1,
        user_id: 1,
        isi_pesan: "Promo baru untukmu!",
        waktu_dikirim: new Date(),
        dibaca_status: "belum dibaca"
    },
    {
        _id:2,
        user_id: 2,
        isi_pesan: "Perjalanan selesai",
        waktu_dikirim: new Date(),
        dibaca_status: "dibaca"
    },
    {
        _id:3,
        user_id: 3,
        isi_pesan: "Driver dalam perjalanan",
        waktu_dikirim: new Date(),
        dibaca_status: "belum dibaca"
    },
    {
        _id:4,
        user_id: 4,
        isi_pesan: "Dapatkan diskon!",
        waktu_dikirim: new Date(),
        dibaca_status: "belum dibaca"
    },
    {
        _id:5,
        user_id: 5,
        isi_pesan: "Pembayaran berhasil",
        waktu_dikirim: new Date(),
        dibaca_status: "dibaca"
    }
]);

db.SupportCategory.insertMany([
    { 
        _id:1,
        nama_kategori: "Akun" 
    },
    { 
        _id:2,
        nama_kategori: "Pembayaran" 
    },
    { 
        _id:3,
        nama_kategori: "Perjalanan" 
    },
    { 
        _id:4,
        nama_kategori: "Promo" 
    },
    {
        _id:5,
        nama_kategori: "Lainnya" 
    }
]);

db.SupportTicket.insertMany([
    {
        _id:1,
        user_id: 1,
        support_category_id: 1,
        isi_ticket: "Tidak bisa bayar",
        status_ticket: "baru"
    },
    {
        _id:2,
        user_id: 2,
        support_category_id: 2,
        isi_ticket: "Driver kasar",
        status_ticket: "proses"
    },
    {
        _id:3,
        user_id: 3,
        support_category_id: 3,
        isi_ticket: "Promo tidak bisa dipakai",
        status_ticket: "selesai"
    },
    {
        _id:4,
        user_id: 4,
        support_category_id: 4,
        isi_ticket: "Aplikasi error",
        status_ticket: "proses"
    },
    {
        _id:5,
        user_id: 5,
        support_category_id: 5,
        isi_ticket: "Ingin kasih saran",
        status_ticket: "baru"
    }
]);

db.DriverAvailability.insertMany([
     {
        _id:1,
        driver_id: 1,
        status: "aktif",
        waktu: new Date("2025-06-29T08:00:00")
    },
    {
        _id:2,
        driver_id: 2,
        status: "tidak",
        waktu: new Date("2025-06-29T08:10:00")
    },
    {
        _id:3,
        driver_id: 3,
        status: "aktif",
        waktu: new Date("2025-06-29T08:15:00")
    },
    {
        _id:4,
        driver_id: 4,
        status: "aktif",
        waktu: new Date("2025-06-29T08:20:00")
    },
    {
        _id:5,
        driver_id: 5,
        status: "tidak",
        waktu: new Date("2025-06-29T08:25:00")
    }
]);

db.PricingPolicy.insertMany([
    {
        _id:1,
        dasar_harga: 7000,
        per_km: 3000,
        per_menit: 500
    },
    {
        _id:2,
        dasar_harga: 5000,
        per_km: 2500,
        per_menit: 400
    },
    {
        _id:3,
        dasar_harga: 10000,
        per_km: 4000,
        per_menit: 600
    },
    {
        _id:4,
        dasar_harga: 8000,
        per_km: 3500,
        per_menit: 550
    },
    {
        _id:5,
        dasar_harga: 6000,
        per_km: 2000,
        per_menit: 450
    }
]);

db.trippromo.insertMany([
     {
        _id:1,
        trip_id: 1,
        promo_id: 1,
        jumlah_diskon: 3000
    },
    {
        _id:2,
        trip_id: 2,
        promo_id: 2,
        jumlah_diskon: 8000
    },
    {
        _id:3,
        trip_id: 4,
        promo_id: 4,
        jumlah_diskon: 3750
    },
    {
        _id:4,
        trip_id: 5,
        promo_id: 5,
        jumlah_diskon: 22500
    },
    {
        _id:5,
        trip_id: 3,
        promo_id: 3,
        jumlah_diskon: 2000
    }
]);

db.Feedback.insertMany([
    {
        _id:1,
        user_id: 1,
        submitted_at: new Date(),
        feedback_text: "Aplikasi bagus",
        response_status: "dijawab"
    },
    {
        _id:2,
        user_id: 2,
        submitted_at: new Date(),
        feedback_text: "Driver ramah",
        response_status: "belum"
    },
    {
        _id:3,
        user_id: 3,
        submitted_at: new Date(),
        feedback_text: "Harga terlalu mahal",
        response_status: "dijawab"
    },
    {
        _id:4,
        user_id: 4,
        submitted_at: new Date(),
        feedback_text: "Waktu tunggu lama",
        response_status: "belum"
    },
    {
        _id:5,
        user_id: 5,
        submitted_at: new Date(),
        feedback_text: "Diskon menarik",
        response_status: "dijawab"
    }
]);

db.LoginHistory.insertMany([
     {
        _id:1,
        user_id: 1,
        waktu_login: new Date()
    },
    {
        _id:2,
        user_id: 2,
        waktu_login: new Date()
    },
    {
        _id:3,
        user_id: 3,
        waktu_login: new Date()
    },
    {
        _id:4,
        user_id: 4,
        waktu_login: new Date()
    },
    {
        _id:5,
        user_id: 5,
        waktu_login: new Date()
    }
]);

db.Device.insertMany([
     {
        _id:1,
        user_id: 1,
        device_type: "Android",
        os_version: "11",
        last_login: new Date("2025-06-01T08:00:00")
    },
    {
        _id:2,
        user_id: 2,
        device_type: "iOS",
        os_version: "14",
        last_login: new Date("2025-06-01T09:00:00")
    },
    {
        _id:3,
        user_id: 3,
        device_type: "Android",
        os_version: "10",
        last_login: new Date("2025-06-02T10:00:00")
    },
    {
        _id:4,
        user_id: 4,
        device_type: "iOS",
        os_version: "13",
        last_login: new Date("2025-06-02T11:00:00")
    },
    {
        _id:5,
        user_id: 5,
        device_type: "Android",
        os_version: "12",
        last_login: new Date("2025-06-03T12:00:00")
    }
]);

db.Report.insertMany([
    {   
        _id:1,
        trip_id: 1,
        user_id: 1,
        isi_laporan: "Driver ugal-ugalan",
        waktu: new Date()
    },
    {
        _id:2,
        trip_id: 2,
        user_id: 2,
        isi_laporan: "Biaya tidak sesuai",
        waktu: new Date()
    },
    {
        _id:3,
        trip_id: 3,
        user_id: 3,
        isi_laporan: "Promo tidak bisa digunakan",
        waktu: new Date()
    },
    {
        _id:4,
        trip_id: 4,
        user_id: 4,
        isi_laporan: "Perjalanan dibatalkan sepihak",
        waktu: new Date()
    },
    {
        _id:5,
        trip_id: 5,
        user_id: 5,
        isi_laporan: "Driver telat",
        waktu: new Date()
    }
]);

db.referal.insertMany([
    {
        _id:1,
        user_id: 1,
        reffered_user_id: 1,
        kode_refferal: "REF001",
        tanggal_penggunaan: new Date("2025-06-01")
    },
    {
        _id:2,
        user_id: 2,
        reffered_user_id: 2,
        kode_refferal: "REF002",
        tanggal_penggunaan: new Date("2025-06-02")
    },
    {
        _id:3,
        user_id: 3,
        reffered_user_id: 3,
        kode_refferal: "REF003",
        tanggal_penggunaan: new Date("2025-06-03")
    },
    {
        _id:4,
        user_id: 4,
        reffered_user_id: 4,
        kode_refferal: "REF004",
        tanggal_penggunaan: new Date("2025-06-04")
    },
    {
        _id:5,
        user_id: 5,
        reffered_user_id:5,
        kode_refferal: "REF005",
        tanggal_penggunaan: new Date("2025-06-05")
    }
]);

//bulkwrite insertOne
db.user.bulkWrite([
    {insertOne:{
        document:{
            _id:6,
            nama_user:'Farhan Hidayat',
            no_tlpn_user:'0851-6677-8899',
            lokasi_user:'Palembang'
        }
    }},
    {insertOne:{
        document:{
            _id:7,
            nama_user:'Gita Ramahani',
            no_tlpn_user:'0851-6677-8890',
            lokasi_user:'Semarang'
        }
    }},
    {insertOne:{
        document:{
            _id:8,
            nama_user:'Hendra Wijaya',
            no_tlpn_user:'0812-4455-6677',
            lokasi_user:'Makasar'
        }
    }},
    {insertOne:{
        document:{
            _id:9,
            nama_user:'Intan Maulinda',
            no_tlpn_user:'0899-1234-5678',
            lokasi_user:'Balikpapan'
        }
    }},
    {insertOne:{
        document:{
            _id:10,
            nama_user:'Joko Susilo',
            no_tlpn_user:'0877-2345-6789',
            lokasi_user:'Pontianak'
        }
    }},
    {insertOne:{
        document:{
            _id:11,
            nama_user:'Kiki Amelia',
            no_tlpn_user:'0812-3344-5566',
            lokasi_user:'Malang'
        }
    }},
    {insertOne:{
        document:{
            _id:12,
            nama_user:'Lukman Hakim',
            no_tlpn_user:'0822-7788-9900',
            lokasi_user:'Jakarta'
        }
    }},
    {insertOne:{
        document:{
            _id:13,
            nama_user:'Tasya Adina',
            no_tlpn_user:'0833-6677-8899',
            lokasi_user:'Bogor'
        }
    }},
    {insertOne:{
        document:{
            _id:14,
            nama_user:'Maya Putri',
            no_tlpn_user:'0831-2233-4455',
            lokasi_user:'Batam'
        }
    }},
    {insertOne:{
        document:{
            _id:15,
            nama_user:'Nando Siregar',
            no_tlpn_user:'0853-1122-3344',
            lokasi_user:'Padang'
        }
    }},
    {insertOne:{
        document:{
            _id:16,
            nama_user:'Olivia Natalia',
            no_tlpn_user:'0819-6677-8899',
            lokasi_user:'Denpasar'
        }
    }},
    {insertOne:{
        document:{
            _id:17,
            nama_user:'Pandu Wijaya',
            no_tlpn_user:'0878-5566-7788',
            lokasi_user:'Banjarmasin'
        }
    }},
    {insertOne:{
        document:{
            _id:18,
            nama_user:'Qori Alamsyah',
            no_tlpn_user:'0856-9988-1122',
            lokasi_user:'Manado'
        }
    }},
    {insertOne:{
        document:{
            _id:19,
            nama_user:'Rina Kartika',
            no_tlpn_user:'0881-2233-4455',
            lokasi_user:'Tangerang'
        }
    }},
    {insertOne:{
        document:{
            _id:20,
            nama_user:'Surya Dharma',
            no_tlpn_user:'0814-5566-7788',
            lokasi_user:'Cirebon'
        }
    }}
]);

//bulkwrite delete
db.user.bulkWrite([
    {deleteOne:{
        filter:{_id:1}
    }},
    {deleteOne:{
        filter:{lokasi_user:'Medan'}
    }},
    {deleteOne:{
        filter:{no_tlpn_user:"0821-8765-4321"}
    }},
    {deleteOne:{
        filter:{nama_user:"Budi Santoso"}
    }},
    {deleteOne:{
        filter:{_id:20}
    }}
]);

//select/find
//1
db.user.find({_id:3});
//2
db.PricingPolicy.find({dasar_harga:{$gt:5000}});
//3
db.DriverAvailability.find({status:'aktif'});
//4
db.payment.find({jumlah:{$gt:5000}});
//5
db.paymentmethod.find({nama_metode:'tunai'})
//6
db.rating.find({nilai_rating:'baik'});
//7
db.vehicle.find({jenis:'UberX'});
//8
db.vehicletype.find({tipe_kendaraan:"motor"});
//9
db.rider.find({lokasi_rider:'Bandung'});
//10
db.promocode.find({batas_berlaku:{$gt:new Date('2025-07-10')}})
