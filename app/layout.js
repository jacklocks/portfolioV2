import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AdminContextProvider } from "./context/adminContext";
import Footer from "./components/Footer";

const raleway = Raleway({
  weight: "variable",
  variable: "--raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Porfolio Éric Castets Développeur Web Freelance",
  description:
    "Porfolio Éric Castets Développeur Web Freelance spécialisé en Javascript, HTML, CSS, Sass, React.js, Next.js ",
  favicon: "/favicon.ico",
  keywords:
    "développeur web, front-end, freelance, Javascript, HTMl, CSS, Sass, React.js, Next.js",
  author: "Éric Castets",
  ogTitle: "Porfolio Éric Castets Développeur Web Freelance",
  ogDescription:
    "Porfolio Éric Castets Développeur Web Freelance spécialisé en Javascript, HTML, CSS, Sass, React.js, Next.js",
  ogType: "website",
  ogUrl: "https://portfolio-eric-castets.vercel.app/",
  ogLocale: "fr_FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${vcr.variable} ${titi.variable}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta property="og:image" content="./opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="screen portfolio" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://alexandre-hontcharouk-portfolio.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Alexandre Hontcharouk - Développeur Web Freelance à Lyon"
        />
        <meta
          property="twitter:description"
          content="Découvrez le portfolio d'Alexandre Hontcharouk, développeur web front-end à Lyon, Villeurbanne. Spécialisé en JavaScript, HTML, CSS, Sass, React.js et Next.js."
        />
        <meta property="twitter:image" content="./opengraph-image.png" />
      </Head>
      <body className={`${raleway.variable}`}>
        <AdminContextProvider>
          <Header />
          {children}
          <Footer />
        </AdminContextProvider>
      </body>
    </html>
  );
}
