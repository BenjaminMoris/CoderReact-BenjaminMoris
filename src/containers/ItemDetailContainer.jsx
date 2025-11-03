import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
   
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === itemId));
      }, 500);
    });

    getProduct.then((res) => setItem(res));
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando detalle...</p>;
};

export default ItemDetailContainer;