import { useState, useEffect } from 'react';
import ItemForm from "./components/ItemForm"
import List from "./components/List";
import Item from "./components/Item";
import TotalPrice from './components/TotalPrice';

const SAVED_ITEMS = "savedItems";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
    if (savedItems) {
      setItems(savedItems)
    }
  }, [])

  useEffect (() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
  }, [items])

  function onAddItem (name, quantity, price) {
    let itemObject = new Item(name, quantity, price);
    setItems([...items, itemObject]);
  }

  function onItemBought (item) {
    let updatedItems = items.map(it => {
      if (it.id === item.id) {
        it.bought = !it.bought
      }
      return it
    })
    setItems(updatedItems);
  }

  function onItemDeleted (item) {
    let filteredItems = items.filter (it => it.id !== item.id)
    setItems(filteredItems);
  }

  function editItem (id, newName, newQuantity, newPrice) {
    const editedList = items.map(item => {
      if (id === item.id) {
        return {...item, name: newName, quantity: newQuantity, price: newPrice}
      }
      return item;
    })
    setItems(editedList)
  }

  function deleteList () {
    setItems([])
  }

  return (
    <div>
      <div className="w-full fixed z-1000 top-0">
        <div className="py-4 bg-green-400">
          <h1 className="text-center text-gray-700 text-xl font-bold">Lista de Compras</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-white container max-w-sm">
            <ItemForm onAddItem={onAddItem}></ItemForm>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="container flex flex-col max-w-sm">
          <List onItemBought={onItemBought} onItemDeleted={onItemDeleted} editItem={editItem} items={items}></List>
        </div>
      </div>

      <TotalPrice items={items} deleteList={deleteList}></TotalPrice>
    </div>
  );
}



export default App;