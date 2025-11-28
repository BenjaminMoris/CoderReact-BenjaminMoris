import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { fetchProductById } from "../services/products";


const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchProductById(itemId).then(res => {
      setItem(res);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!item) return <p>Producto no encontrado.</p>;

  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
