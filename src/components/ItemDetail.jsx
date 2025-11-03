import ItemCount from "./ItemCounter";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      
      <h2>{item.name}</h2>
      
      <p><strong>Categoría:</strong> {item.category}</p>
      <p><strong>Precio:</strong> ${item.price}</p>
      <p><strong>Código OEM:</strong> {item.oemCode}</p>
      <p><strong>Compatibilidad:</strong> {item.compatibility}</p>

      <ItemCount />
    </div>
  );
};

export default ItemDetail;