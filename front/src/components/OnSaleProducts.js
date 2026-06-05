import React, { useEffect, useState } from "react";
import { useCart } from "../auth/CartContext";
import { Link } from "react-router-dom";

function OnSaleProducts() {
  const [bookList, setBookList] = useState([]);
  const [message, setMessage] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:5000/books/getBooks")
      .then((res) => res.json())
      .then((data) => setBookList(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const isOnSale = bookList?.filter((book) => book.isOnSale === true);

  //   return (
  //     <div className="mt-10">
  //       <h3 className="my-6">Новинки</h3>
  //       {message && (
  //         <div className="mb-4 p-3 rounded bg-green-100 text-green-700 text-center">
  //           {message}
  //         </div>
  //       )}
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ">
  //         {isOnSale?.map((book) => (
  //           <div
  //             key={book._id}
  //             className="flex flex-col items-center  p-4 rounded-lg"
  //           >
  //             <Link to={`/bookDetails/${book?._id}`}>
  //               <img
  //                 className="w-full h-[450px] "
  //                 src={`http://localhost:5000/images/${book.coverImage}`}
  //               />

  //               <h6 className="text-center my-3">{book.title}</h6>
  //             </Link>
  //             <span className="text-gray-400">{book?.author}</span>
  //             <strong className="text-[#F86D72]">
  //               {book?.price.toFixed(3)} ₽
  //             </strong>

  //             <div className="text-sm text-gray-500">Остаток: {book.stock}</div>
  //             <button
  //               onClick={() => {
  //                 addToCart(book._id);
  //                 setBookList((prev) =>
  //                   prev.map((b) =>
  //                     b._id === book._id ? { ...b, stock: b.stock - 1 } : b,
  //                   ),
  //                 );
  //                 setMessage("Товар добавлен в корзину");
  //               }}
  //               disabled={book.stock === 0}
  //               className=" mt-5 whitespace-nowrap w-44 disabled:bg-gray-400"
  //             >
  //               {book.stock === 0 ? "Нет в наличии" : "Добавить в корзину"}
  //             </button>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
}

export default OnSaleProducts;
