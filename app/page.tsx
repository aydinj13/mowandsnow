import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import Quote from "@/components/reviews";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <div>
    <Banner />
    <Navbar />
    <Hero />
    <Services />
    <Reviews />
    <Blog />
    <Footer />
    </div>
  )
}
