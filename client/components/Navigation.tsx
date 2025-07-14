import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/educational", label: "What We Do" },
    { path: "/contact", label: "Contact" },
    { path: "/appointment", label: "Join Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F782e1af4705f41fea76d70bb866118fc%2Fb0a49234da7d4de9a34423f23726df4d?format=webp&width=800"
              alt="Atlas Logo"
              className="h-12 w-12"
            />
            <span className="text-white text-xl font-bold tracking-wider">
              ATLAS PHYSICS
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-blue-400 ${
                  location.pathname === item.path
                    ? "text-blue-400"
                    : "text-white/80"
                }`}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="hidden md:flex bg-transparent border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <Link to="/appointment">JOIN THE CLUB</Link>
          </Button>

          <Button variant="ghost" className="md:hidden text-white" size="sm">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
