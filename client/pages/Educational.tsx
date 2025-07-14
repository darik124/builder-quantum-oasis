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
              WHAT WE <span className="text-blue-400">DO</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              We're all about making physics fun, accessible, and exciting! From
              hands-on experiments to epic field trips, here's how we explore
              the universe together.
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
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Demo Days</h3>
                <p className="text-white/80">
                  Bi-weekly meetings where we explore cool physics experiments
                  together - think liquid nitrogen, pendulums, and making
                  circuits glow!
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Study Groups</h3>
                <p className="text-white/80">
                  Struggling with physics homework? We've got your back! Regular
                  study sessions where we tackle problems together and help each
                  other succeed.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Field Trips</h3>
                <p className="text-white/80">
                  Planetarium visits, science museums, and maybe even
                  observatories! We love taking our learning beyond the
                  classroom.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Guest Speakers</h3>
                <p className="text-white/80">
                  We invite professors, local scientists, and industry
                  professionals to share their stories and insights with us.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Science Café</h3>
                <p className="text-white/80">
                  Casual discussions about anything physics-related over coffee.
                  From black holes to quantum mechanics - all questions welcome!
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Campus Outreach</h3>
                <p className="text-white/80">
                  We set up tables on campus to share cool physics demos and get
                  more students excited about science.
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
