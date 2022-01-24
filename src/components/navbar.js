import "./navbar.css"

const Navbar = ()=>{
    return (
        <nav>
        <div class="nav_img_div">
            <a href="#"><img src="../../public/tonarg-logo.png" alt="tonarg-logo"></img></a>
        </div>
        <ul class="nav_ul">
            <li class="nav_products">
                Productos<i class="fas fa-angle-down"></i>
                <ul class="nav_sublist">
                    <li><a href="">Todos los productos</a></li>
                    <li><a href="">Categoria</a></li>
                    <li><a href="">Categoria</a></li>
                    <li><a href="">Categoria</a></li>
                    <li><a href="">Calculadora de litros</a></li>
                </ul>
            </li>
            <li><a href="">Decoración</a></li>
            <li><a href="">Acerca de</a></li>
            <li><a href="">Contacto</a></li>
        </ul>
    </nav>
    )
}

export default Navbar;