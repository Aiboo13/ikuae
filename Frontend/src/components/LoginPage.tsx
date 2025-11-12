import React, { useState } from "react";
import { getData, Tamu, Petugas } from "../lib/db";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from "sonner";
import { User, Shield, Lock, Mail, Sparkles } from "lucide-react";

interface LoginPageProps {
  onLogin: (user: UserWithRole) => void;
  onNavigate: (page: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onNavigate,
}) => {
  const [tamuEmail, setTamuEmail] = useState("");
  const [tamuPassword, setTamuPassword] = useState("");
  const [petugasName, setPetugasName] = useState("");
  const [petugasPassword, setPetugasPassword] = useState("");

  const handleTamuLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const tamuList = getData<Tamu>("tamu");
    const tamu = tamuList.find(
      (t) => t.email === tamuEmail && t.password === tamuPassword
    );

    if (tamu) {
      onLogin({
        id: tamu.id_tamu,
        nama: tamu.nama_tamu,
        email: tamu.email,
        role: "tamu",
        data: tamu,
      });
      toast.success(`Selamat datang, ${tamu.nama_tamu}!`);
      onNavigate("home");
    } else {
      toast.error("Email atau password salah!");
    }
  };

  const handlePetugasLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const petugasList = getData<Petugas>("petugas");
    const petugas = petugasList.find(
      (p) => p.nama_petugas === petugasName && p.password === petugasPassword
    );

    if (petugas) {
      onLogin({
        id: petugas.id_petugas,
        nama: petugas.nama_petugas,
        role: "petugas",
        data: petugas,
      });
      toast.success(`Selamat datang, ${petugas.nama_petugas}!`);
      onNavigate("admin");
    } else {
      toast.error("Nama atau password salah!");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 dark:from-violet-900 dark:via-purple-900 dark:to-pink-900">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/20 dark:bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/30 dark:bg-pink-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-300/20 dark:bg-violet-300/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl border-0 dark:bg-gray-900 dark:shadow-gray-950 animate-slide-in-up">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center relative">
              <Lock className="w-7 h-7 md:w-8 md:h-8 text-white" />
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
            Selamat Datang
          </CardTitle>
          <CardDescription className="text-sm md:text-base dark:text-gray-400">
            Login untuk mengakses sistem reservasi hotel
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="tamu" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-800 p-1">
              <TabsTrigger
                value="tamu"
                className="gap-2 text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Tamu</span>
              </TabsTrigger>
              <TabsTrigger
                value="petugas"
                className="gap-2 text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Petugas</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tamu" className="space-y-4 mt-6">
              <form onSubmit={handleTamuLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="tamu-email"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-violet-600" />
                    Email
                  </Label>
                  <Input
                    id="tamu-email"
                    type="email"
                    placeholder="maulana@example.com"
                    value={tamuEmail}
                    onChange={(e) => setTamuEmail(e.target.value)}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tamu-password"
                    className="flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-violet-600" />
                    Password
                  </Label>
                  <Input
                    id="tamu-password"
                    type="password"
                    placeholder="••••••••"
                    value={tamuPassword}
                    onChange={(e) => setTamuPassword(e.target.value)}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                >
                  Login sebagai Tamu
                </Button>

                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 rounded-lg border border-violet-100 dark:border-violet-800">
                  <p className="text-xs md:text-sm text-center text-gray-700 dark:text-gray-300">
                    <span className="block mb-1">Demo Credentials:</span>
                    <span className="text-violet-600 dark:text-violet-400">
                      maulana@example.com / tamu123
                    </span>
                  </p>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="petugas" className="space-y-4 mt-6">
              <form onSubmit={handlePetugasLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="petugas-name"
                    className="flex items-center gap-2"
                  >
                    <User className="w-4 h-4 text-violet-600" />
                    Nama Petugas
                  </Label>
                  <Input
                    id="petugas-name"
                    type="text"
                    placeholder="Admin"
                    value={petugasName}
                    onChange={(e) => setPetugasName(e.target.value)}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="petugas-password"
                    className="flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    Password
                  </Label>
                  <Input
                    id="petugas-password"
                    type="password"
                    placeholder="••••••••"
                    value={petugasPassword}
                    onChange={(e) => setPetugasPassword(e.target.value)}
                    className="border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:border-violet-500 focus:ring-violet-500"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                >
                  Login sebagai Petugas
                </Button>

                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 p-4 rounded-lg border border-violet-100 dark:border-violet-800">
                  <p className="text-xs md:text-sm text-center text-gray-700 dark:text-gray-300">
                    <span className="block mb-1">Demo Credentials:</span>
                    <span className="text-violet-600 dark:text-violet-400">
                      Admin / admin123
                    </span>
                  </p>
                </div>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => onNavigate("home")}
              className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/30"
            >
              Kembali ke Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
