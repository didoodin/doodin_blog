import Header from "../../components/common/Header";
import Resume from "../../components/resume/Resume";
import Footer from "../../components/common/Footer";

export default function Home() {
    return (
      <div className="container mx-auto">
          <Header />
        <div>
          <Resume />
        </div>
          <Footer />
      </div>
    );
  }