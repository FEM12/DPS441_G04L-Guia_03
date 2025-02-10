import styles from "./page.module.css";
import Form from "./componentes/form";

export default function Home() {
  return (
    <main className={styles.main}>
      < div className="App">
        <div>
          <p>
            Aquí haresmos nuestro TO-DO list
          </p>
          <Form/>
        </div>
      </div>
    </main>
  );
}
