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
              EDUCATIONAL <span className="text-blue-400">VALUE</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Atlas provides unparalleled educational opportunities that bridge
              the gap between theoretical knowledge and real-world aerospace
              applications, preparing students for successful careers in the
              space industry.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose Atlas?
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Hands-On Experience</h3>
                <p className="text-white/80">
                  Work on real aerospace projects including satellite design,
                  rocket propulsion systems, and space mission planning.
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
                <h3 className="text-xl font-bold mb-4">Expert Mentorship</h3>
                <p className="text-white/80">
                  Learn from industry professionals and experienced researchers
                  who guide your development and career growth.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Cutting-Edge Research
                </h3>
                <p className="text-white/80">
                  Participate in groundbreaking research projects that
                  contribute to the advancement of aerospace technology.
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
                <h3 className="text-xl font-bold mb-4">Industry Network</h3>
                <p className="text-white/80">
                  Connect with aerospace companies, startups, and research
                  institutions through our extensive professional network.
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation Lab</h3>
                <p className="text-white/80">
                  Access state-of-the-art facilities and equipment for
                  prototyping, testing, and developing your ideas.
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Flexible Learning</h3>
                <p className="text-white/80">
                  Choose from workshops, seminars, and project-based learning
                  that fits your schedule and interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our Programs
            </h2>

            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-blue-400">
                    Research Fellowship Program
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Join our elite research fellowship program where you'll work
                    alongside professors and industry experts on cutting-edge
                    aerospace projects. Fellows receive funding, mentorship, and
                    the opportunity to publish their research.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>12-month intensive research program</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Monthly stipend and research funding</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Conference presentation opportunities</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/806763/pexels-photo-806763.jpeg"
                    alt="Research laboratory"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-lg"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative">
                  <img
                    src="https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg"
                    alt="Satellite technology"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent rounded-lg"></div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold mb-4 text-blue-400">
                    Aerospace Bootcamp
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Intensive weekend bootcamps covering essential aerospace
                    engineering topics, from orbital mechanics to spacecraft
                    design. Perfect for students looking to quickly build
                    foundational knowledge.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Weekend intensive sessions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Hands-on projects and simulations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-blue-400">•</span>
                      <span>Certificate of completion</span>
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
              Success Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Sarah Chen</h4>
                    <p className="text-blue-400 text-sm">SpaceX Engineer</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Atlas gave me the practical experience and network I needed
                  to land my dream job at SpaceX. The research projects were
                  incredible."
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Marcus Rodriguez</h4>
                    <p className="text-blue-400 text-sm">NASA Intern</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "The mentorship and hands-on projects at Atlas prepared me
                  perfectly for my NASA internship. I couldn't have done it
                  without them."
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">Aisha Patel</h4>
                    <p className="text-blue-400 text-sm">PhD Candidate</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  "Atlas research fellowship led to my PhD acceptance at MIT.
                  The quality of research and mentorship is unmatched."
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
