import { createResource } from "solid-js";
import Card from "../Components/Card";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
};

function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={false}>
              <div class="w-9/12 mx-auto">
                <img src={product.image} class="w-full text-center" />
              </div>
              <h2 class="my-3 font-bold">{product.title}</h2>
              <div class="w-9/12 mx-auto">
                <a
                  href={"/product/" + product.id}
                  class="btn transition ease-in delay-100"
                >
                  View Product
                </a>
              </div>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}

export default Home;
