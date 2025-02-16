"use client"
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {

  const [datos,setDatos] = useState([]);

  useEffect(()=>{

    fetch('/lenguajes.json')
    .then(response => response.json())
    .then(data => setDatos(data));

  },[]);

  console.log(datos)

  return (

    <>
      <main className={styles.main}>
        {
          datos.map(values => (

            <div key={values.id} className={styles.card}>

              <div className={styles.card_header}></div>           

              <span className={styles.image_box}>
                <img src={Object.keys(values.img.src) == ""?"img/Error.png":values.img.src} alt={values.img.alt}/>
              </span>

              <div className={styles.card_main}>
                <div className={styles.titles}>
                  <p>{values.nombre}</p>
                  <p>{values.creador}</p>
                  <p>{values.anio}</p>                
                </div>

                <div className={styles.card_footer}>
                  <div className={styles.funcionality}>
                    <ul>
                      {values.paradigma.map((value,index) => <li key={index}>{value}</li>)}
                    </ul>
                  </div>
                  <div className={styles.description}><p>{values.uso_principal}</p></div>
                </div>

              </div>
            </div>

          ))
        }
      </main>
    </>
  
  );
}
