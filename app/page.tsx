import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
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
    <Blog />
    <Footer />
    </div>
  )
}
