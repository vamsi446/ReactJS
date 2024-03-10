

function List(props) {
  const category = props.category;
  const items = props.items;
  
  // Sort the items by name
  items.sort((a, b) => a.name.localeCompare(b.name));
  
  const ListItems = items.map((item) => (
    <li key={item.id}>
      {`${item.name} - ${item.calories} calories`}
    </li>
  ));

  return (
    <div>
      <h2 className="category">Category: {category}</h2>
      <ol className="item">{ListItems}</ol>
    </div>
  );
}

export default List;
