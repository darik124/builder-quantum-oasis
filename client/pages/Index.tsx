import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/assets/782e1af4705f41fea76d70bb866118fc/atlas-logo-9d2766?format=webp&width=800"
              alt="Atlas Logo"
              className="h-32 w-32 mx-auto mb-6"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            EXPLORING THE
            <br />
            <span className="text-blue-400">WONDERS OF PHYSICS</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're a group of passionate students at Miami Dade College building
            a community where curiosity meets discovery. Join us as we explore
            the universe, from atoms to galaxies!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
            >
              <Link to="/about">MEET THE CLUB</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white hover:text-black text-lg px-8 py-6"
            >
              <Link to="/appointment">GET INVOLVED</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WHO WE ARE
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                We're a student-led physics club at Miami Dade College where
                curiosity drives everything we do. Whether you're fascinated by
                black holes, love solving puzzles, or just want to meet other
                science-minded students, you belong here!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">
                    Open to ALL students (any major!)
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Hands-on experiments & demos</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">
                    Fun field trips & guest speakers
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6208725/pexels-photo-6208725.jpeg"
                alt="Students working together in physics lab"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            WHAT WE DO TOGETHER
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Cool Experiments</h3>
              <p className="text-white/70 leading-relaxed">
                From building simple circuits to exploring quantum concepts, we
                love getting our hands dirty with science that makes you go
                "wow!"
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 1v8a5 5 0 105 5M6 3v2m0 0v5l5 5 5-5V5M6 5h8"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Field Trips</h3>
              <p className="text-white/70 leading-relaxed">
                Planetarium visits, science museums, observatory nights - we
                explore science beyond the classroom and create memories
                together.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Study Squad</h3>
              <p className="text-white/70 leading-relaxed">
                Homework help, study groups, and friendly discussions about
                everything from homework to the meaning of the universe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            READY TO JOIN THE ADVENTURE?
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Come hang out with us! Whether you're a physics major or just
            curious about how the universe works, we'd love to meet you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
          >
            <Link to="/appointment">JOIN THE CLUB</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="https://cdn.builder.io/api/v1/assets/782e1af4705f41fea76d70bb866118fc/atlas-logo-9d2766?format=webp&width=800"
                alt="Atlas Logo"
                className="h-8 w-8"
              />
              <span className="text-white text-xl font-bold tracking-wider">
                ATLAS PHYSICS
              </span>
            </div>

            <div className="flex space-x-6">
              <Link
                to="/about"
                className="text-white/60 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white/60 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/educational"
                className="text-white/60 hover:text-white transition-colors"
              >
                What We Do
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>
              &copy; 2024 Atlas Physics Club at Miami Dade College. Exploring
              science together!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
