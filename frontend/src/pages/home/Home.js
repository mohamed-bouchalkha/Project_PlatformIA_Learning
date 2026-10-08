import Header from "../../components/common/Header"
import HeroSection from "../../components/sections/HeroSection"
import WhyChooseUsSection from "../../components/sections/WhyChooseUsSection"
import ContactSection from "../../components/sections/ContactSection"
import Footer from "../../components/common/Footer"


const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      {/* <ContactSection />   */}
      <Footer />
    </div>
  )
}

export default Home
