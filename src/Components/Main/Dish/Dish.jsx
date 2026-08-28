import "./Dish.css";
import PropTypes from "prop-types";

function Dish({ name, price, description, image, spicy, currency = "ETB" }) {
  return (
    <article className="dish-card">
      <img src={image} alt={name} className="dish-image" />

      <h3>{name}</h3>

      {spicy && <span className="spicy-badge">Spicy</span>}

      <p className="description">{description}</p>

      <p>
        {price} {currency}
      </p>
    </article>
  );
}

Dish.PropTypes = {
  nmae: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  spicy: PropTypes.bool,
  currrency: PropTypes.string,
};

export default Dish;
