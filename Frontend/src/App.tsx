import { useEffect, useState } from "react";
import { initializeData } from "./lib/db";
import { UserWithRole } from "./lib/types";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { ReservasiPage } from "./components/ReservasiPage";
import { AdminPage } from "./components/AdminPage";
import { Toaster } from "./components/ui/sonner";
import { Registrasi } from "./components/Registrasi";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState<UserWithRole | null>(null);

  useEffect(() => {
    // Initialize data dari localStorage
    initializeData();

    // Check if user is logged in (dari sessionStorage)
    const savedUser = sessionStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: UserWithRole) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    setCurrentPage("home");
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} user={user} />;
      case "login":
        return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
      case "registrasi":
        return <Registrasi onNavigate={handleNavigate} />;
      case "reservasi":
        return user ? (
          <ReservasiPage onNavigate={handleNavigate} user={user} />
        ) : (
          <HomePage onNavigate={handleNavigate} user={user} />
        );
      case "admin":
        return user?.role === "petugas" ? (
          <AdminPage onNavigate={handleNavigate} user={user} onLogout={handleLogout} />
        ) : (
          <HomePage onNavigate={handleNavigate} user={user} />
        );
      default:
        return <HomePage onNavigate={handleNavigate} user={user} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          user={user}
          onLogout={handleLogout}
        />

        {renderPage()}

        <Toaster />
      </div>
    </ThemeProvider>
  );
}
