import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 absolute inset-0 -z-10"></div>

      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="bg-background py-4 shadow-inner border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white text-center">
            🚀 Built with{" "}
            <span className="text-red-500">❤️</span> by{" "}
            <strong>Sundram Rai</strong> | Powered by{" "}
            <strong>React</strong>, <strong>Supabase</strong> &{" "}
            <strong>Vite</strong> ⚡
            <a
              href="https://github.com/Sundramrai3691"
              className="underline ml-2 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
