import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Educational() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              OUR <span className="text-blue-400">PROGRAMS</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Atlas Physics Club offers comprehensive educational programming
              designed to enhance understanding of physical sciences through
              collaborative learning and hands-on exploration.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Regular Activities
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                <h3 className="text-xl font-bold mb-4">Laboratory Sessions</h3>
                <p className="text-white/80">
                  Bi-weekly demonstrations exploring fundamental physics
                  principles through hands-on experiments and interactive
                  learning experiences.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Study Groups</h3>
                <p className="text-white/80">
                  Peer-led academic support sessions focused on collaborative
                  problem-solving and course material reinforcement.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                <h3 className="text-xl font-bold mb-4">
                  Educational Excursions
                </h3>
                <p className="text-white/80">
                  Organized visits to planetariums, science museums, and
                  research facilities to connect theoretical knowledge with
                  practical applications.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Guest Lectures</h3>
                <p className="text-white/80">
                  Regular presentations by faculty, industry professionals, and
                  researchers sharing expertise in specialized physics fields.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Discussion Forums</h3>
                <p className="text-white/80">
                  Informal academic discussions covering current developments in
                  physics research and theoretical concepts.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
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
                <h3 className="text-xl font-bold mb-4">Campus Outreach</h3>
                <p className="text-white/80">
                  Educational demonstrations and information sessions designed
                  to promote physics education throughout the college community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Academic Programs & Initiatives
            </h2>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-400">
                    Peer Learning Initiative
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Our structured study groups provide collaborative learning
                    opportunities where students work together to master
                    challenging physics concepts. These sessions foster academic
                    excellence through peer-to-peer knowledge sharing and guided
                    problem-solving methodologies.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Weekly collaborative study sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Problem-solving workshops and tutorials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Exam preparation and review programs</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/6208699/pexels-photo-6208699.jpeg"
                    alt="Students working together in physics lab"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-lg"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <img
                    src="https://images.pexels.com/photos/3779214/pexels-photo-3779214.jpeg"
                    alt="Planetarium educational visit"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-lg"></div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4 text-blue-400">
                    Educational Outreach Program
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Our comprehensive field study program connects theoretical
                    classroom knowledge with practical scientific applications
                    through organized visits to research facilities, museums,
                    and observatories.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Monthly educational field studies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Science museums and planetarium visits</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>
                        Observatory research and astronomical observation
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              What Our Members Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Alex M.</h4>
                    <p className="text-blue-400 text-sm">Physics Major</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "I was struggling with physics until I found Atlas. The study
                  groups made all the difference - I actually understand
                  momentum now!"
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Jordan K.</h4>
                    <p className="text-blue-400 text-sm">Engineering Student</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Even though I'm not a physics major, everyone welcomed me
                  with open arms. The planetarium trip was absolutely amazing!"
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Maria S.</h4>
                    <p className="text-blue-400 text-sm">Pre-Med Student</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Atlas helped me see how physics connects to everything, even
                  medicine. Plus, I made some of my best friends here!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              START YOUR AEROSPACE JOURNEY
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join Atlas today and accelerate your career in aerospace
              engineering and physics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-black text-lg px-8 py-6"
              >
                <Link to="/appointment">Schedule Visit</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
