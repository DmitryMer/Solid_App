function Card(props) {
  return (
    <div
      class="bg-white p-4 text-center flex flex-col justify-between"
      classList={{ "rounded-md": props.rounded, "shadow-md": !props.flat }}
    >
      {props.children}
    </div>
  );
}

export default Card;
