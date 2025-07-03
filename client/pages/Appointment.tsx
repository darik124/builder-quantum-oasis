import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function Appointment() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <section className="py-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              BOOK AN <span className="text-blue-400">APPOINTMENT</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Schedule a meeting with our team to discuss your interests,
              projects, or how you can get involved with Atlas.
            </p>
          </section>

          <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Schedule Your Visit
            </h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none">
                    <option value="">Select time</option>
                    <option value="9:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Purpose of Visit
                </label>
                <select className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none">
                  <option value="">Select purpose</option>
                  <option value="general">General Information</option>
                  <option value="membership">Membership Inquiry</option>
                  <option value="project">Project Collaboration</option>
                  <option value="research">Research Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none resize-none"
                  placeholder="Tell us more about what you'd like to discuss..."
                ></textarea>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                Schedule Appointment
              </Button>
            </form>

            <div className="mt-8 p-6 bg-black/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                What to Expect
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Tour of our facilities and laboratories</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Discussion of current projects and opportunities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Information about membership and how to get involved
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Q&A session with our team members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
