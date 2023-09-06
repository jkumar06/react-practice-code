import React,{useState,useContext} from "react"
import {LOGO_URL} from '../utils/constants';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux'


 const Header = () => {

    const [btnNameReact,setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartIems = useSelector((store) => store.cart.items);
    console.log(cartIems)

    return(
        <div className='flex justify-between dark:bg-slate-800 bg-pink-100 shadow-lg sm:bg-yellow-50'>
            <div className='logo-container'>
                <img className='w-40' src= {LOGO_URL}/>
            </div>
            <div className='nav-items items-center dark:text-white'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online status: {onlineStatus ? "🟢": "🔴"}</li>
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"> <Link to='/about'>About us</Link></li>
                    <li className="px-4"> <Link to='/contact'>Contact us</Link></li>
                    {/* <li className="px-4"> <Link to='/delivery'>Delivery</Link></li> */}
                    <li className="px-4"> <Link to='/grocery'>Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"> 
                        <Link to='/cart'>Cart -({cartIems.length} items)</Link>
                    </li>
                    <li className="px-4"> <Link to='/demo'>Demo</Link></li>

                    <button 
                      className="login-button"
                      onClick={() => btnNameReact === 'Login'
                        ? setbtnNameReact("Logout")
                        : setbtnNameReact("Login")}
                    >{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;