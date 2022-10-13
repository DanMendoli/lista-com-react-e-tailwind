import { useState } from "react";

function ItemForm(props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");

  function handleItemChange(event) {
    let nm = event.target.value;
    setName(nm);
  }

  function handleQuantityChange(event) {
    let qtty = event.target.value;
    setQuantity(qtty);
  }

  function handlePriceChange(event) {
    let prc = event.target.value;
    setPrice(prc);
  }

  function addItem(event) {
    event.preventDefault();
    if (name) {
      props.onAddItem(name, quantity, price);
      setName("");
      setQuantity(1);
      setPrice("");
    }
  }

  return (
    <form onSubmit={addItem}>
      <div className="my-4 px-3">
        <input
          className="item-form-input"
          type="text"
          placeholder="Novo item"
          onChange={handleItemChange}
          value={name}
        />

        <input
          className="item-form-input"
          type="number"
          placeholder="Quantidade"
          onChange={handleQuantityChange}
          value={quantity}
        />

        <input
          className="item-form-input"
          type="number"
          step="0.01"
          placeholder="R$"
          onChange={handlePriceChange}
          value={price}
        />

        <button
          className="w-full h-10 px-5 text-gray-100 text-3xl font-bold bg-green-400 rounded-lg focus:shadow-outline shadow hover:bg-green-500 transition duration-300 "
          type="submit"
        >
          +
        </button>
      </div>
    </form>
  );
}

export default ItemForm;
