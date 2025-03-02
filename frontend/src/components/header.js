import { Link } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Link to ="/" ><h3>Shopping Store</h3></Link>
                </div>
            
        <div className="cart">
          <Link to="/cart"> My Cart
          </Link>
        
        </div>
        </div>
        
    )
}

export default Header