import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import FAQAccordion from "../app/components/FAQAccordion";


export default function Home() {
  return (
     <>
      <Header />
 <FAQAccordion />
       <Footer />
    </>
  );
}
