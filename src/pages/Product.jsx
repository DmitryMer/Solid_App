import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import { useCartContext } from "../context/CartContext";

const fetchProducts = async (id) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);

  return res.json();
};

function Product() {
  const params = useParams();

  const [product] = createResource(params.id, fetchProducts);

  const { items, setItems } = useCartContext();

  const addProduct = () => {
    //check exist
    const exists = items.find((p) => p.id === product().id);

    if (exists) {
      //inc quantity
      setItems(
        (p) => p.id === product().id,
        "quantity",
        (q) => q + 1
      );
    }

    if (!exists) {
      //ann new product
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="flex justify-between flex-row gap-8">
          <div class="w-full">
            <img src={product().image} alt="product image" />
          </div>
          <div class="w-auto flex flex-col gap-5">
            <h2 class="font-bold text-2xl">{product().title}</h2>
            <p class="text-lg">{product().description}</p>
            <p class="text-xl">
              Price: <span class="font-bold">{product().price} $</span>
            </p>
            <button class="btn" onClick={addProduct}>
              Добавить
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default Product;
