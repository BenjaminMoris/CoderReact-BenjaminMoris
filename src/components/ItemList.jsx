import Item from "./Item";
const ItemList = ({ items }) => (
  <div className="item-list">
    {items.map(p => <Item key={p.id} product={p} />)}
  </div>
);
export default ItemList;
