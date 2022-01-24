import "./navbar.css"

const Navbar = ()=>{
    return (
        <nav>
        <div className="nav_img_div">
            <a href="#"><img src="../../public/tonarg-logo.png" alt="tonarg-logo" /></a>
        </div>
        <ul className="nav_ul">
            <li>
                <a href="">Productos</a>
            </li>
            <li><a href="">Decoración</a></li>
            <li><a href="">Acerca de</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;