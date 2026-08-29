import Sidebar from "./Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import "./Main.css";

import dishes from "../../data";

function Main() {
  return (
    <main className="main">
      <Sidebar />

      <section className="dish-section">
        <h2>Menu</h2>

        <Menu dishes={dishes} />
      </section>
    </main>
  );
}

export default Main;
