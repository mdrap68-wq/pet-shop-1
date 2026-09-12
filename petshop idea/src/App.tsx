import { Header } from "./components/Header";
import { Blog } from "./sections/Blog";
import { CatBanner } from "./sections/CatBanner";
import { Categories, Hero } from "./sections/Hero";
import { Footer } from "./sections/Footer";
import { Newsletter } from "./sections/Newsletter";
import { Products } from "./sections/Products";
import { Promos } from "./sections/Promos";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Promos />
        <Products />
        <CatBanner />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
