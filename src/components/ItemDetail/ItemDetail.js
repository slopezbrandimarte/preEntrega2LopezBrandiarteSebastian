import ItemCount from "../ItemCount/ItemCount.js"

function ItemDetail ({ name, image, category, description, price, stock}){


    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={image} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Categoria: {category}</p>
                <p className="Info">Descripcion: {description}</p>
                <p className="Info">Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={ (quantity) => {console.log("Cantidad agregada de items", quantity)}}/>
            </footer>
        </article>

    )
}

export default ItemDetail