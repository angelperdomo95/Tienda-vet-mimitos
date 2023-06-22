import { createContext, useState, useEffect } from "react"

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
       const [productToShow, setProductToShow] = useState({});

    // shopping cart . show product to cart 
    const [cartProducts, setCartProducts] = useState([])

    // shopping cart . order
        const [ order, setOrder] = useState ([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItem] = useState(null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)
    

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(Response => Response.json())
    .then(data => setItems(data))
  }, [])

  const filteredItemByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) )
  }

  useEffect(() => { 
    if (searchByTitle) setFilteredItem(filteredItemByTitle(items, searchByTitle))
  }, [items, searchByTitle])



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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}

