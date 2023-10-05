import { useState, useEffect } from "react";
import {getProductosById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom"


function ItemDetailContainer (){
    
    const[producto, setProducto] = useState(null)
    const {itemId} = useParams()


    console.log("el item id que llega es: ", itemId)
    
    useEffect(()=> {
        getProductosById(itemId)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer"> 
            <ItemDetail {...producto}/> 
        </div>
    )
    
}

export default ItemDetailContainer