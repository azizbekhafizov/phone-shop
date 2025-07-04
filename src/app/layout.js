import Footer from "./footer/Footer";
import "./globals.css";
import Navbar from "./navbar/Navbar";

export const metadata = {
  title: "Cyber Do'kon",
  description: "Eng zamonaviy telefonlar, planshetlar va noutbuklar do'koni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
