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
              JOIN <span className="text-blue-400">THE CLUB</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Ready to explore physics with us? Let us know you're interested
              and we'll keep you in the loop about our next meeting and
              activities!
            </p>
          </section>

          <div className="bg-gray-900 p-8 rounded-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get Involved!
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

              <div>
                <label className="block text-sm font-medium mb-2">
                  What's your major?
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none"
                  placeholder="Physics, Engineering, Pre-Med, Art... anything!"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What interests you most about physics?
                </label>
                <select className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none">
                  <option value="">Pick what sounds coolest to you</option>
                  <option value="astronomy">Astronomy & Space</option>
                  <option value="quantum">Quantum Mechanics</option>
                  <option value="experiments">Hands-on Experiments</option>
                  <option value="studying">Study Groups & Help</option>
                  <option value="friends">Meeting Science Friends</option>
                  <option value="everything">Everything Physics!</option>
                  <option value="curious">Just Curious</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Anything else you'd like us to know?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-black border border-white/20 rounded-md focus:border-blue-400 focus:outline-none resize-none"
                  placeholder="Questions? Specific interests? Just say hi! (Optional)"
                ></textarea>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3">
                Count Me In!
              </Button>
            </form>

            <div className="mt-8 p-6 bg-black/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                What Happens Next?
              </h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>We'll send you info about our next meeting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Join our group chat to stay in the loop</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>No pressure - come check us out when you can!</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Meet other students who love science</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
