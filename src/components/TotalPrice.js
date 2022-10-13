function TotalPrice(props) {
  const total = props.items
    .reduce((total, item) => {
      return Number(total) + Number(item.price * item.quantity);
    }, 0)
    .toFixed(2);

  return (
    <div className="bg-green-400 text-center flex items-center lg:justify-center md:justify-center justify-between py-2 px-6 w-full fixed z-1000 bottom-0">
      <div className="flex lg:mr-32 md:mr-32">
        <h1 className="m-auto font-bold text-gray-600">Total: R$ {total}</h1>
      </div>
      <div>
        <button
          className="btn text-sm font-bold px-2 p-1.5 rounded shadow text-gray-600 bg-gray-100 hover:bg-red-400 hover:text-gray-100 transition duration-300"
          onClick={() => {
            props.deleteList();
          }}
        >
          Limpar lista
        </button>
      </div>
    </div>
  );
}

export default TotalPrice;
