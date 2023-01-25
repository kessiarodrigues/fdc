import Footer from "../components/footer"
import HeaderView  from "../components/header"
import StartView from "./start"
import SobreView from "./sobre"
import CompaniesView from "./companies"
import FaqView from "./FAQ"
import FaqInfo from "./faqInfo"
import CompaniesView2 from "./companies2"

function App() {
    const settings = {
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
            clickable: true,
        },
    }

    return (
      <>
        <div className="App">
          <HeaderView />
          <StartView />
          <CompaniesView />
          <SobreView />
          <CompaniesView2/>
          <FaqView />
          <FaqInfo/>
          <Footer />
        </div>
      </>
    );
}

export default App;