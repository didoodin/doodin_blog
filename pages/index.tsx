import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Main from "../components/main/Main";

export default function Home() {
  return (
    <div className="container mx-auto">
        <Header />
      <div>
        <Main />
      </div>
        <Footer />
    </div>
  );
}
