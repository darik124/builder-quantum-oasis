import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Hero Section */}
          <section className="py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ABOUT <span className="text-blue-400">ATLAS PHYSICS</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              We're a brand new, student-led physics club at Miami Dade College
              where passionate learners come together to explore the amazing
              world of science, support each other, and have fun doing it!
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Our Mission
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To create a welcoming space where students from all backgrounds
                can explore physics together, support each other's learning, and
                discover the joy of understanding how our universe works.
              </p>
              <p className="text-white/80 leading-relaxed">
                We believe that science is for everyone, and that the best
                learning happens when curious minds come together to ask
                questions and seek answers.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">
                Our Vision
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                To grow into a thriving community that not only helps students
                succeed in their physics courses but also inspires a lifelong
                love of learning and scientific thinking.
              </p>
              <p className="text-white/80 leading-relaxed">
                We dream of becoming the go-to place on campus for anyone who's
                ever looked up at the stars and wondered "how does that work?"
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              What We're About
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">I</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Inclusion</h3>
                <p className="text-white/70">
                  We welcome students from all academic backgrounds and
                  experience levels, fostering an environment where everyone can
                  contribute and learn.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-white/70">
                  We strive for academic rigor and intellectual growth while
                  maintaining a supportive learning environment for all members.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-white/70">
                  Through peer learning and group problem-solving, we achieve
                  greater understanding than any individual could reach alone.
                </p>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              How We Started
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Fall 2024 - The Spark
                  </h3>
                  <p className="text-white/80">
                    A few physics students at Miami Dade College realized they
                    wanted more than just classroom learning. They dreamed of a
                    place where students could explore physics together and
                    support each other's journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Winter 2024 - Official Launch
                  </h3>
                  <p className="text-white/80">
                    Atlas Physics Club was officially born! We started meeting
                    regularly, planning our first activities, and spreading the
                    word around campus.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Spring 2025 - Growing Together
                  </h3>
                  <p className="text-white/80">
                    We're just getting started! Our goal is to welcome new
                    members, organize cool events, and build the physics
                    community we've always wanted at MDC.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    The Future - Who Knows?
                  </h3>
                  <p className="text-white/80">
                    Maybe we'll organize amazing field trips, invite incredible
                    guest speakers, or start research projects. The sky's the
                    limit when passionate students come together!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
