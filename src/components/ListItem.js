import { useState } from "react"
import Card from "./Card";

function BoughtImage (props) {
    if (props.bought) {
        return (
            <img className="w-6" alt="bought" src="./assets/images/icons/bought.svg"></img>
        )
    } else {
        return (
            <img className="w-6" alt="not-bought" src="./assets/images/icons/not-bought.svg"></img>
        )
    }
}

function ListItem (props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState(props.item.name);
    const [newQuantity, setNewQuantity] = useState(props.item.quantity)
    const [newPrice, setNewPrice] = useState(props.item.price);

    function handleNameChange (event) {
        setNewName(event.target.value)
    }

    function handleQuantityChange (event) {
        setNewQuantity(event.target.value)
    }

    function handlePriceChange(event) {
        setNewPrice(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault();
        props.editItem(props.item.id, newName, newQuantity, newPrice);
        setNewName(newName);
        setNewQuantity(newQuantity);
        setNewPrice(newPrice);
        setEditing(false);
    }

    let unitaryPrice = Number(props.item.price).toFixed(2);
    let totalPrice = Number((props.item.quantity * props.item.price)).toFixed(2);

    const viewTemplate = (
        <div>
            <li>
                <Card>
                    <div className="flex content-center justify-between">     
                        <div className="w-3/4">
                            <button
                                className="btn p-1 w-full"
                                onClick={() => setEditing(true)}
                            >
                                <h4 className={props.item.bought ? "line-through text-xl text-gray-500 text-left font-bold" : "text-gray-700 text-xl text-left font-bold"}>{props.item.name.toUpperCase()}</h4>

                                <h4 className={props.item.bought ? "line-through text-gray-500 text-left" : "text-gray-700 text-left"}> <span className="font-bold">Unidade: </span>R$ {unitaryPrice}</h4>

                                <h4 className={props.item.bought ? "line-through text-gray-500 text-left" : "text-gray-700 text-left"}><span className="font-bold">x{props.item.quantity}:</span> R$ {totalPrice}</h4>
                            </button>
                        </div>
                        
                        <div className="flex content-center">
                            <button 
                                className="btn p-1" 
                                onClick={() => {props.onItemBought(props.item)}}
                            >
                                <BoughtImage 
                                    bought={props.item.bought}>  
                                </BoughtImage>
                            </button>
                                
                            <button 
                                className="btn p-1 rounded-circle" onClick={() => {props.onItemDeleted(props.item)}}
                            >
                                <img className="w-6" alt="delete-item" src="./assets/images/icons/delete-item.svg"></img>
                            </button>
                        </div>
                    </div>   
                </Card>
            </li>
        </div>
    )
    
    const editTemplate = (
        <Card>
            <form className="p-3" onSubmit={handleSubmit}>
                <h3 className="mb-2">Editar item</h3>
                <div>
                    <div>
                        <input
                            id={props.id}
                            type="text"
                            placeholder="Editar item"
                            value={newName}
                            onChange={handleNameChange}
                            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 border border-transparent focus:border-transparent shadow"
                        />
                        <input
                            id={props.id} 
                            type="number" 
                            step="0.01" 
                            placeholder="Quantidade"
                            value={newQuantity}
                            onChange={handleQuantityChange}
                            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 border border-transparent focus:border-transparent shadow"
                        />
                        <input
                            id={props.id} 
                            type="number" 
                            step="0.01" 
                            placeholder="R$"
                            value={newPrice}
                            onChange={handlePriceChange}
                            className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 border border-transparent focus:border-transparent shadow"
                        />
                    </div>
                    
                    <div className="flex justify-start">
                        <button
                            type="submit" 
                            className="px-3 py-1 mr-1 font-bold text-gray-100 transition-colors duration-150 bg-green-400 rounded-lg focus:shadow-outline hover:bg-green-500"
                        >
                            OK
                        </button>
                        <button 
                            className="px-3 py-1 font-bold text-gray-100 transition-colors duration-150 bg-green-400 rounded-lg focus:shadow-outline hover:bg-green-500"
                            onClick={() => setEditing(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </form>
        </Card>
    )

    return (
        isEditing ? editTemplate : viewTemplate
    )
}

export default ListItem;