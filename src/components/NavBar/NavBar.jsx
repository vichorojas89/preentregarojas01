import CartWidget from "./CartWidget"
import "./navbar.scss"


const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="brand">
            <img src="../logoZapatiza.jpg" alt="" />
            <p>Zapatiza</p>
            </div>

            <ul className="categories">
                <li>Urbana</li>
                <li>Deportivas</li>
                <li>Skate</li>
            </ul>

            <CartWidget/>
        </nav>
    )
}    
export default NavBar