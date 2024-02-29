
import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Logo/>
      <Menu/>
      <Countries />
      <Footer/>      
    </main>
  );
}
