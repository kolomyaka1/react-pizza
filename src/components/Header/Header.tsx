import pizzaLogo from '../../assets/img/pizza-logo.svg';
import ShoppingButton from "../button/ShoppingButton.tsx";

import { NavLink } from 'react-router-dom' 

const Header = () => {
    
    return (
        <div className="header">
            <div className="container">
            <NavLink to='/'>
                <div className="header__logo">
                    <img width="38" src={pizzaLogo} alt="Pizza logo" />
                    <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
            </NavLink>   
                <ShoppingButton />
            </div>
        </div>
    )
}

export default Header;