import Sidebar from './Sidebar/Sidebar'
import Dish from './Dish/Dish'
import './Main.css'

import doroWotImage from '../../assets/doro-wot.jpg'
import tibsImage from '../../assets/tibs.jpg'
import shiroImage from '../../assets/shiro.jpg'
import kitfoImage from '../../assets/kitfo.jpg'

function Main() {
 const dishes = [
  {
    id: 1,
    name: 'Doro Wot',
    price: 450,
    description: 'Spicy Ethiopian chicken stew served with injera',
    image: doroWotImage
  },
  {
    id: 2,
    name: 'Tibs',
    price: 380,
    description: 'Tender pieces of sautéed beef with onions and peppers',
    image: tibsImage
  },
  {
    id: 3,
    name: 'Shiro',
    price: 250,
    description: 'Smooth and flavorful chickpea stew served with injera',
    image: shiroImage
  },
  {
    id: 4,
    name: 'Kitfo',
    price: 500,
    description: 'Seasoned minced beef served with traditional Ethiopian sides',
    image: kitfoImage
  }
 ]

  return (
    <main className="main">
        <Sidebar />

        <section className="dish-section">
            <h2>Menu</h2>

            <div className="dish-grid">
                {dishes.map((dish) => (
                  <Dish
                    key={dish.id}
                    name={dish.name}
                    price={dish.price}
                    description={dish.description}
                    image={dish.image}
                />
             ))}
            </div>
        </section>
    </main>
  )
}

export default Main
