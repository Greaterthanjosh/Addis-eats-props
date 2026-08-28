import Dish from "../Dish/Dish";
import Card from "../Card/Card";

function Menu({ dishes, category }) {
  const shown = category
    ? dishes.filter((dish) => dish.category === category)
    : dishes;

  if (shown.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="dish-grid">
      {shown.map((dish) => (
        <Card key={dish.id}>
          <Dish
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
            spicy={dish.spicy}
          />
        </Card>
      ))}
    </div>
  );
}

export default Menu;
