import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Features from "./components/Features";
import Journey from "./components/Journey";
import Contacts from "./components/Contacts";
import GoToApp from "./components/GoToApp";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Introduction />
        <Features />
        <Journey />
        <GoToApp />
        <Contacts />

        <Analytics />
      </main>
    </div>
  );
}
