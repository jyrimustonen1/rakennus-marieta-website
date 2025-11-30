export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">RAKENNUS MARIETA</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Tarjoamme ammattitaitoista rakennus- ja saneeraustyötä Espoossa ja pääkaupunkiseudulla. Yli 30 vuoden kokemuksella varmistamme laadukkaan lopputuloksen jokaiselle projektille.
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

          {/* Column 2 - Quick Links */}
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

          {/* Column 3 - Contact */}
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

