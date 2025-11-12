import React, { useEffect, useState } from "react";
import {
  getData,
  addData,
  updateData,
  Kamar,
  Reservasi,
  Pembayaran,
  formatRupiah,
  Tamu,
  Petugas,
} from "../lib/db";
import { UserWithRole } from "../lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import {
  Calendar,
  CreditCard,
  User,
  MapPin,
  Phone,
  Mail,
  Home,
  Check,
  Sparkles,
} from "lucide-react";

interface ReservasiPageProps {
  user: UserWithRole | null;
  onNavigate: (page: string) => void;
}

export const ReservasiPage: React.FC<ReservasiPageProps> = ({
  user,
  onNavigate,
}) => {
  const [kamarList, setKamarList] = useState<Kamar[]>([]);
  const [selectedKamar, setSelectedKamar] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [totalHarga, setTotalHarga] = useState(0);
  const [jumlahHari, setJumlahHari] = useState(0);

  useEffect(() => {
    const load = async () => {
      const kamarData = await getData<Kamar>("kamar");
      setKamarList(kamarData.filter((k) => k.status === "Tersedia"));
    };

    load();
  }, []);

  useEffect(() => {
    if (selectedKamar && checkIn && checkOut) {
      const kamar = kamarList.find(
        (k) => k.id_kamar === parseInt(selectedKamar)
      );
      if (kamar) {
        const days = Math.ceil(
          (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        setJumlahHari(days);
        setTotalHarga(days > 0 ? days * kamar.harga_per_malam : 0);
      }
    }
  }, [selectedKamar, checkIn, checkOut, kamarList]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || user.role !== "tamu") {
      toast.error("Anda harus login sebagai tamu!");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      toast.error("Tanggal checkout harus setelah check-in!");
      return;
    }

    // Buat pembayaran dulu
    const pembayaran = addData<Pembayaran>("pembayaran", {
      id_reservasi: 0,
      metode_pembayaran: metodePembayaran,
      jumlah_bayar: totalHarga,
      tanggal_pembayaran: new Date().toISOString(),
      status_pembayaran: "Lunas",
    } as any);

    // Buat reservasi
    const reservasi = addData<Reservasi>("reservasi", {
      id_kamar: parseInt(selectedKamar),
      id_tamu: user.id,
      id_petugas: null,
      id_pembayaran: pembayaran.id_pembayaran,
      tanggal_pesan: new Date().toISOString(),
      tanggal_checkin: new Date(checkIn).toISOString(),
      tanggal_checkout: new Date(checkOut).toISOString(),
      total_harga: totalHarga,
      status_reservasi: "Dipesan",
    } as any);

    // Update id_reservasi di pembayaran
    updateData<Pembayaran>("pembayaran", pembayaran.id_pembayaran, {
      id_reservasi: reservasi.id_reservasi,
    });

    // Update status kamar
    updateData<Kamar>("kamar", parseInt(selectedKamar), {
      status: "Terisi",
    });

    toast.success("Reservasi berhasil dibuat!");

    setTimeout(() => {
      onNavigate("home");
    }, 1500);
  };

  if (!user || user.role !== "tamu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="shadow-2xl border-0 dark:bg-gray-900 dark:shadow-gray-950 animate-slide-in-up">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl dark:text-white">
              Akses Ditolak
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              Anda harus login sebagai tamu untuk membuat reservasi
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => onNavigate("login")}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const selectedKamarData = kamarList.find(
    (k) => k.id_kamar === parseInt(selectedKamar)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 animate-slide-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-2 rounded-full mb-4 text-sm md:text-base">
            <Sparkles className="w-4 h-4" />
            <span>Reservasi Kamar</span>
          </div>
          <h1 className="text-3xl md:text-4xl mb-2 dark:text-white">
            Pesan Kamar Anda
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base px-4">
            Lengkapi form di bawah untuk menyelesaikan reservasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Form */}
          <Card className="md:col-span-2 shadow-xl border-0 dark:bg-gray-800 dark:shadow-gray-950 animate-slide-in-up">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl dark:text-white">
                Detail Reservasi
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-sm md:text-base">
                Isi informasi pemesanan kamar hotel
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Data Tamu */}
                <div className="space-y-3">
                  <Label className="text-base md:text-lg flex items-center gap-2 dark:text-white">
                    <User className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    Informasi Tamu
                  </Label>
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 md:p-5 rounded-xl space-y-3 border border-violet-100 dark:border-violet-800">
                    <div className="flex items-center gap-2 text-xs md:text-sm">
                      <User className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Nama:
                      </span>
                      <span className="dark:text-white">
                        {user.role === "tamu"
                          ? (user.data as Tamu).nama_tamu
                          : (user.data as Petugas).nama_petugas}
                      </span>
                    </div>
                    {user.role === "tamu" && (
                      <>
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <Mail className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Email:
                          </span>
                          <span className="dark:text-white">
                            {(user.data as Tamu).email}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <Phone className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                          <span className="text-gray-600 dark:text-gray-400">
                            No. HP:
                          </span>
                          <span className="dark:text-white">
                            {(user.data as Tamu).no_hp}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm">
                          <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                          <span className="text-gray-600 dark:text-gray-400">
                            Alamat:
                          </span>
                          <span className="dark:text-white">
                            {(user.data as Tamu).alamat}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Pilih Kamar */}
                <div className="space-y-2">
                  <Label
                    htmlFor="kamar"
                    className="flex items-center gap-2 dark:text-white"
                  >
                    <Home className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    Pilih Kamar
                  </Label>
                  <Select
                    value={selectedKamar}
                    onValueChange={setSelectedKamar}
                    required
                  >
                    <SelectTrigger
                      id="kamar"
                      className="border-violet-200 dark:border-violet-800 dark:bg-gray-700 dark:text-white focus:border-violet-500"
                    >
                      <SelectValue placeholder="Pilih tipe kamar" />
                    </SelectTrigger>
                    <SelectContent>
                      {kamarList.map((kamar) => (
                        <SelectItem
                          key={kamar.id_kamar}
                          value={kamar.id_kamar.toString()}
                        >
                          <div className="flex justify-between items-center w-full">
                            <span className="dark:text-white">
                              {kamar.tipe_kamar}
                            </span>
                            <span className="text-violet-600 dark:text-violet-400 ml-4">
                              {formatRupiah(kamar.harga_per_malam)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tanggal */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="checkin"
                      className="flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-violet-600" />
                      Check-in
                    </Label>
                    <Input
                      id="checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="border-violet-200 focus:border-violet-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="checkout"
                      className="flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-violet-600" />
                      Check-out
                    </Label>
                    <Input
                      id="checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn || new Date().toISOString().split("T")[0]}
                      className="border-violet-200 focus:border-violet-500"
                      required
                    />
                  </div>
                </div>

                {/* Metode Pembayaran */}
                <div className="space-y-2">
                  <Label
                    htmlFor="pembayaran"
                    className="flex items-center gap-2"
                  >
                    <CreditCard className="w-5 h-5 text-violet-600" />
                    Metode Pembayaran
                  </Label>
                  <Select
                    value={metodePembayaran}
                    onValueChange={setMetodePembayaran}
                    required
                  >
                    <SelectTrigger
                      id="pembayaran"
                      className="border-violet-200 focus:border-violet-500"
                    >
                      <SelectValue placeholder="Pilih metode pembayaran" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Transfer">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Transfer Bank
                        </div>
                      </SelectItem>
                      <SelectItem value="E-Wallet">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          E-Wallet
                        </div>
                      </SelectItem>
                      <SelectItem value="Kartu Kredit">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Kartu Kredit
                        </div>
                      </SelectItem>
                      <SelectItem value="Cash">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          Cash
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => onNavigate("home")}
                    className="flex-1 border-violet-200 hover:bg-violet-50"
                  >
                    Batal
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Konfirmasi Reservasi
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Summary Card */}
          <div className="space-y-4">
            <Card
              className="shadow-xl border-0 sticky top-24 animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle>Ringkasan Pemesanan</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {selectedKamarData && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-600">Tipe Kamar</span>
                      <span>{selectedKamarData.tipe_kamar}</span>
                    </div>

                    {jumlahHari > 0 && (
                      <>
                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-gray-600">Durasi</span>
                          <span>{jumlahHari} malam</span>
                        </div>

                        <div className="flex justify-between items-center pb-3 border-b">
                          <span className="text-gray-600">Harga/malam</span>
                          <span>
                            {formatRupiah(selectedKamarData.harga_per_malam)}
                          </span>
                        </div>
                      </>
                    )}

                    {metodePembayaran && (
                      <div className="flex justify-between items-center pb-3 border-b">
                        <span className="text-gray-600">Pembayaran</span>
                        <span>{metodePembayaran}</span>
                      </div>
                    )}
                  </div>
                )}

                {totalHarga > 0 && (
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg border border-violet-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total Pembayaran</span>
                      <span className="text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {formatRupiah(totalHarga)}
                      </span>
                    </div>
                  </div>
                )}

                {!selectedKamar && (
                  <div className="text-center text-gray-500 py-8">
                    <Home className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <p className="text-sm">
                      Pilih kamar untuk melihat ringkasan
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
