import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Main from "../components/main/Main";
import Detail from "../components/detail/Detail";
import List from "../components/main/List";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="w-full">
        <Header />
      </div>

      <div>
        <Main />
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
