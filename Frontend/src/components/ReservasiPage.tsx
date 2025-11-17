import React, { useEffect, useState } from "react";
import {
  getData,
  Kamar,
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

interface Reservasi {
  id_reservasi: number;
  id_kamar: number;
  id_tamu: number;
  tanggal_checkin: string;
  tanggal_checkout: string;
  status_reservasi: string;
}

export const ReservasiPage: React.FC<ReservasiPageProps> = ({
  user,
  onNavigate,
}) => {
  const [kamarList, setKamarList] = useState<Kamar[]>([]);
  const [reservasiList, setReservasiList] = useState<Reservasi[]>([]);
  const [selectedKamar, setSelectedKamar] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [totalHarga, setTotalHarga] = useState(0);
  const [jumlahHari, setJumlahHari] = useState(0);
  const [isDateConflict, setIsDateConflict] = useState(false);

  useEffect(() => {
    const load = async () => {
      const kamarData = await getData<Kamar>("kamar");
      const reservasiData = await getData<Reservasi>("reservasi");
      
      // Ambil semua kamar (tidak filter status)
      setKamarList(kamarData);
      
      // Filter hanya reservasi yang aktif (Dipesan atau Checkin)
      setReservasiList(
        reservasiData.filter(
          (r) => r.status_reservasi === "Dipesan" || r.status_reservasi === "Checkin"
        )
      );
    };

    load();
  }, []);

  // Fungsi untuk cek apakah ada konflik tanggal dengan reservasi lain
  const checkDateConflict = (
    idKamar: number,
    checkInDate: string,
    checkOutDate: string
  ): boolean => {
    const selectedCheckIn = new Date(checkInDate);
    const selectedCheckOut = new Date(checkOutDate);

    // Cek apakah ada reservasi lain untuk kamar yang sama dengan range tanggal yang overlap
    const conflict = reservasiList.some((reservasi) => {
      if (reservasi.id_kamar !== idKamar) return false;

      const existingCheckIn = new Date(reservasi.tanggal_checkin);
      const existingCheckOut = new Date(reservasi.tanggal_checkout);

      // Cek overlap: (Start1 <= End2) and (End1 >= Start2)
      return (
        selectedCheckIn < existingCheckOut && selectedCheckOut > existingCheckIn
      );
    });

    return conflict;
  };

  useEffect(() => {
    if (selectedKamar && checkIn && checkOut) {
      const kamar = kamarList.find(
        (k) => k.id_kamar === parseInt(selectedKamar)
      );
      if (kamar) {
        // Cek konflik tanggal
        const hasConflict = checkDateConflict(
          parseInt(selectedKamar),
          checkIn,
          checkOut
        );
        setIsDateConflict(hasConflict);

        if (hasConflict) {
          setJumlahHari(0);
          setTotalHarga(0);
          toast.error(
            "Kamar sudah dipesan untuk tanggal tersebut. Silakan pilih tanggal lain."
          );
        } else {
          const days = Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          );
          setJumlahHari(days);
          setTotalHarga(days > 0 ? days * kamar.harga_per_malam : 0);
        }
      }
    }
  }, [selectedKamar, checkIn, checkOut, kamarList, reservasiList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || user.role !== "tamu") {
      toast.error("Anda harus login sebagai tamu!");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      toast.error("Tanggal checkout harus setelah check-in!");
      return;
    }

    // Cek konflik tanggal sebelum submit
    if (isDateConflict) {
      toast.error("Kamar sudah dipesan untuk tanggal tersebut!");
      return;
    }

    try {
      // Kirim data reservasi ke backend API
      const response = await fetch("http://localhost:3001/api/reservasi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_kamar: parseInt(selectedKamar),
          id_tamu: user.id,
          tanggal_checkin: new Date(checkIn).toISOString(),
          tanggal_checkout: new Date(checkOut).toISOString(),
          total_harga: totalHarga,
          metode_pembayaran: metodePembayaran,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal membuat reservasi");
      }

      toast.success("Reservasi berhasil dibuat!");

      setTimeout(() => {
        onNavigate("home");
      }, 1500);

    } catch (error: any) {
      console.error("Error membuat reservasi:", error);
      toast.error(error.message || "Terjadi kesalahan saat membuat reservasi");
    }
  };

  if (!user || user.role !== "tamu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="shadow-2xl border-0 dark:bg-gray-900 dark:shadow-gray-950 animate-slide-in-up max-w-md w-full">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl dark:text-white mb-3">
              Akses Ditolak
            </CardTitle>
            <CardDescription className="dark:text-gray-400 text-base">
              Anda harus login sebagai tamu untuk membuat reservasi
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Button
              onClick={() => onNavigate("login")}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 h-12 text-base"
              size="lg"
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
                    onValueChange={(value: string) => {
                      setSelectedKamar(value);
                      // Reset tanggal saat ganti kamar
                      setCheckIn("");
                      setCheckOut("");
                      setIsDateConflict(false);
                    }}
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
                          <div className="flex justify-between items-center w-full gap-4">
                            <div className="flex items-center gap-2">
                              <span className="dark:text-white">
                                {kamar.tipe_kamar}
                              </span>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full ${
                                  kamar.status === "Tersedia"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                                }`}
                              >
                                {kamar.status}
                              </span>
                            </div>
                            <span className="text-violet-600 dark:text-violet-400">
                              {formatRupiah(kamar.harga_per_malam)}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedKamar && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      💡 Pilih tanggal untuk mengecek ketersediaan kamar
                    </p>
                  )}
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
                      disabled={!selectedKamar}
                      className={`border-violet-200 focus:border-violet-500 ${
                        !selectedKamar ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      required
                    />
                    {!selectedKamar && (
                      <p className="text-xs text-gray-500">
                        Pilih kamar terlebih dahulu
                      </p>
                    )}
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
                      disabled={!selectedKamar || !checkIn}
                      className={`border-violet-200 focus:border-violet-500 ${
                        !selectedKamar || !checkIn
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      required
                    />
                    {!checkIn && selectedKamar && (
                      <p className="text-xs text-gray-500">
                        Pilih tanggal check-in terlebih dahulu
                      </p>
                    )}
                  </div>
                </div>

                {/* Peringatan jika ada konflik */}
                {isDateConflict && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm flex items-center gap-2">
                      <span className="text-lg">⚠️</span>
                      Kamar sudah dipesan untuk tanggal tersebut. Silakan pilih
                      tanggal lain.
                    </p>
                  </div>
                )}

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
                    disabled={isDateConflict || !selectedKamar || !checkIn || !checkOut}
                    className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <div className="space-y-2 pb-3 border-b">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tipe Kamar</span>
                        <span className="font-medium">{selectedKamarData.tipe_kamar}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">Status:</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${
                            selectedKamarData.status === "Tersedia"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                          }`}
                        >
                          {selectedKamarData.status}
                        </span>
                      </div>
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
