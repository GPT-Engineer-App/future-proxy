import { FaArrowRight, FaRobot, FaCode, FaLockOpen } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6 px-4 md:px-10 bg-gray-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <FaRobot className="inline mr-2" />
            FREE+OPEN
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>Home</li>
              <li>Documentation</li>
              <li>API</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="px-4 md:px-10 py-20">
        <section className="text-center">
          <h2 className="text-5xl font-bold mb-6">Access AI Power for Free</h2>
          <p className="text-xl mb-8">Integrate AI features in your applications with our free and open model API/reverse proxy.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Get Started</span>
            <FaArrowRight className="ml-2" />
          </button>
        </section>

        <section className="mt-20 grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <FaCode className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Easy Integration</h3>
            <p>Simple and straightforward APIs that you can integrate with any project in minutes.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <FaLockOpen className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Open Source</h3>
            <p>We believe in the power of open source. Our API is available for anyone to use and contribute to.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <FaRobot className="text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Advanced AI</h3>
            <p>Harness the latest advancements in artificial intelligence for your applications.</p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 px-4 md:px-10">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} FREE+OPEN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
