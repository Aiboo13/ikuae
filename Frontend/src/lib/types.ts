import { Tamu, Petugas } from "./db";

export type UserWithRole = {
  id: number;
  nama: string;
  role: "tamu" | "petugas";
  data: Tamu | Petugas;
  email?: string;
};
