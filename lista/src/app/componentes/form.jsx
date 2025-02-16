"use client"
import styles from "../page.module.css";
import React, {useEffect, useState} from 'react';
import Articulo from './articulo';

const Form = () => { 

    const [articulo,setArticulo] = useState({});
    const [lista,setLista] = useState([]);
    const [total,setTotal] = useState(parseFloat(0).toFixed(2));

    const handleChange = e => setArticulo((prev => ({...prev,[e.target.name]:e.target.value})));
    const handleClick = e => {
        if(Object.keys(lista).length === ''){
            alert('El campo no puede ser vacío');
            return
        }
        setLista([...lista,articulo]);
    };
    const deleteArticulo = indice => {
        const newLista = [...lista];
        newLista.splice(indice,1);
        setLista(newLista);
    }

    useEffect(() => {
        console.log("Todos cambiaron:",lista);
        const acumuladoTotal = lista.reduce((acumulador, item) => acumulador + item.precio * item.cantidad,0);
        setTotal(acumuladoTotal.toFixed(2));
    },[lista]); 

    return ( 

        <>
            <form className={styles.form} onSubmit={e => e.preventDefault()}>
                <div className={styles.container}>
                    <input className={styles.form_input} type="text" placeholder="Producto" name='producto' onChange={handleChange}/>
                    <input className={styles.form_input} type="text" placeholder="Marca" name='marca' onChange={handleChange}/>
                    <input className={styles.form_input} type="text" placeholder="Precio" name='precio' onChange={handleChange}/>
                    <input className={styles.form_input} type="text" placeholder="Cantidad" name='cantidad' onChange={handleChange}/>                    
                    <button className={styles.form_button} onClick={handleClick}>Agregar</button>
                </div>
            </form>

            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((lista,id) => (<Articulo lista={lista} id={id} key={id} deleteArticulo={deleteArticulo}/>))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Total Compra: ${total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>

    ); 
} 
export default Form;