import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "../components/ItemList";
import "../css/ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams(); 

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      
      setTimeout(() => {
        
        if (categoryId) {
          resolve(products.filter((p) => p.category === categoryId));
        } 
        
        else {
          resolve(products);
        }
      }, 500);
    });

    getProducts.then((res) => setItems(res));
  }, [categoryId]); 

  return (

    <div className="item-list-container">
      <h1 className="bienvenida">{greeting}</h1>
      <ItemList items={items} />
    </div>
    
  );
};

export default ItemListContainer;