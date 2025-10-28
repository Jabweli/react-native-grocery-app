import { products } from "@/constants";
import { createContext, useState } from "react";

type Product = {
  id: number,
  name:string,
  price:string,
  category:string,
  stars:string,
  image: any,
  desc: string,
  isFavorite: boolean
}

const AppContext = createContext({
  data: [],
  // isError: "",
  cart: [],
  setCart: (product:any) => {},
  addToCart: (product: any) => {},
  removeFromCart: (productId: number) => {},
  refreshData:() =>{},
  clearCart: () => {},
  activeCategory: "",
  setActiveCategory: (name:string) => {},
  favorites: [],
  setFavorites: (product:any) => {},
  addToFavorites: (product: any) => {},
});

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  const [data, setData] = useState<any>(products);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState<any>([]);

  const addToCart = (product:any) => {
    const existingProductIndex = cart.findIndex((item:any) => item.id === product.id);
    if(existingProductIndex !== -1){
      const updatedCart:any = cart.map((item:any, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    }else {
      const updatedCart:any = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  }


  const addToFavorites = (product:any) => {
    // Toggle favorite in data
    const updatedData = data.map((item: any) =>
      item.id === product.id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    setData(updatedData);

    // Update favorites list accordingly
    const exists = favorites.find((item: any) => item.id === product.id);

    if (exists) {
      setFavorites(favorites.filter((item: any) => item.id !== product.id));
    } else {
      setFavorites([...favorites, { ...product, isFavorite: true }]);
    }
  }

  const removeFromCart = (productId:number) => {
    const updatedCart = cart.filter((item:any) => item.id !== productId);
    setCart(updatedCart);
  };

  const refreshData = async () => {
    // try {
    //   const response = await axios.get(`${apiBaseUrl}/api/products`);
    //   const catResponse = await axios.get(`${apiBaseUrl}/api/categories`);
    //   setProducts(response.data);
    //   setCategories(catResponse.data);
    // } catch (error) {
    //   setIsError(error.message);
    // }
  };

  const clearCart =() =>{
    setCart([]);
  }

  return (
    <AppContext.Provider value={{data, cart, setCart, addToCart, removeFromCart, clearCart, refreshData, activeCategory, setActiveCategory, favorites, setFavorites, addToFavorites}}>
      {children}
    </AppContext.Provider>
  )

}

export default AppContext;