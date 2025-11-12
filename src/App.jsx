import React from "react";
import profilePic from "./assets/fotonk.jpg";
import portoApp1 from "./assets/IndihomeTV.PNG";
import portoApp2 from "./assets/Maxstream.PNG";
import portoApp3 from "./assets/Mangoesky.PNG";
import portoApp4 from "./assets/OBAH.PNG";
import portoApp5 from "./assets/Mantools.PNG";

export default function App() {
  const portfolioData = {
    frontend: [
      {
        name: "Mangoesky",
        description: "An application that allows users to order and manage satellite-based internet services",
        img: portoApp3
      },
      {
        name: "ManTools",
        description: "Internal application from Metrasat for field technician",
        img: portoApp5
      },
      {
        name: "OBAH",
        description: "Local Transportation App on Malang City",
        img: portoApp4
      },
    ],
    backend: [
      {
        name: "IndiHome TV",
        description: "TV streaming application for Telkomsel's OTT platform",
        img: portoApp1
      },
      {
        name: "Maxstream Apps",
        description: "TV streaming service application exclusively for Telkomsel card users",
        img: portoApp2
      },
    ],
    otherProjects: [
      "Paris Salon, online booking and order homecare service salon.",
      "Web ERP for registration, medical, pharmacy.",
      "Icha Approvement, an application for internal document approval system.",
      "Backend Go-Techinician, a backend service for support mantools application.",
      "IPTV Minipack Dashboard, a web dashboard to monitor IPTV mini pack services.",
      "Anypoint, an application to support targeted ads on Indihome TV Setup Box.",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl p-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="flex items-center space-x-6">
            <img
              src={profilePic}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold text-white">Mochammad Irsyad</h1>
              <p className="text-blue-100 mt-2 text-sm">
                Senior IT Engineer | Backend Developer | Tech Enthusiast
              </p>
              <p className="text-blue-100 mt-1 text-sm">
                Pontianak, 26 Desember 1994 | +62 821-1367-8633
              </p>
              <p className="text-blue-100 mt-1 text-sm">
                mochammadirsyad94@gmail.com
              </p>
              <a
                href="https://www.linkedin.com/in/mochammad-irsyad-874400108/"
                className="text-white hover:text-blue-200 text-sm mt-2 block font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                → LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Professional Summary */}
        <section className="bg-gray-800 rounded-lg p-8 shadow-xl border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Professional Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Results-driven IT professional with over 10 years of experience in network infrastructure planning, backend and Android application development, and digital platform operations. Experienced in overseeing technology initiatives from concept to deployment, balancing technical execution with budget efficiency and business objectives. Proven track record in enhancing functionality and performance for large-scale platforms such as IndiHome TV. 
            Skilled in Golang, Java, PHP, Python, and Linux server administration. Seeking a challenging Senior IT Engineer role or an opportunity to transition into Product Management, eager to leverage technical expertise to drive product innovation and business growth.
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Work Experience
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-white text-lg">Senior IT Engineer</h3>
              <p className="text-green-400 text-sm mt-1">Telkomsel – Jakarta, Indonesia | Jan 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-3">
                <li>Backend Developer for IndiHome TV and Maxstream Apps, optimizing system architecture.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-white text-lg">Officer 2 OTT Infrastructure Development</h3>
              <p className="text-blue-400 text-sm mt-1">DTV Video Telkom STO Gambir – Jakarta, Indonesia | 2018 – 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-3">
                <li>Supervised CAPEX projects for IndiHome TV OTT platform.</li>
                <li>Managed deployment & bug fixing cycles for Indihome TV IPTV platform.</li>
                <li>Network planning and installation for Indihome TV.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-indigo-500 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-white text-lg">Android & Web Backend Developer</h3>
              <p className="text-indigo-400 text-sm mt-1">Metrasat – Indonesia | 2017 - 2018</p>
              <ul className="list-disc list-inside text-gray-300 mt-3">
                <li>Developed native Android applications.</li>
                <li>Built RESTful APIs and database solutions for mobile and web applications.</li>
                <li>Contributed to projects including Mangoesky and other internal applications.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-cyan-500 shadow-lg hover:shadow-xl transition">
              <h3 className="font-bold text-white text-lg">Android Developer</h3>
              <p className="text-cyan-400 text-sm mt-1">Gumcode Software House – Indonesia | 2015 - 2017</p>
              <ul className="list-disc list-inside text-gray-300 mt-3">
                <li>Developed and maintained Android applications for various clients.</li>
                <li>Collaborated with UI/UX teams to implement mobile-first designs.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Skills
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-300"><span className="font-semibold text-white">Programming Languages:</span> Golang, Java, Kotlin, PHP, Python, Javascript, MySQL</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-indigo-500">
              <p className="text-gray-300"><span className="font-semibold text-white">Networking:</span> Network Planning (Topology, IP Subnetting), Server & Network Installation & Configuration (Dell, HP, Cisco, Mikrotik) </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-300"><span className="font-semibold text-white">Tools & Software:</span> GIT, Notion, Figma, Android Studio, Wireshark, Adobe Photoshop & Premier, AutoCAD</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-300"><span className="font-semibold text-white">Operating Systems:</span> Windows, Linux (Centos, Ubuntu, Suse), Mac OS</p>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Education & Certifications
          </h2>
          <p className="text-white font-semibold mb-4">Bachelor of Computer Science – Brawijaya University, Malang (2012 – 2017)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>IBM Product Management: An Introduction (2025)</li>
            <li>Introduction to Containers Docker, Kubernetes & OpenShift (2025)</li>
            <li>Telkom 5 Bold Moves (2023)</li>
            <li>Viaccess Orca MultiDRM Platform Solution (2022)</li>
            <li>TOEFL ITP (2017)</li>
            <li>Cisco CCNA First Stage (2015)</li>
          </ul>
        </section>

        {/* Portfolio */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Portfolio
          </h2>
          
          {/* Frontend Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
              <span className="text-3xl">🎨</span> Frontend Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.frontend.map((project, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700">
                  <div className="relative overflow-hidden h-48">
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-lg">{project.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
              <span className="text-3xl">⚙️</span> Backend Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.backend.map((project, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-700">
                  <div className="relative overflow-hidden h-48">
                    <img src={project.img} alt={project.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-lg">{project.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="bg-gradient-to-r from-purple-900 to-gray-800 rounded-lg p-8 shadow-xl border border-purple-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-300 flex items-center gap-2">
              <span className="text-3xl">📋</span> Other Notable Projects
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {portfolioData.otherProjects.map((project, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 font-bold mt-1">▸</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-gray-800 rounded-lg p-8 shadow-xl border-l-4 border-purple-500">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Additional Information
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Volunteer: Ketimbang Ngemis Malang, ACT
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Leadership: Project Leader for Social Service
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Hobby: Sport, Games, Culinary
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">✓</span> Personality: Honest, Responsible, Colaborative
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12 border-t border-gray-700">
        <p className="text-sm">© 2025 Mochammad Irsyad | Backend Developer & IT Engineer</p>
      </footer>
    </div>
  );
}