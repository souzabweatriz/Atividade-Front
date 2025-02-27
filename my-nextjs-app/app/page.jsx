import styles from "../styles/page.module.css";
import Header from "../components/Header";
import Image from "next/image"
import Card from "../components/Card";
import Footer from "../components/Footer"
import Banner from "../public/Banner.jpg"
import lanche from "../public/lanche.jpg"

export default function Home() {
  return (
    <div>
        <Header/>
      <main className={styles.main}>
        <aside className={styles.cards}>
        <Image className={styles.image} src={Banner} alt="Banner bk"/>
        <Card title="Balde de Batata" content="Nossas crocantes e irresistíveis batatas fritas agora na versão balde!"/>
        <Card title="Chicken Duplo" content="Pão com gergelim, dois deliciosos filés de peito de frango empanado, cheddar fatiado, maionese e alface. É de dar água na boca!"/>
        <Card title="Mega Stacker Rodeio" content="Duas camadas do tradicional Mega Stacker e a novidade do molho barbecue com seis onion rings! Esse é o Mega Stacker Rodeio 2.0. Vai encarar?"/>
        <Image className={styles.image02} src={lanche} alt="Banner bk"/>
        </aside>
      </main>
      <Footer props="Footer"/>
    </div>

  );
}