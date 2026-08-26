import './Dish.css'

function Dish({ name, price, description, image }) {
    return (
      <article className="dish-card">
        <img src={image} alt={name} className="dish-image" />

        <h3>{name}</h3>

        <p className="description">{description}</p>
        
        <p>{price} ETB</p>
      </article>
    )
} 

export default Dish

