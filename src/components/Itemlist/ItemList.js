import Item from "../Item/Item";
import { useState } from "react";

const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h3> Producto seleccionado: </h3>

      <p> {selectedItem ? selectedItem : "Ninguno"}</p>
      <h1>Lista de Productos:</h1>

      <hr />

      {items.map(({ id, name, price, pictureURL,descripcion }) => (
        <Item
          key={id}
          pictureURL={pictureURL}
          id={id}
          name={name}
          price={price}
          descripcion={descripcion}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
