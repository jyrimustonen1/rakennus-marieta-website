export default function Footer() {
  const recentProjects = [
    { title: "Suurin rakennusprojekti Espoossa", admin: "Admin", comments: "3 kommenttia" },
    { title: "Kokonaisremontti omakotitaloon", admin: "Admin", comments: "5 kommenttia" },
    { title: "Moderni kylpyhuoneremontti", admin: "Admin", comments: "2 kommenttia" },
  ];

  return (
    <footer className="bg-secondary-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">RAKENNUS MARIETA</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Pienellä joella nimeltä Duden virtaa heidän paikkansa ohi ja tarjoaa sen tarvittavilla säädöksillä.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 flex items-center justify-center rounded transition">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 flex items-center justify-center rounded transition">
                <span className="text-white">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 flex items-center justify-center rounded transition">
                <span className="text-white">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 flex items-center justify-center rounded transition">
                <span className="text-white">ig</span>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Palvelut</h4>
            <ul className="space-y-3">
              {recentProjects.map((project, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-16 h-16 bg-secondary-700 rounded flex-shrink-0 flex items-center justify-center">
                    🏗️
                  </div>
                  <div className="flex-1">
                    <a href="#" className="text-sm hover:text-primary-500 transition block mb-1">
                      {project.title}
                    </a>
                    <div className="text-xs text-gray-500">
                      <span>{project.admin}</span> · <span>{project.comments}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pikalinkit</h4>
            <ul className="space-y-2">
              <li><a href="#etusivu" className="hover:text-primary-500 transition">Etusivu</a></li>
              <li><a href="#palvelut" className="hover:text-primary-500 transition">Palvelut</a></li>
              <li><a href="#referenssit" className="hover:text-primary-500 transition">Projektit</a></li>
              <li><a href="#tiimi" className="hover:text-primary-500 transition">Tiimi</a></li>
              <li><a href="#yhteystiedot" className="hover:text-primary-500 transition">Yhteystiedot</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kysymyksiä?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Espoo, Suomi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+358401234567" className="hover:text-primary-500 transition">
                  +358 40 123 4567
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@rakennusmarieta.fi" className="hover:text-primary-500 transition">
                  info@rakennusmarieta.fi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rakennus Marieta. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}

