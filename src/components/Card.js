function Card (props) {
    return (
      <div className="shadow rounded p-1 mb-1 mx-3">
        {props.children}
      </div>
    )
  }

  export default Card;