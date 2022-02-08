import ItemCounter from "../ItemCounts/ItemCounts";
import ItemDetail from "../ItemDetail/ItemDetail";

const Item = ({
  name,
  price,
  id,
  pictureURL,
  setSelectedItem,
  descripcion,
  stock,
}) => {
  const selectItem = () => setSelectedItem({name,  price,
    pictureURL,
    descripcion,
   stock});



  return (
    <div>
      <h3>Nombre del Producto: {name}</h3>
      <img src={pictureURL} alt="" />

      <button onClick={selectItem}>Seleccionar producto </button>
      <ItemCounter stock={stock} />
      <hr />
    </div>
  );
};

export default Item;
