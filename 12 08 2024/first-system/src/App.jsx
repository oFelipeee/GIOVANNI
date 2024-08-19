import Header from "./Components/Header"
import Card from "./Components/Card"
import "./Components/Banner.css"
import "./Components/Card.css"
import "./app.css"
import { Banner } from "./Components/Banner";
import BannerCard from "./Components/BannerCard"
import Form from "./Components/Form"

function App() {

  return (
    <>
    <Header/>
    <Card/>
    <Banner/>
    <BannerCard 
    titulo="Banner Principal new" 
    subTitulo="Lorem ipsum new"
    />
    <Form/>
    </>
  );
};

export default App;