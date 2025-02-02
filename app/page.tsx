import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Features from "./components/Features";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
