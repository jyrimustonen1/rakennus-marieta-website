# Rakennus Marieta - Nettisivut

Nykyaikaiset nettisivut Rakennus Marieta -yritykselle. Sivut on rakennettu Next.js 14:llä ja julkaistaan Vercelissä.

## Teknologiapino

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animaatiot)
- **React Hook Form** (lomakkeiden käsittely)

## Kehitysympäristö

### Asennus

Asenna riippuvuudet:

```bash
npm install
```

### Kehityspalvelin

Käynnistä kehityspalvelin:

```bash
npm run dev
```

Avaa selaimessa [http://localhost:3000](http://localhost:3000)

### Tuotantoversio

Rakenna tuotantoversio:

```bash
npm run build
```

Käynnistä tuotantopalvelin:

```bash
npm start
```

## Julkaisu Vercelissä

### Vaihtoehto 1: Vercel CLI

1. Asenna Vercel CLI (jos ei ole asennettuna):
```bash
npm i -g vercel
```

2. Kirjaudu Verceliin:
```bash
vercel login
```

3. Julkaise projekti:
```bash
vercel
```

### Vaihtoehto 2: GitHub-integraatio

1. Pusketaan projekti GitHubiin
2. Mene [vercel.com](https://vercel.com)
3. Kirjaudu sisään ja valitse "New Project"
4. Yhdistä GitHub-repositorio
5. Vercel tunnistaa Next.js-projektin automaattisesti
6. Klikkaa "Deploy"

Vercel konfiguroi projektin automaattisesti ja julkaisee sen.

## Projektin rakenne

```
/
├── app/
│   ├── layout.tsx          # Päälayout
│   ├── page.tsx            # Etusivu
│   └── globals.css         # Globaalit tyylit
├── components/
│   ├── Navbar.tsx          # Navigaatio
│   ├── Hero.tsx            # Hero-osio
│   ├── Services.tsx        # Palvelut-osio
│   ├── References.tsx      # Referenssit-osio
│   ├── ContactForm.tsx     # Yhteydenottolomake
│   └── Footer.tsx          # Footer
├── public/
│   └── images/             # Kuvat (lisää referenssikuvat tähän)
└── package.json
```

## Kuvien lisääminen

1. Lisää referenssikuvat `public/images/` hakemistoon
2. Päivitä `components/References.tsx` käyttämään oikeita kuvia Image-komponentin kautta

## Yhteydenottolomake

Yhteydenottolomake on tällä hetkellä konfiguroitu näyttämään onnistumisviestin. Tuotannossa sinun täytyy:

1. Luoda API-reitti (`app/api/contact/route.ts`) tai
2. Integroida email-palvelu (esim. EmailJS, SendGrid, Resend)

Esimerkki API-reitistä löytyy Next.js dokumentaatiosta.

## Muokkaus

- **Värit**: Muokkaa `tailwind.config.ts` -tiedostossa
- **Sisältö**: Muokkaa komponenttien sisältöä suoraan
- **Tyylit**: Käytä Tailwind CSS -luokkia tai lisää omia tyylejä `globals.css` -tiedostoon

## Lisenssi

© 2024 Rakennus Marieta. Kaikki oikeudet pidätetään.

