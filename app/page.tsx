import Banner from "@/components/banner";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Quote from "@/components/quote";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div>
    <Banner />
    <Navbar />
    <Hero />
    <Services />
    <Quote />
    </div>
  )
}
