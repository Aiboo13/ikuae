import React, { useState } from "react";
import { UserPlus, Mail, Lock, User, Phone, MapPin, Eye, EyeOff, Sparkles } from "lucide-react";
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

interface RegistrasiProps {
  onNavigate: (page: string) => void;
  onRegisterSuccess?: () => void;
}

export const Registrasi: React.FC<RegistrasiProps> = ({ onNavigate, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    nama_tamu: "",
    email: "",
    password: "",
    confirmPassword: "",
    no_hp: "",
    alamat: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Validasi nama
    if (!formData.nama_tamu.trim()) {
      newErrors.nama_tamu = "Nama lengkap wajib diisi";
    } else if (formData.nama_tamu.trim().length < 3) {
      newErrors.nama_tamu = "Nama minimal 3 karakter";
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // Validasi password
    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    // Validasi konfirmasi password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password wajib diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    // Validasi no HP
    const phoneRegex = /^[0-9]{10,13}$/;
    if (!formData.no_hp.trim()) {
      newErrors.no_hp = "Nomor HP wajib diisi";
    } else if (!phoneRegex.test(formData.no_hp.replace(/\D/g, ""))) {
      newErrors.no_hp = "Nomor HP tidak valid (10-13 digit)";
    }

    // Validasi alamat
    if (!formData.alamat.trim()) {
      newErrors.alamat = "Alamat wajib diisi";
    } else if (formData.alamat.trim().length < 10) {
      newErrors.alamat = "Alamat minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Kirim ke backend API
      const response = await fetch("http://localhost:3001/api/tamu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama_tamu: formData.nama_tamu.trim(),
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
          no_hp: formData.no_hp.trim(),
          alamat: formData.alamat.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registrasi gagal");
      }

      const data = await response.json();
      console.log("Registrasi berhasil:", data);

      setSuccessMessage("Registrasi berhasil! Silakan login dengan akun Anda.");
      
      // Reset form
      setFormData({
        nama_tamu: "",
        email: "",
        password: "",
        confirmPassword: "",
        no_hp: "",
        alamat: "",
      });

      // Redirect ke login setelah 2 detik
      setTimeout(() => {
        if (onRegisterSuccess) {
          onRegisterSuccess();
        }
        onNavigate("login");
      }, 2000);

    } catch (error: any) {
      console.error("Error registrasi:", error);
      setErrors({
        submit: error.message || "Terjadi kesalahan saat registrasi. Silakan coba lagi.",
      });
    } finally {
      setIsLoading(false);
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

      <div className="w-full max-w-md relative z-10">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate("home")}
          className="mb-4 text-white hover:bg-white/10 hover:text-white"
        >
          ← Kembali
        </Button>

        <Card className="shadow-2xl border-0 dark:bg-gray-900/95 backdrop-blur-xl animate-slide-in-up">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center relative">
                <UserPlus className="w-7 h-7 md:w-8 md:h-8 text-white" />
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Buat Akun Baru
            </CardTitle>
            <CardDescription className="text-sm md:text-base dark:text-gray-400">
              Daftar untuk mulai reservasi kamar hotel
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Success Message */}
            {successMessage && (
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-center text-sm">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-center text-sm">
                  {errors.submit}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="nama_tamu" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nama Lengkap *
                </Label>
                <Input
                  id="nama_tamu"
                  name="nama_tamu"
                  type="text"
                  value={formData.nama_tamu}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className={errors.nama_tamu ? "border-red-500" : ""}
                />
                {errors.nama_tamu && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.nama_tamu}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password *
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Minimal 6 karakter"
                    className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Konfirmasi Password *
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Ketik ulang password"
                    className={errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Nomor HP */}
              <div className="space-y-2">
                <Label htmlFor="no_hp" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Nomor HP *
                </Label>
                <Input
                  id="no_hp"
                  name="no_hp"
                  type="tel"
                  value={formData.no_hp}
                  onChange={handleChange}
                  placeholder="08123456789"
                  className={errors.no_hp ? "border-red-500" : ""}
                />
                {errors.no_hp && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.no_hp}</p>
                )}
              </div>

              {/* Alamat */}
              <div className="space-y-2">
                <Label htmlFor="alamat" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Alamat Lengkap *
                </Label>
                <Input
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  placeholder="Masukkan alamat lengkap"
                  className={errors.alamat ? "border-red-500" : ""}
                />
                {errors.alamat && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.alamat}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 mt-2"
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Mendaftar...
                  </span>
                ) : (
                  "Daftar Sekarang"
                )}
              </Button>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Sudah punya akun?{" "}
                  <Button
                    type="button"
                    variant="link"
                    onClick={() => onNavigate("login")}
                    className="p-0 h-auto font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                  >
                    Login di sini
                  </Button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};