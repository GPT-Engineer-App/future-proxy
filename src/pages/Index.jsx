import { FaArrowRight, FaRobot, FaCode, FaLockOpen } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-4 px-6 md:py-6 md:px-10 bg-gray-800/30 backdrop-blur sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            <FaRobot className="inline mr-2" />
            FREE+OPEN
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 font-medium">
              <li>Home</li>
              <li>Documentation</li>
              <li>API</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="px-6 md:px-10 py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800 parallax min-h-screen">
        <section className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Access AI Power for Free</h2>
          <p className="text-lg md:text-xl mb-8">Integrate AI features in your applications with our free and open model API/reverse proxy.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span>Get Started</span>
            <FaArrowRight className="ml-2" />
          </button>
        </section>

        <section className="mt-16 md:mt-24 grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-gray-800/50 p-8 rounded-lg text-center backdrop-blur hover:bg-gray-800/70 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
            <FaCode className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Easy Integration</h3>
            <p>Simple and straightforward APIs that you can integrate with any project in minutes.</p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg text-center backdrop-blur hover:bg-gray-800/70 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
            <FaLockOpen className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Open Source</h3>
            <p>We believe in the power of open source. Our API is available for anyone to use and contribute to.</p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-lg text-center backdrop-blur hover:bg-gray-800/70 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg">
            <FaRobot className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Advanced AI</h3>
            <p>Harness the latest advancements in artificial intelligence for your applications.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800/30 py-4 md:py-6 px-6 md:px-10 backdrop-blur">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} FREE+OPEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
