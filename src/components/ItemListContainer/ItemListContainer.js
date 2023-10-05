import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"



function ItemListContainer ({greeting}){

    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();

    console.log("La categoria que llego aca es:", categoryId)

    
    useEffect(()=>{

        const asyncFunc = categoryId ? getProductosByCategory : getProductos

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response);
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId]) 


    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )

}

export default ItemListContainer;