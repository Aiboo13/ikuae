import React, { useEffect, useState } from "react";
import {
  getData,
  Kamar,
  Fasilitas,
  Reservasi,
  Tamu,
  HotelInfo,
  getHotelInfo,
  formatRupiah,
  resetAllData,
} from "../lib/db";
import { UserWithRole } from "../lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Wifi,
  Tv,
  Wind,
  Check,
  Star,
  Users,
  MapPin,
  Phone,
  Mail,
  Award,
  Hotel,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
  user: UserWithRole | null;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, user }) => {
  const [kamarList, setKamarList] = useState<Kamar[]>([]);
  const [fasilitasList, setFasilitasList] = useState<Fasilitas[]>([]);
  const [hotelInfo, setHotelInfo] = useState<HotelInfo | null>(null);
  const [stats, setStats] = useState({
    totalTamu: 0,
    kamarTersedia: 0,
    totalKamar: 0,
    okupansiRate: 0,
    totalReservasi: 0,
    rataRataHarga: 0,
  });

  useEffect(() => {
    // Temporary: Clear localStorage untuk memastikan data fresh
    // localStorage.clear();

    const kamarData = getData<Kamar>("kamar");
    const fasilitasData = getData<Fasilitas>("fasilitas");
    const reservasiData = getData<Reservasi>("reservasi");
    const tamuData = getData<Tamu>("tamu");
    const hotelData = getHotelInfo();

    console.log("Debug - Jumlah kamar yang dimuat:", kamarData.length);
    console.log("Debug - Data kamar:", kamarData);

    // Jika kamar kurang dari 10, reset data
    if (kamarData.length < 10) {
      console.log("Debug - Kamar kurang dari 10, melakukan reset data...");
      resetAllData();
      // Reload data setelah reset
      const newKamarData = getData<Kamar>("kamar");
      console.log("Debug - Setelah reset, jumlah kamar:", newKamarData.length);
      setKamarList(newKamarData);
    } else {
      setKamarList(kamarData);
    }

    setFasilitasList(fasilitasData);
    setHotelInfo(hotelData);

    // Hitung statistik dari database
    const kamarTersedia = kamarData.filter(
      (k) => k.status === "Tersedia"
    ).length;
    const totalKamar = kamarData.length;
    const kamarTerisi = kamarData.filter((k) => k.status === "Terisi").length;
    const okupansiRate =
      totalKamar > 0 ? Math.round((kamarTerisi / totalKamar) * 100) : 0;

    // Hitung rata-rata harga kamar
    const rataRataHarga =
      kamarData.length > 0
        ? Math.round(
            kamarData.reduce((sum, kamar) => sum + kamar.harga_per_malam, 0) /
              kamarData.length
          )
        : 0;

    setStats({
      totalTamu: tamuData.length,
      kamarTersedia,
      totalKamar,
      okupansiRate,
      totalReservasi: reservasiData.length,
      rataRataHarga,
    });
  }, []);

  const getFasilitasForKamar = (idKamar: number) => {
    return fasilitasList.filter((f) => f.id_kamar === idKamar);
  };

  const getFasilitasIcon = (namaFasilitas: string) => {
    const nama = namaFasilitas.toLowerCase();
    if (nama.includes("wifi")) return <Wifi className="w-4 h-4" />;
    if (nama.includes("tv")) return <Tv className="w-4 h-4" />;
    if (nama.includes("ac")) return <Wind className="w-4 h-4" />;
    return <Check className="w-4 h-4" />;
  };

  const getKapasitasTamu = (tipeKamar: string) => {
    switch (tipeKamar.toLowerCase()) {
      case "standard":
        return "2 Tamu";
      case "deluxe":
        return "3 Tamu";
      case "suite":
        return "4 Tamu";
      default:
        return "2 Tamu";
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 dark:from-violet-900 dark:via-purple-900 dark:to-pink-900 text-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl animate-slide-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-300" />
              <span className="text-amber-300 text-sm md:text-base">
                {hotelInfo?.tahun_pendirian
                  ? `Melayani sejak ${hotelInfo.tahun_pendirian}`
                  : "Awarded Best Hotel 2025"}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              Pengalaman Menginap <br />
              <span className="text-amber-300">Tak Terlupakan</span>
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-violet-100">
              {hotelInfo?.deskripsi ||
                "Nikmati kenyamanan dan kemewahan di ikuAE."}{" "}
              {stats.totalKamar} kamar mewah dengan fasilitas terbaik menanti
              Anda. Mulai dari{" "}
              {formatRupiah(
                Math.min(...kamarList.map((k) => k.harga_per_malam)) || 0
              )}{" "}
              per malam.
            </p>
            <div className="flex gap-3 md:gap-4 flex-wrap">
              <Button
                onClick={() =>
                  user ? onNavigate("reservasi") : onNavigate("login")
                }
                size="lg"
                className="bg-white text-violet-600 hover:bg-violet-50 shadow-xl"
              >
                Pesan Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Lihat Kamar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-16 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl mb-1">
                {stats.totalTamu}+
              </div>
              <div className="text-violet-200 text-xs md:text-sm">
                Tamu Terdaftar
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl mb-1">
                {stats.kamarTersedia}
              </div>
              <div className="text-violet-200 text-xs md:text-sm flex items-center gap-1">
                <Hotel className="w-3 h-3 md:w-4 md:h-4" />
                Kamar Tersedia
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl mb-1">
                {stats.okupansiRate}%
              </div>
              <div className="text-violet-200 text-xs md:text-sm">
                Tingkat Okupansi
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
              <div className="text-2xl md:text-3xl mb-1">24/7</div>
              <div className="text-violet-200 text-xs md:text-sm">Layanan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Kamar List */}
      <div className="container mx-auto px-4 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="text-center mb-8 md:mb-12 animate-slide-in-up">
          <div className="inline-block bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm mb-4">
            {stats.kamarTersedia} dari {stats.totalKamar} Kamar Tersedia
          </div>
          <h2 className="text-3xl md:text-4xl mb-3 md:mb-4 dark:text-white">
            Pilihan Kamar Terbaik
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Tersedia{" "}
            {kamarList.filter((k) => k.tipe_kamar === "Standard").length} kamar
            Standard,{" "}
            {kamarList.filter((k) => k.tipe_kamar === "Deluxe").length} kamar
            Deluxe, dan{" "}
            {kamarList.filter((k) => k.tipe_kamar === "Suite").length} kamar
            Suite. Semua dilengkapi dengan fasilitas modern dan kenyamanan
            maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {kamarList.map((kamar, index) => {
            const fasilitas = getFasilitasForKamar(kamar.id_kamar);

            return (
              <Card
                key={kamar.id_kamar}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg dark:shadow-gray-900 dark:bg-gray-800 animate-slide-in-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <ImageWithFallback
                      src={kamar.foto_kamar}
                      alt={kamar.tipe_kamar}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Badge
                      className={`absolute top-4 right-4 ${
                        kamar.status === "Tersedia"
                          ? "bg-emerald-500 hover:bg-emerald-600 shadow-lg"
                          : "bg-rose-500 hover:bg-rose-600 shadow-lg"
                      }`}
                    >
                      {kamar.status}
                    </Badge>

                    {/* Total fasilitas badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-sm">
                        {getFasilitasForKamar(kamar.id_kamar).length} Fasilitas
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 md:pt-6 pb-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-xl md:text-2xl dark:text-white">
                        {kamar.tipe_kamar}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{getKapasitasTamu(kamar.tipe_kamar)}</span>
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        Mulai dari
                      </div>
                      <div className="text-xl md:text-2xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                        {formatRupiah(kamar.harga_per_malam)}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        /malam
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fasilitas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {fasilitas.map((f) => (
                        <Badge
                          key={f.id_fasilitas}
                          variant="outline"
                          className="gap-1 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/30 text-xs"
                        >
                          {getFasilitasIcon(f.nama_fasilitas)}
                          {f.nama_fasilitas}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg group-hover:shadow-xl transition-all"
                    onClick={() => onNavigate("reservasi")}
                    disabled={kamar.status !== "Tersedia" || !user}
                  >
                    {!user
                      ? "Login untuk Reservasi"
                      : kamar.status === "Tersedia"
                      ? "Pesan Sekarang"
                      : "Tidak Tersedia"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Hotel className="w-6 h-6" />
                {hotelInfo?.nama_hotel || "ikuAE"}
              </h3>
              <p className="text-gray-400 mb-4">
                {hotelInfo?.deskripsi ||
                  "Pengalaman menginap terbaik dengan pelayanan berkelas dan fasilitas premium."}{" "}
                Melayani {stats.totalReservasi}+ reservasi dengan kepuasan tamu
                terjamin.
              </p>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <Star className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Kontak</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>
                    {hotelInfo?.alamat || "Jl. Paradise No. 123, Malang"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <span>{hotelInfo?.telepon || "+62 812 3456 7890"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-violet-400" />
                  <span>{hotelInfo?.email || "info@hotelparadise.com"}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-gray-400">
                <p>Check-in: {hotelInfo?.checkin_time || "14:00 WIB"}</p>
                <p>Check-out: {hotelInfo?.checkout_time || "12:00 WIB"}</p>
                <p>
                  Resepsionis: {hotelInfo?.layanan_24jam ? "24/7" : "Terbatas"}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              {hotelInfo?.nama_hotel || "ikuAE"}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
