import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"
    
    
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3" >  
        <li className="font-semibold text-lg">
        <NavLink 
        to="/">
        Compra
        </NavLink>
        </li>
        <li>
        <NavLink 
        to="/"
        onClick={() => context.setSearchByCategory()}
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        All
        </NavLink>
        </li>
        <li>
        <NavLink 
        to="/Clothes"
        onClick={() => context.setSearchByCategory("Clothes")}
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Clothes
        </NavLink>
        </li>
        <li>
        <NavLink 
        to="/Shoes"
        onClick={() => context.setSearchByCategory("Shoes")}
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Shoes
        </NavLink>
        </li>
        <li>
        <NavLink 
        to="/Furniture"
        onClick={() => context.setSearchByCategory("Furniture")}
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Furniture
        </NavLink>
        </li>
        <li>
        <NavLink 
        to="/Others"
        onClick={() => context.setSearchByCategory("Others")}
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Others
        </NavLink>
        </li>
        </ul>
        
        <ul className="flex items-center gap-3" >  
        <li className="text-black/60" >
         milo20133@gmail.com 
        </li>

        <li>
        <NavLink to="/my-orders"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        My Orders
        </NavLink>
        </li>
        
        <li>
        <NavLink to="/my-account"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        My Account
        </NavLink>
        </li>

        <li>
        <NavLink to="/signin"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        SignIn
        </NavLink>
        </li>

        <li className="flex items-center">    
        <ShoppingBagIcon className="h-6 w-6 text-black" ></ShoppingBagIcon>    
        <div>{context.cartProducts.length}</div>
        </li>
        
        </ul>
        </nav>
    )
}

export default Navbar