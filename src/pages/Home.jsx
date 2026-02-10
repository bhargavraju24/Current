import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Smart Digital Solutions for Modern Organizations
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            KodeBloom Technology builds reliable, scalable, and secure
            web applications that simplify business operations and
            improve productivity.
          </p>
        </section>

        {/* SERVICES – NO BOXES */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Our Core Services
            </h2>

            <div className="space-y-6">

              <div className="group border-b pb-4 transition">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:text-blue-700 transition">
                  Web Application Development
                </h3>
                <p className="text-gray-600 text-sm mt-1
                              group-hover:translate-x-1 transition">
                  Modern, responsive, and performance-driven applications
                  using industry-standard technologies.
                </p>
              </div>

              <div className="group border-b pb-4 transition">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:text-blue-700 transition">
                  Admin & Employee Dashboards
                </h3>
                <p className="text-gray-600 text-sm mt-1
                              group-hover:translate-x-1 transition">
                  Clean dashboards to manage employees, attendance,
                  tasks, and organizational data efficiently.
                </p>
              </div>

              <div className="group border-b pb-4 transition">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:text-blue-700 transition">
                  Secure Authentication Systems
                </h3>
                <p className="text-gray-600 text-sm mt-1
                              group-hover:translate-x-1 transition">
                  Role-based login systems with strong security
                  and controlled access.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* WHY US – LIGHT & CLEAN */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Why Choose KodeBloom
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="group">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:underline transition">
                  Reliability
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Our systems are built for stability, long-term use,
                  and real-world business needs.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:underline transition">
                  Scalability
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Applications designed to grow along with your
                  organization and user base.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:underline transition">
                  Clean User Experience
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Simple, intuitive interfaces focused on ease of use.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-blue-900
                               group-hover:underline transition">
                  Security-Focused Design
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Industry-standard security practices implemented
                  at every level.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* NEW CONTENT – OUR APPROACH */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">
              Our Approach
            </h2>

            <div className="space-y-5 text-center max-w-3xl mx-auto">

              <p className="text-gray-600 hover:text-gray-700 transition">
                We begin by understanding your requirements and
                challenges in detail.
              </p>

              <p className="text-gray-600 hover:text-gray-700 transition">
                Our team designs clean, user-focused interfaces
                backed by robust backend systems.
              </p>

              <p className="text-gray-600 hover:text-gray-700 transition">
                Every solution is tested, optimized, and deployed
                with scalability and security in mind.
              </p>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;
