import { promisesItems } from "../../helpers/promises";
import Item from "../Item/Item";
import ItemCounter from "../ItemCounts/ItemCounts";
import { useState } from "react";
import ItemList from "../Itemlist/ItemList";
import { useEffect } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState (true);
  useEffect(() => {
    getItemPromises();
  }, []);
  const getItemPromises = async () => {
    try {
      const result = await promisesItems;
      setProducts(result);
      console.log ({result});
    } catch (error) {
      console.log({ error });
    } finally {
      setLoading (false);
    }
  };
  if (loading) {
    return (<h2> Cargando </h2>)
  }
  return (
    <div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
