import Header from "../../components/common/Header";
import Detail from "../../components/detail/Detail";
import Footer from "../../components/common/Footer";

export default function Home() {
    return (
      <div className="container mx-auto">
          <Header />
        <div>
          <Detail />
        </div>
          <Footer />
      </div>
    );
  }