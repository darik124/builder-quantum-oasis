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
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">I</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-white/70">
                  Constantly pushing boundaries and exploring new possibilities
                  in aerospace technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-white/70">
                  Working together to achieve goals that no individual could
                  accomplish alone.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-white/70">
                  Striving for the highest standards in everything we do, from
                  research to education.
                </p>
              </div>
            </div>
          </section>

          {/* History */}
          <section className="py-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2020 - Foundation</h3>
                  <p className="text-white/80">
                    Atlas was founded by a group of passionate physics and
                    engineering students who shared a vision of advancing
                    aerospace technology and education.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    2021 - First Projects
                  </h3>
                  <p className="text-white/80">
                    Launched our first research projects in satellite technology
                    and began organizing educational workshops for fellow
                    students.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2022 - Growth</h3>
                  <p className="text-white/80">
                    Expanded our membership and established partnerships with
                    aerospace industry leaders and research institutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-4 h-4 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2024 - Innovation</h3>
                  <p className="text-white/80">
                    Continuing to lead in aerospace research and education,
                    preparing for our next chapter of groundbreaking projects
                    and achievements.
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
