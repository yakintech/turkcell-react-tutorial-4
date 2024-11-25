import Footer from "./templateSample/Footer";
import Header from "./templateSample/Header";
import Navbar from "./templateSample/Navbar";
import PageContent from "./templateSample/PageContent";

function App() {

  let address = {
    street:"Vişnezade mah.",
    region:"Beşiktaş",
    no:11,
    city:"İstanbul"
  }
  const hello = () => {
    alert("Hi")
  }

  return <>
    <Navbar/>
    <Header/>
    <PageContent/>
    <Footer />
  </>
}

export default App;
