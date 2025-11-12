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
// Note: The frontend now prefers reading data from the backend API
// running at http://localhost:3001/api. For writes (add/update/delete)
// we keep the localStorage fallback because the backend currently
// exposes only GET endpoints.

const API_BASE = "http://localhost:3001/api";

export const initializeData = () => {
  // keep the function for compatibility, but don't auto-seed when
  // the backend is available. Consumers can still call resetAllData
  // to re-seed localStorage for offline/demo use.
  if (typeof window === "undefined") return;
  // no-op: seeding remains available via resetAllData
};

// Reset all data - force refresh untuk debugging
export const resetAllData = () => {
  if (typeof window === "undefined") return;
  localStorage.clear();
  // Optionally re-seed demo data by calling old initializer logic.
  // For simplicity we won't re-implement seeding here; consumers
  // can add demo data manually if needed.
};

// Generic CRUD operations
// Read-only: try backend first, fallback to localStorage
export const getData = async <T>(entity: string): Promise<T[]> => {
  if (typeof window === "undefined") return [];

  // map entity names used by the frontend to API endpoints
  const endpoint =
    entity === "laporanBulanan" ? "laporanbulanan" : entity;

  try {
    const res = await fetch(`${API_BASE}/${endpoint}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    // Normalize backend column names (Oracle returns uppercase column names)
    if (Array.isArray(data)) {
      return data.map((item: any) => {
        if (!item || typeof item !== "object") return item;
        const mapped: any = {};
        Object.keys(item).forEach((k) => {
          // convert keys like ID_KAMAR -> id_kamar
          const key = k.toLowerCase();
          mapped[key] = item[k];
        });
        return mapped as T;
      });
    }
    return data;
  } catch (err) {
    // fallback to localStorage for offline/demo mode
    const local = localStorage.getItem(entity);
    return local ? JSON.parse(local) : [];
  }
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
  // Operate on localStorage (backend is read-only currently)
  const local = localStorage.getItem(entity);
  const data: any[] = local ? JSON.parse(local) : [];
  const idField = `id_${entity.replace("laporanBulanan", "laporan")}`;
  const maxId = data.length > 0 ? Math.max(...data.map((d: any) => d[idField] || 0)) : 0;
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
  const local = localStorage.getItem(entity);
  const data: any[] = local ? JSON.parse(local) : [];
  const idField = `id_${entity.replace("laporanBulanan", "laporan")}`;
  const index = data.findIndex((item: any) => item[idField] === id);

  if (index === -1) return null;

  data[index] = { ...data[index], ...updates };
  setData(entity, data);
  return data[index];
};

export const deleteData = (entity: string, id: number): boolean => {
  const local = localStorage.getItem(entity);
  const data: any[] = local ? JSON.parse(local) : [];
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
