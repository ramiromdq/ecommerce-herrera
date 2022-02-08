import Item from "../Item/Item";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);



  return (
    <div>
      <h3> Producto seleccionado: </h3>
     
      <p> nombre:{ selectedItem && selectedItem.name} </p>
      <p> precio:{selectedItem && selectedItem.price } </p>
      <p > descripcion:{selectedItem  && selectedItem.descripcion }      </p>
      <p> stock disponible: {selectedItem && selectedItem.stock } </p>
      <h1>Lista de Productos:</h1>
  
      <hr />

      {items.map((elem) => (
        <Item
          key={elem.id}
        {...elem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default ItemList;
