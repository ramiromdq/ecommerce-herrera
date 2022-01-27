const Item = ({ name, price, id, setSelectedItem }) => {
  const selectItem = () => setSelectedItem(id);

  return (
    <div>
      <h2>Nombre del Producto: {name}</h2>
      <h2> Precio del Producto: {price} </h2>
      <button onClick={selectItem}>Seleccionar producto </button>
      <hr />
    </div>
  );
};

export default Item;
