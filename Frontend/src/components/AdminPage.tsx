import React, { useEffect, useState } from "react";
import {
  getData,
  addData,
  Reservasi,
  Pembayaran,
  LaporanBulanan,
  Kamar,
  Tamu,
  formatRupiah,
  formatDate,
} from "../lib/db";
import { UserWithRole } from "../lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import {
  DollarSign,
  Calendar,
  Users,
  Bed,
  CheckCircle,
  PlusCircle,
  BarChart3,
  ArrowUpRight,
  FileText,
  Download,
} from "lucide-react";

interface AdminPageProps {
  user: UserWithRole | null;
  onNavigate: (page: string) => void;
}

interface LaporanHarian {
  id_tamu: number;
  id_kamar: number;
  tanggal_checkin: string;
  total_harga: number;
}

export const AdminPage: React.FC<AdminPageProps> = ({ user, onNavigate }) => {
  const [reservasiList, setReservasiList] = useState<Reservasi[]>([]);
  const [pembayaranList, setPembayaranList] = useState<Pembayaran[]>([]);
  const [laporanList, setLaporanList] = useState<LaporanBulanan[]>([]);
  const [kamarList, setKamarList] = useState<Kamar[]>([]);
  const [tamuList, setTamuList] = useState<Tamu[]>([]);
  const [laporanHarianList, setLaporanHarianList] = useState<LaporanHarian[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState((new Date().getMonth() + 1).toString());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [totalHarian, setTotalHarian] = useState(0);

  // Check if user is authorized to view admin page
  if (!user || user.role !== "petugas") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6">
            <p className="text-center text-red-600">
              Akses ditolak. Halaman ini hanya untuk petugas.
            </p>
            <Button onClick={() => onNavigate("home")} className="w-full mt-4">
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const loadData = async () => {
    const [reservasi, pembayaran, laporan, kamar, tamu] = await Promise.all([
      getData<Reservasi>("reservasi"),
      getData<Pembayaran>("pembayaran"),
      getData<LaporanBulanan>("laporanBulanan"),
      getData<Kamar>("kamar"),
      getData<Tamu>("tamu"),
    ]);

    setReservasiList(reservasi);
    setPembayaranList(pembayaran);
    setLaporanList(laporan);
    setKamarList(kamar);
    setTamuList(tamu);
  };

  useEffect(() => {
    loadData();
  }, []);

  const getKamarName = (idKamar: number) => {
    const kamar = kamarList.find((k) => k.id_kamar === idKamar);
    return kamar ? kamar.tipe_kamar : "Unknown";
  };

  const getTamuName = (idTamu: number) => {
    const tamu = tamuList.find((t) => t.id_tamu === idTamu);
    return tamu ? tamu.nama_tamu : "Unknown";
  };

  const loadLaporanHarian = async (tanggal?: string) => {
    try {
      const endpoint = tanggal 
        ? `http://localhost:3001/api/laporanharian/${tanggal}`
        : "http://localhost:3001/api/laporanharian";
      
      const response = await fetch(endpoint);
      const data = await response.json();
      
      // Normalize keys dari uppercase ke lowercase
      const normalizedData = data.map((item: any) => {
        const normalized: any = {};
        Object.keys(item).forEach(key => {
          normalized[key.toLowerCase()] = item[key];
        });
        return normalized;
      });
      
      setLaporanHarianList(normalizedData);
      
      // Ambil total pendapatan harian
      const sumEndpoint = tanggal
        ? `http://localhost:3001/api/sumlaporanharian/${tanggal}`
        : "http://localhost:3001/api/sumlaporanharian";
      
      const sumResponse = await fetch(sumEndpoint);
      const sumData = await sumResponse.json();
      
      // Handle berbagai format response
      const total = sumData?.TOTAL_PENDAPATAN_HARIAN 
        || sumData?.total_pendapatan_harian 
        || 0;
      
      setTotalHarian(Number(total) || 0);
      
      toast.success("Laporan harian berhasil dimuat");
    } catch (error) {
      console.error("Error loading laporan harian:", error);
      toast.error("Gagal memuat laporan harian");
      setLaporanHarianList([]);
      setTotalHarian(0);
    }
  };

  const generateLaporan = () => {
    const bulan = parseInt(selectedMonth);
    const tahun = parseInt(selectedYear);

    const existingLaporan = laporanList.find(
      (l) => l.bulan === bulan && l.tahun === tahun
    );

    if (existingLaporan) {
      toast.error(`Laporan untuk ${bulan}/${tahun} sudah dibuat!`);
      return;
    }

    const totalPendapatan = pembayaranList
      .filter((p) => {
        const tanggal = new Date(p.tanggal_pembayaran);
        return (
          tanggal.getMonth() + 1 === bulan && tanggal.getFullYear() === tahun
        );
      })
      .reduce((sum, p) => sum + p.jumlah_bayar, 0);

    const totalOkupansi = reservasiList.filter((r) => {
      const tanggal = new Date(r.tanggal_pesan);
      return (
        tanggal.getMonth() + 1 === bulan && tanggal.getFullYear() === tahun
      );
    }).length;

    addData<LaporanBulanan>("laporanBulanan", {
      id_petugas: user.id,
      bulan,
      tahun,
      total_pendapatan: totalPendapatan,
      total_okupansi: totalOkupansi,
      tanggal_dibuat: new Date().toISOString(),
      catatan_sistem: `Laporan periode ${bulan}/${tahun} dibuat oleh petugas`,
    } as any);

    toast.success(`Laporan untuk ${bulan}/${tahun} berhasil dibuat!`);
    loadData();
  };

  if (!user || user.role !== "petugas") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="shadow-2xl border-0 animate-slide-in-up">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Akses Ditolak</CardTitle>
            <CardDescription>
              Anda harus login sebagai petugas untuk mengakses halaman ini
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

  const kamarTersedia = kamarList.filter((k) => k.status === "Tersedia").length;
  const totalPendapatan = pembayaranList.reduce(
    (sum, p) => sum + p.jumlah_bayar,
    0
  );
  const pendapatanBulanIni = pembayaranList
    .filter(
      (p) => new Date(p.tanggal_pembayaran).getMonth() === new Date().getMonth()
    )
    .reduce((sum, p) => sum + p.jumlah_bayar, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="animate-slide-in-up">
              <h1 className="text-4xl mb-2">Dashboard Admin</h1>
              <p className="text-violet-100">Selamat datang, {user.nama}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <div className="text-sm text-violet-100">Hari ini</div>
              <div className="text-xl">
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Reservasi</CardTitle>
              <Calendar className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl mb-1">{reservasiList.length}</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>+12% dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden"
            style={{ animationDelay: "100ms" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Pendapatan</CardTitle>
              <DollarSign className="h-5 w-5 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl mb-1">
                {formatRupiah(totalPendapatan)}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>Bulan ini: {formatRupiah(pendapatanBulanIni)}</span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-400 to-violet-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Ketersediaan Kamar</CardTitle>
              <Bed className="h-5 w-5 text-violet-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl mb-1">
                {kamarTersedia}/{kamarList.length}
              </div>
              <div className="flex items-center text-xs text-gray-600">
                <span>
                  {Math.round((kamarTersedia / kamarList.length) * 100)}%
                  tersedia
                </span>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg hover:shadow-xl transition-shadow animate-slide-in-up overflow-hidden"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-bl-full opacity-10"></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Tamu</CardTitle>
              <Users className="h-5 w-5 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl mb-1">{tamuList.length}</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span>Terdaftar</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="reservasi" className="space-y-6">
          <TabsList className="bg-white shadow-md p-1 border-0">
            <TabsTrigger
              value="reservasi"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reservasi
            </TabsTrigger>
            <TabsTrigger
              value="pembayaran"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Pembayaran
            </TabsTrigger>
            <TabsTrigger
              value="harian"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <FileText className="w-4 h-4 mr-2" />
              Harian
            </TabsTrigger>
            <TabsTrigger
              value="laporan"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Bulanan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reservasi" className="space-y-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-violet-600" />
                  Daftar Reservasi
                </CardTitle>
                <CardDescription>Semua data reservasi hotel</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Tamu</TableHead>
                        <TableHead>Kamar</TableHead>
                        <TableHead>Check-in</TableHead>
                        <TableHead>Check-out</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {reservasiList.map((reservasi) => (
                        <TableRow
                          key={reservasi.id_reservasi}
                          className="hover:bg-violet-50/50 transition-colors"
                        >
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-violet-200"
                            >
                              #{reservasi.id_reservasi}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {getTamuName(reservasi.id_tamu)}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Bed className="w-4 h-4 text-violet-600" />
                              {getKamarName(reservasi.id_kamar)}
                            </div>
                          </TableCell>
                          <TableCell>
                            {formatDate(reservasi.tanggal_checkin)}
                          </TableCell>
                          <TableCell>
                            {formatDate(reservasi.tanggal_checkout)}
                          </TableCell>
                          <TableCell className="text-violet-600">
                            {formatRupiah(reservasi.total_harga)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                reservasi.status_reservasi === "Dipesan"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                reservasi.status_reservasi === "Dipesan"
                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                  : ""
                              }
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {reservasi.status_reservasi}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pembayaran" className="space-y-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-violet-600" />
                  Daftar Pembayaran
                </CardTitle>
                <CardDescription>Semua data pembayaran</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>ID Reservasi</TableHead>
                        <TableHead>Metode</TableHead>
                        <TableHead>Jumlah</TableHead>
                        <TableHead>Tanggal</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pembayaranList.map((pembayaran) => (
                        <TableRow
                          key={pembayaran.id_pembayaran}
                          className="hover:bg-violet-50/50 transition-colors"
                        >
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-violet-200"
                            >
                              #{pembayaran.id_pembayaran}
                            </Badge>
                          </TableCell>
                          <TableCell>#{pembayaran.id_reservasi}</TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-blue-200 text-blue-700"
                            >
                              {pembayaran.metode_pembayaran}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-violet-600">
                            {formatRupiah(pembayaran.jumlah_bayar)}
                          </TableCell>
                          <TableCell>
                            {formatDate(pembayaran.tanggal_pembayaran)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                pembayaran.status_pembayaran === "Lunas"
                                  ? "default"
                                  : "destructive"
                              }
                              className={
                                pembayaran.status_pembayaran === "Lunas"
                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                  : ""
                              }
                            >
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {pembayaran.status_pembayaran}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="harian" className="space-y-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 border-b">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-violet-600" />
                      Laporan Harian
                    </CardTitle>
                    <CardDescription>
                      Lihat transaksi dan pendapatan per hari
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="tanggal" className="text-sm whitespace-nowrap">
                        Pilih Tanggal:
                      </Label>
                      <Input
                        id="tanggal"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-auto"
                      />
                    </div>
                    <Button
                      onClick={() => loadLaporanHarian(selectedDate)}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Tampilkan
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Summary Card */}
                <div className="mb-6 p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl border border-violet-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Pendapatan Hari Ini</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        {formatRupiah(totalHarian)}
                      </p>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {selectedDate 
                        ? new Date(selectedDate).toLocaleDateString("id-ID", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : "Hari ini"
                      }
                    </span>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Tamu</TableHead>
                        <TableHead>Kamar</TableHead>
                        <TableHead>Check-in</TableHead>
                        <TableHead>Total Harga</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {laporanHarianList.length > 0 ? (
                        laporanHarianList.map((laporan, idx) => (
                          <TableRow
                            key={idx}
                            className="hover:bg-violet-50/50 transition-colors"
                          >
                            <TableCell>
                              {getTamuName(laporan.id_tamu)}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Bed className="w-4 h-4 text-violet-600" />
                                {getKamarName(laporan.id_kamar)}
                              </div>
                            </TableCell>
                            <TableCell>
                              {formatDate(laporan.tanggal_checkin)}
                            </TableCell>
                            <TableCell className="text-violet-600 font-medium">
                              {formatRupiah(laporan.total_harga)}
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                            Tidak ada transaksi untuk tanggal ini
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="laporan" className="space-y-4">
            <Card className="border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-violet-50 to-purple-50 border-b">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-violet-600" />
                      Laporan Bulanan
                    </CardTitle>
                    <CardDescription>
                      Generate dan lihat laporan bulanan
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="bulan" className="text-sm whitespace-nowrap">
                        Bulan:
                      </Label>
                      <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
                            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
                          ].map((bulan, idx) => (
                            <SelectItem key={idx + 1} value={(idx + 1).toString()}>
                              {bulan}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="tahun" className="text-sm whitespace-nowrap">
                        Tahun:
                      </Label>
                      <Select value={selectedYear} onValueChange={setSelectedYear}>
                        <SelectTrigger className="w-28">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={generateLaporan}
                      className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg"
                    >
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Generate
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>ID</TableHead>
                        <TableHead>Periode</TableHead>
                        <TableHead>Total Pendapatan</TableHead>
                        <TableHead>Total Okupansi</TableHead>
                        <TableHead>Tanggal Dibuat</TableHead>
                        <TableHead>Catatan</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {laporanList.map((laporan) => (
                        <TableRow
                          key={laporan.id_laporan}
                          className="hover:bg-violet-50/50 transition-colors"
                        >
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-violet-200"
                            >
                              #{laporan.id_laporan}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-violet-600" />
                              {laporan.bulan}/{laporan.tahun}
                            </div>
                          </TableCell>
                          <TableCell className="text-violet-600">
                            {formatRupiah(laporan.total_pendapatan)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="border-emerald-200 text-emerald-700"
                            >
                              {laporan.total_okupansi} reservasi
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {formatDate(laporan.tanggal_dibuat)}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600 max-w-xs truncate">
                            {laporan.catatan_sistem}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
