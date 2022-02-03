import ItemCounter from "../ItemCounts/ItemCounts";

const Item = ({ name, price, id, pictureURL, setSelectedItem, descripcion }) => {
  const selectItem = () => setSelectedItem(name);

  return (
    <div>
      <img src={pictureURL} />
      <h2>Nombre del Producto: {name}</h2>
      <h2> Precio del Producto: {price} </h2>
      <h2>descripcion: {descripcion} </h2>
      <button onClick={selectItem}>Seleccionar producto </button>
      <ItemCounter stock={10} />
      <hr />
    </div>
  );
};

export default Item;
