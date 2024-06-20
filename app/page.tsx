import Banner from "@/components/banner";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { PostalCode } from "@/components/postalcode";
import Reviews from "@/components/reviews";
import Quote from "@/components/reviews";
import Services  from "@/components/services";

export default function Home() {
  return (
    <div>
    <Banner />
    <Navbar />
    <Hero />
    <PostalCode />
    <Services />
    <Reviews />
    <Blog />
    <Footer />
    </div>
  )
}
