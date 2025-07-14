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
              src="https://cdn.builder.io/api/v1/image/assets%2F782e1af4705f41fea76d70bb866118fc%2Fb0a49234da7d4de9a34423f23726df4d?format=webp&width=800"
              alt="Atlas Logo"
              className="h-40 w-40 mx-auto mb-6"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            ADVANCING
            <br />
            <span className="text-blue-400">PHYSICS EDUCATION</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            A student-led physics organization at Miami Dade College dedicated
            to fostering academic excellence, scientific curiosity, and
            collaborative learning in the physical sciences.
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
                OUR MISSION
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Atlas Physics Club creates an inclusive academic environment
                where students explore fundamental physics concepts, engage in
                collaborative learning, and develop critical thinking skills
                essential for scientific inquiry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">
                    Open to students of all academic backgrounds
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">
                    Hands-on laboratory demonstrations
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">
                    Educational outreach and guest lectures
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
            OUR PROGRAMS
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
              <h3 className="text-2xl font-bold mb-4">
                Laboratory Demonstrations
              </h3>
              <p className="text-white/70 leading-relaxed">
                Interactive experiments covering fundamental physics principles,
                from electromagnetic phenomena to quantum mechanics
                applications.
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Educational Outreach</h3>
              <p className="text-white/70 leading-relaxed">
                Field trips to research facilities, planetariums, and science
                museums to connect classroom theory with real-world
                applications.
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
              <h3 className="text-2xl font-bold mb-4">Academic Support</h3>
              <p className="text-white/70 leading-relaxed">
                Peer-led study groups, problem-solving sessions, and
                collaborative learning opportunities to enhance academic
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            JOIN OUR ACADEMIC COMMUNITY
          </h2>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            Whether you're pursuing physics or simply interested in scientific
            exploration, we welcome students from all academic disciplines to
            join our learning community.
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
                src="https://cdn.builder.io/api/v1/image/assets%2F782e1af4705f41fea76d70bb866118fc%2Fb0a49234da7d4de9a34423f23726df4d?format=webp&width=800"
                alt="Atlas Logo"
                className="h-10 w-10"
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
