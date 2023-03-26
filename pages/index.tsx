import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Main from "../components/main/Main";
import Detail from "../components/detail/Detail";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <Header />
      </div>

      <div>
        <Detail />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
