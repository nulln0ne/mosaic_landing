import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Features from "./components/Features";
import Journey from "./components/Journey";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Features />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}
