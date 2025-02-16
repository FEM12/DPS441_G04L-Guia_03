import styles from "../page.module.css";
import React, {useState} from 'react';

const Articulo = ({lista,id,deleteArticulo}) => {
    return(
        <>
            <tr key={id}>
                <td>{lista.producto}</td>
                <td>{lista.marca}</td>
                <td>${parseFloat(lista.precio).toFixed(2)}</td>
                <td>{lista.cantidad}</td>
                <td>${parseFloat(lista.precio*lista.cantidad).toFixed(2)}</td>
                <td>
                    <button className={styles.btn_delete} onClick={()=>deleteArticulo(id)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
} 
export default Articulo;