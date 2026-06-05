import React from "react";
import { useCart } from "../auth/CartContext";

function CartPage() {
  const { cart, updateCart, removeFromCart, clearCart } = useCart();

  const handleOrder = async () => {
    alert("✅ Заказ успешно оформлен!");
    await clearCart();
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-48">
        <p className="text-gray-500 text-lg">🛒 Ваша корзина пуста</p>
      </div>
    );
  }

  return (
    <div className="mt-44 min-h-screen p-10">
      <h3 className="my-5">Корзина</h3>

      <div className="space-y-4">
        {cart?.items?.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border rounded-lg p-4 shadow-sm"
          >
            <img
              src={`http://localhost:5000/images/${item?.book?.coverImage}`}
              className="rounded w-24 h-32 object-cover"
              alt={item?.book?.title}
            />

            <div className="flex-1">
              <h2 className="font-semibold">{item?.book?.title}</h2>
              <p className="text-gray-500">{item?.book?.author}</p>
              <p className="text-[#F86D72] font-bold">
                {item?.book?.price.toFixed(3)} ₽
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  className="disabled:opacity-50"
                  disabled={item?.quantity <= 1}
                  onClick={() => updateCart(item?.book._id, item?.quantity - 1)}
                >
                  -
                </button>

                <span>{item?.quantity}</span>

                <button
                  className="disabled:opacity-50"
                  onClick={() => updateCart(item?.book._id, item?.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-[#F86D72] text-right">
              <p>Всего: {(item?.price * item?.quantity).toFixed(3)} ₽</p>
              <button onClick={() => removeFromCart(item.book._id)}>
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleOrder}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Заказать
      </button>
    </div>
  );
}

export default CartPage;
