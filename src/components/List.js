import ListItem from "./ListItem"

function List (props) {
  return (
    <div className="mb-14 mt-64">
      <ul className="list list-group">
        {props.items.map(item => 
          <ListItem 
            key={item.id} 
            item={item} 
            onItemBought={props.onItemBought} 
            onItemDeleted={props.onItemDeleted}
            editItem={props.editItem}
          ></ListItem>)}
      </ul>
    </div>
  )
}

  export default List;