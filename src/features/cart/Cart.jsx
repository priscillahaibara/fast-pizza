import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="px-4 py-3">
      <Link to="/menu">&larr; Back to menu</Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, username</h2>

      <ul>Cart items</ul>

      <div className="mt-6 space-x-2">
        <Link to='/order/new'>Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
