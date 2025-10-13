import "../css/ItemListContainer.css"

const ItemListContainer = (Props) => {
  return (
    <div className="item-list-container">
      <h1 className="bienvenida">Hola!</h1>
      <div className="item-list">
        {Props.children}
      </div>
    </div>
  );
};

export default ItemListContainer;

