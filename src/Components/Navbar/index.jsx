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
        <NavLink to="/Automoviles"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Automoviles
        </NavLink>
        </li>
        <li>
        <NavLink to="/Camionetas"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        Camionetas
        </NavLink>
        </li>
        <li>
        <NavLink to="/MotocicletasMedio"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        MotocicletasMedio
        </NavLink>
        </li>
        <li>
        <NavLink to="/MotocicletasAlto"
        className={({ isActive}) =>
        isActive ? activeStyle : undefined
        }>
        MotocicletasAlto
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
        <div>{context.count}</div>
        </li>
        
        </ul>
        </nav>
    )
}

export default Navbar