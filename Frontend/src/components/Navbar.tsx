import React from "react";
import { Hotel, User, LogOut, Sparkles, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { UserWithRole } from "../lib/types";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  user: UserWithRole | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  user,
  onLogout,
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex items-center gap-2 md:gap-3 cursor-pointer group"
            onClick={() => onNavigate("home")}
          >
            <div className="relative">
              <Hotel className="w-6 h-6 md:w-8 md:h-8 text-violet-600 dark:text-violet-400 transition-transform group-hover:scale-110" />
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                ikuAE
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Luxury & Comfort
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => onNavigate("home")}
              className={`px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                  : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
              }`}
            >
              Home
            </button>

            {user && (
              <button
                onClick={() => onNavigate("reservasi")}
                className={`px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                  currentPage === "reservasi"
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                    : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                }`}
              >
                <span className="hidden sm:inline">Reservasi</span>
                <span className="sm:hidden">Book</span>
              </button>
            )}

            {user?.role === "petugas" && (
              <button
                onClick={() => onNavigate("admin")}
                className={`px-3 md:px-5 py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                  currentPage === "admin"
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/50"
                    : "hover:bg-violet-50 dark:hover:bg-violet-900/20 text-gray-700 dark:text-gray-300"
                }`}
              >
                Admin
              </button>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>

            {!user ? (
              <Button
                onClick={() => onNavigate("login")}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-200 dark:shadow-violet-900/50 text-sm md:text-base"
                size="sm"
              >
                <User className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Login</span>
              </Button>
            ) : (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/30 dark:to-purple-900/30 px-3 md:px-4 py-2 rounded-full">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center text-white text-sm">
                    {user.nama.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm hidden md:inline dark:text-white">
                    {user.nama}
                  </span>
                </div>
                <Button
                  onClick={onLogout}
                  variant="outline"
                  size="sm"
                  className="rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 hover:border-red-200 dark:border-gray-700 dark:text-gray-300"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
