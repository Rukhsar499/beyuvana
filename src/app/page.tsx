import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <div className="container mt-5">
      <h1 className="text-primary">Hello, Beyuvana 👋</h1>
      <p className="lead">This is a Next.js + TypeScript + Bootstrap project.</p>

      <button className="btn btn-success">Click Me</button>
    </div>
  );
}
