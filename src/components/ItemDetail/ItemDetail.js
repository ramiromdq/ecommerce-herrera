import Item from "../Item/Item";
import { promisesItems } from "../../helpers/promises";
import { useEffect } from "react";
import { useState } from "react";


const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getItemPromises();
  }, []);
  const getItemPromises = async () => {
    try {
      const result = await promisesItems;
      setProducts(result);
      console.log({ result });
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h2> Cargando </h2>;
  }


  return (
    <div>
      <h3> Producto seleccionado: </h3>
      <p><img src= { selectedItem && selectedItem.pictureURL} /> </p>
      <p> nombre:{ selectedItem && selectedItem.name} </p>
      <p> precio:{selectedItem && selectedItem.price } </p>
      <p > descripcion:{selectedItem  && selectedItem.descripcion }      </p>
      <p> stock disponible: {selectedItem && selectedItem.stock } </p>
      <h1>Lista de Productos:</h1>
  
      <hr />

      {products.map((elem) => (
        <Item
          key={elem.id}
        {...elem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
