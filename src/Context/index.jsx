import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // shoppin cart . increment quantity
    const [count, setCount] = useState(0)

    //product detail open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

     //checkoutSideMenu open/close
     const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
     const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
     const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product detail . show product 
       const [productToShow, setProductToShow] = useState({
        title: "",
        price: "", 
        description: "",
        images: [],
    });

     // ahopping cart . show product to cart 
     const [cartProducts, setCartProducts] = useState([])

    return (

        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

