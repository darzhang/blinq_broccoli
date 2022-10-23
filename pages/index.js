import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import MainBody from "../components/MainBody";

export default function HomePage() {
  return (
    <div className="h-screen">
      <Navigation />
      <MainBody />
      <Footer />
    </div>
  );
}
