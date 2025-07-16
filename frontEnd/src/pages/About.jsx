import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="border-b pb-4">
          <h1 className="text-3xl font-bold">About BookBase</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
            Your personal digital library companion.
          </p>
        </header>

        <section>
          <h2 className="text-xl font-semibold mb-2">What is BookBase?</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            BookBase is a simple, elegant app built to help you keep track of your reading life.
            Whether you're an avid reader or just starting out, BookBase gives you the tools to log books, rate them, and reflect on your reading experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Why We Built It</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We love books, and we wanted a tool that could help us stay organized without being overwhelming.
            BookBase is minimal by design but powerful in helping you stay connected to your reading journey.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>📖 Track books you’ve read, are reading, or plan to read</li>
            <li>⭐ Rate and review books with your own thoughts</li>
            <li>🌗 Switch between light and dark mode seamlessly</li>
            <li>🧑‍💼 Secure login and personal reading data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We believe that reading should be personal, rewarding, and organized.
            Our goal is to help readers of all kinds build better reading habits and never forget a great book again.
          </p>
        </section>

        <footer className="pt-10 border-t text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} BookBase. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
