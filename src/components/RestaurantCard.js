import { useContext } from "react";
import {CDN_URL} from '../utils/constants';
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser)

    const {cloudinaryImageId,name,
            avgRating,
            cuisines,
            costForTwo,sla,
            } = resData?.info;
    
    return(
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'>
            <img className='rounded-lg'
                alt="res-logo"
                src ={CDN_URL + cloudinaryImageId}
            />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo ?? '₹200 for two'}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        console.log("props",postMessage)
        return(
            <div>
                <label className='absoulte bg-black text-white m-2 p-2 rounded-lg'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;

