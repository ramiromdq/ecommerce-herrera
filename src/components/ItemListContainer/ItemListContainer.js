import Item from "../Item/Item";
import { useState } from "react";

const items = [
  { id: "1", name: "iphone 5", price: "20" },
  { id: "2", name: "iphone 6", price: "200" },
  { id: "3", name: "iphone 6 PLUS", price: "2000" },
  { id: "4", name: "iphone 7", price: "20000" },
  { id: "5", name: "iphone X", price: "200000" },
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h1>Lista de Productos:</h1>
      <h3> Producto seleccionado: </h3>
      <p> {selectedItem ? selectedItem : "Ninguno"}</p>
      <hr />

      {items.map(({ id, name, price }) => (
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
