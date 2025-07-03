import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <section className="py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CONTACT <span className="text-blue-400">US</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Ready to join our mission? Get in touch with Atlas and become part
              of the future of aerospace engineering.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">
                    Email
                  </h3>
                  <p className="text-white/80">info@atlasaerospace.org</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">
                    Phone
                  </h3>
                  <p className="text-white/80">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">
                    Office Hours
                  </h3>
                  <p className="text-white/80">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-400">
                    Location
                  </h3>
                  <p className="text-white/80">
                    Engineering Building, Room 420
                    <br />
                    University Campus
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none resize-none"
                    placeholder="Tell us more about your interest in Atlas..."
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
