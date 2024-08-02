import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import { Router, Route, A } from "@solidjs/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex justify-around items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Site Shop</h1>

        <a href="/">Home</a>
        <a href="/cart">Cart</a>
      </header>

      <img class="rounded-md w-full h-80" src={banner} alt="Site Banner" />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </div>
  );
}

export default App;
