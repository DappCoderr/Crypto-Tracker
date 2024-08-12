import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import CryptoList from "./Component/cryptoList";

export default function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <CryptoList />
      <Footer />
    </div>
  );
}
