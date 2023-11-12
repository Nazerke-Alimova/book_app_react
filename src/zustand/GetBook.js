import { create } from "zustand";
export const Books = create((set) => ({
  books: [],
  clearBooks: () => {
    set((state) => ({ books: [] }));
  },

  getBooks: async (value) => {
    const params = new URLSearchParams();
    params.set("q", `intitle:${value}`);
    params.set("key", "AIzaSyAA0MSxP3et2Cjs-V8RICR8U_fIoAT_F4I");
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?${params}`
    );

    if (!res.ok) {
      // если ошибка,  в консоль
      console.error(`Ошибка при запросе: ${res.status} ${res.statusText}`);
      return;
    }

    const { items } = await res.json();
    console.log("Данные из API:", items); // Проверка есть ли данные или нету
    set((state) => ({ books: [...items] }));
  },

  wishlist: JSON.parse(localStorage.getItem("books_wishlist")) || [],

  addWishlist: (value) => {
    set((state) => {
      const newWishlist = [...state.wishlist, value];
      localStorage.setItem("books_wishlist", JSON.stringify(newWishlist));
      return { wishlist: newWishlist };
    });
  },

  deleteWishlist: (value) => {
    set((state) => {
      const newWishlist = state.wishlist.filter((wish) => wish.id !== value);
      localStorage.setItem("books_wishlist", JSON.stringify(newWishlist));
      return { wishlist: newWishlist };
    });
  },
}));
