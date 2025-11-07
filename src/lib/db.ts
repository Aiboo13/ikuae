// Helper functions untuk operasi CRUD dengan localStorage (simulasi JSON file)

export interface Kamar {
  id_kamar: number;
  tipe_kamar: string;
  harga_per_malam: number;
  status: string;
  foto_kamar: string;
}

export interface Fasilitas {
  id_fasilitas: number;
  id_kamar: number;
  nama_fasilitas: string;
}

export interface Tamu {
  id_tamu: number;
  nama_tamu: string;
  email: string;
  password: string;
  no_hp: string;
  alamat: string;
}

export interface Reservasi {
  id_reservasi: number;
  id_kamar: number;
  id_tamu: number;
  id_petugas: number | null;
  id_pembayaran: number | null;
  tanggal_pesan: string;
  tanggal_checkin: string;
  tanggal_checkout: string;
  total_harga: number;
  status_reservasi: string;
}

export interface Pembayaran {
  id_pembayaran: number;
  id_reservasi: number;
  metode_pembayaran: string;
  jumlah_bayar: number;
  tanggal_pembayaran: string;
  status_pembayaran: string;
}

export interface Petugas {
  id_petugas: number;
  nama_petugas: string;
  password: string;
}

export interface LaporanBulanan {
  id_laporan: number;
  id_petugas: number;
  bulan: number;
  tahun: number;
  total_pendapatan: number;
  total_okupansi: number;
  tanggal_dibuat: string;
  catatan_sistem: string;
}

export interface HotelInfo {
  nama_hotel: string;
  alamat: string;
  telepon: string;
  email: string;
  checkin_time: string;
  checkout_time: string;
  layanan_24jam: boolean;
  tahun_pendirian: number;
  deskripsi: string;
}

// Inisialisasi data awal
export const initializeData = () => {
  if (typeof window === "undefined") return;

  // Kamar
  if (!localStorage.getItem("kamar")) {
    const kamarData: Kamar[] = [
      {
        id_kamar: 1,
        tipe_kamar: "Deluxe",
        harga_per_malam: 300000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 2,
        tipe_kamar: "Suite",
        harga_per_malam: 500000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 3,
        tipe_kamar: "Standard",
        harga_per_malam: 200000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 4,
        tipe_kamar: "Deluxe",
        harga_per_malam: 300000,
        status: "Terisi",
        foto_kamar:
          "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 5,
        tipe_kamar: "Suite",
        harga_per_malam: 500000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 6,
        tipe_kamar: "Standard",
        harga_per_malam: 200000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 7,
        tipe_kamar: "Deluxe",
        harga_per_malam: 300000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 8,
        tipe_kamar: "Suite",
        harga_per_malam: 500000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1560703652-7838c2525e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc2MjMyMzkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 9,
        tipe_kamar: "Standard",
        harga_per_malam: 200000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1670800050441-e77f8c82963f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YW5kYXJkJTIwcm9vbXxlbnwxfHx8fDE3NjIzNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        id_kamar: 10,
        tipe_kamar: "Deluxe",
        harga_per_malam: 300000,
        status: "Tersedia",
        foto_kamar:
          "https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlbHV4ZSUyMHJvb218ZW58MXx8fHwxNzYyMzMyMTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ];
    localStorage.setItem("kamar", JSON.stringify(kamarData));
  }

  // Fasilitas
  if (!localStorage.getItem("fasilitas")) {
    const fasilitasData: Fasilitas[] = [
      { id_fasilitas: 1, id_kamar: 1, nama_fasilitas: "AC" },
      { id_fasilitas: 2, id_kamar: 1, nama_fasilitas: "TV" },
      { id_fasilitas: 3, id_kamar: 1, nama_fasilitas: "WiFi" },
      { id_fasilitas: 4, id_kamar: 2, nama_fasilitas: "AC" },
      { id_fasilitas: 5, id_kamar: 2, nama_fasilitas: "TV" },
      { id_fasilitas: 6, id_kamar: 2, nama_fasilitas: "WiFi" },
      { id_fasilitas: 7, id_kamar: 2, nama_fasilitas: "Bathtub" },
      { id_fasilitas: 8, id_kamar: 2, nama_fasilitas: "Mini Bar" },
      { id_fasilitas: 9, id_kamar: 3, nama_fasilitas: "AC" },
      { id_fasilitas: 10, id_kamar: 3, nama_fasilitas: "WiFi" },
      { id_fasilitas: 11, id_kamar: 4, nama_fasilitas: "AC" },
      { id_fasilitas: 12, id_kamar: 4, nama_fasilitas: "TV" },
      { id_fasilitas: 13, id_kamar: 4, nama_fasilitas: "WiFi" },
      { id_fasilitas: 14, id_kamar: 5, nama_fasilitas: "AC" },
      { id_fasilitas: 15, id_kamar: 5, nama_fasilitas: "TV" },
      { id_fasilitas: 16, id_kamar: 5, nama_fasilitas: "WiFi" },
      { id_fasilitas: 17, id_kamar: 5, nama_fasilitas: "Bathtub" },
      { id_fasilitas: 18, id_kamar: 5, nama_fasilitas: "Mini Bar" },
      { id_fasilitas: 19, id_kamar: 6, nama_fasilitas: "AC" },
      { id_fasilitas: 20, id_kamar: 6, nama_fasilitas: "WiFi" },
      { id_fasilitas: 21, id_kamar: 6, nama_fasilitas: "Bathtub" },
      { id_fasilitas: 22, id_kamar: 6, nama_fasilitas: "Mini Bar" },
      { id_fasilitas: 23, id_kamar: 7, nama_fasilitas: "AC" },
      { id_fasilitas: 24, id_kamar: 7, nama_fasilitas: "TV" },
      { id_fasilitas: 25, id_kamar: 7, nama_fasilitas: "WiFi" },
      { id_fasilitas: 26, id_kamar: 8, nama_fasilitas: "AC" },
      { id_fasilitas: 27, id_kamar: 8, nama_fasilitas: "TV" },
      { id_fasilitas: 28, id_kamar: 8, nama_fasilitas: "WiFi" },
      { id_fasilitas: 29, id_kamar: 8, nama_fasilitas: "Bathtub" },
      { id_fasilitas: 30, id_kamar: 8, nama_fasilitas: "Mini Bar" },
      { id_fasilitas: 31, id_kamar: 9, nama_fasilitas: "AC" },
      { id_fasilitas: 32, id_kamar: 9, nama_fasilitas: "WiFi" },
      { id_fasilitas: 33, id_kamar: 10, nama_fasilitas: "AC" },
      { id_fasilitas: 34, id_kamar: 10, nama_fasilitas: "TV" },
      { id_fasilitas: 35, id_kamar: 10, nama_fasilitas: "WiFi" },
    ];
    localStorage.setItem("fasilitas", JSON.stringify(fasilitasData));
  }

  // Tamu (password: tamu123)
  if (!localStorage.getItem("tamu")) {
    const tamuData: Tamu[] = [
      {
        id_tamu: 1,
        nama_tamu: "Maulana",
        email: "maulana@example.com",
        password: "tamu123",
        no_hp: "08123456789",
        alamat: "Malang",
      },
      {
        id_tamu: 2,
        nama_tamu: "Siti",
        email: "siti@example.com",
        password: "tamu123",
        no_hp: "08123456780",
        alamat: "Surabaya",
      },
      {
        id_tamu: 3,
        nama_tamu: "Budi",
        email: "budi@example.com",
        password: "tamu123",
        no_hp: "08123456781",
        alamat: "Jakarta",
      },
    ];
    localStorage.setItem("tamu", JSON.stringify(tamuData));
  }

  // Petugas (password: admin123)
  if (!localStorage.getItem("petugas")) {
    const petugasData: Petugas[] = [
      { id_petugas: 1, nama_petugas: "Admin", password: "admin123" },
      { id_petugas: 2, nama_petugas: "Petugas 1", password: "admin123" },
      { id_petugas: 3, nama_petugas: "Petugas 2", password: "admin123" },
    ];
    localStorage.setItem("petugas", JSON.stringify(petugasData));
  }

  // Reservasi
  if (!localStorage.getItem("reservasi")) {
    const reservasiData: Reservasi[] = [
      {
        id_reservasi: 1,
        id_kamar: 4,
        id_tamu: 1,
        id_petugas: 1,
        id_pembayaran: 1,
        tanggal_pesan: "2025-11-05T00:00:00Z",
        tanggal_checkin: "2025-11-06T00:00:00Z",
        tanggal_checkout: "2025-11-08T00:00:00Z",
        total_harga: 600000,
        status_reservasi: "Dipesan",
      },
    ];
    localStorage.setItem("reservasi", JSON.stringify(reservasiData));
  }

  // Pembayaran
  if (!localStorage.getItem("pembayaran")) {
    const pembayaranData: Pembayaran[] = [
      {
        id_pembayaran: 1,
        id_reservasi: 1,
        metode_pembayaran: "Transfer",
        jumlah_bayar: 600000,
        tanggal_pembayaran: "2025-11-05T00:00:00Z",
        status_pembayaran: "Lunas",
      },
    ];
    localStorage.setItem("pembayaran", JSON.stringify(pembayaranData));
  }

  // Laporan Bulanan
  if (!localStorage.getItem("laporanBulanan")) {
    const laporanData: LaporanBulanan[] = [
      {
        id_laporan: 1,
        id_petugas: 1,
        bulan: 11,
        tahun: 2025,
        total_pendapatan: 12000000,
        total_okupansi: 20,
        tanggal_dibuat: "2025-11-06T00:00:00Z",
        catatan_sistem: "Laporan otomatis",
      },
    ];
    localStorage.setItem("laporanBulanan", JSON.stringify(laporanData));
  }

  // Hotel Info
  if (!localStorage.getItem("hotelInfo")) {
    const hotelInfoData: HotelInfo = {
      nama_hotel: "ikuAE",
      alamat: "Jl. Paradise No. 123, Malang, Jawa Timur",
      telepon: "+62 812 3456 7890",
      email: "info@hotelparadise.com",
      checkin_time: "14:00 WIB",
      checkout_time: "12:00 WIB",
      layanan_24jam: true,
      tahun_pendirian: 2020,
      deskripsi:
        "Pengalaman menginap terbaik dengan pelayanan berkelas dan fasilitas premium.",
    };
    localStorage.setItem("hotelInfo", JSON.stringify(hotelInfoData));
  }
};

// Reset all data - force refresh untuk debugging
export const resetAllData = () => {
  if (typeof window === "undefined") return;
  localStorage.clear();
  initializeData();
};

// Generic CRUD operations
export const getData = <T>(entity: string): T[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(entity);
  return data ? JSON.parse(data) : [];
};

// Fungsi khusus untuk data hotel (single object, bukan array)
export const getHotelInfo = (): HotelInfo | null => {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("hotelInfo");
  return data ? JSON.parse(data) : null;
};

export const setData = <T>(entity: string, data: T[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(entity, JSON.stringify(data));
};

export const addData = <T extends { [key: string]: any }>(
  entity: string,
  item: Omit<T, string>
): T => {
  const data = getData<T>(entity);
  const idField = `id_${entity.replace("laporanBulanan", "laporan")}`;
  const maxId =
    data.length > 0 ? Math.max(...data.map((d: any) => d[idField] || 0)) : 0;
  const newItem = { ...item, [idField]: maxId + 1 } as T;
  data.push(newItem);
  setData(entity, data);
  return newItem;
};

export const updateData = <T extends { [key: string]: any }>(
  entity: string,
  id: number,
  updates: Partial<T>
): T | null => {
  const data = getData<T>(entity);
  const idField = `id_${entity.replace("laporanBulanan", "laporan")}`;
  const index = data.findIndex((item: any) => item[idField] === id);

  if (index === -1) return null;

  data[index] = { ...data[index], ...updates };
  setData(entity, data);
  return data[index];
};

export const deleteData = (entity: string, id: number): boolean => {
  const data = getData(entity);
  const idField = `id_${entity.replace("laporanBulanan", "laporan")}`;
  const filteredData = data.filter((item: any) => item[idField] !== id);

  if (filteredData.length === data.length) return false;

  setData(entity, filteredData);
  return true;
};

// Helper untuk format mata uang
export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

// Helper untuk format tanggal
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
