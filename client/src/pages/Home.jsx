import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Categories from '../components/Categories';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <Categories />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <FeaturedProducts />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <WhyChoose />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <Testimonials />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <Newsletter />
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
