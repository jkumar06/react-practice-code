import React from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect,useContext } from "react";
import {SWIGGY_API_URL} from '../utils/constants';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filterRestaurant,setFilterRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log("->",RestaurantCardPromoted)

    const fetchData = async () => {
     const data = await fetch(SWIGGY_API_URL);
     const json = await data.json();
     
     setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    useEffect(() => {
        fetchData()
    },[]);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h3>Looks Like U are Offline</h3>
    }

    const {setUserName,loggedInUser} = useContext(UserContext);

    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input
                         type="text" 
                         className="border border-solid border-black" 
                         value={searchText} 
                         onChange={(e) =>{
                            setSearchText(e.target.value)
                        }}
                        />
                <button 
                 className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                 onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) => 
                        res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurant(filteredRestaurant)

                }}>
                    Search
                </button>

                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName :</label>
                    <input className="border border-black p-2" 
                        onChange={(e)=> setUserName(e.target.value)}
                        value={loggedInUser}
                    />
                </div>
                {/* <div className="search m-4 p-4 flex items-center" > 
                <button 
                className="px-4 py-2 bg-gray-100 rounded-lg"
                onClick={() => {
                   const filteredList = listOfRestaurants.filter(
                    (res) => res?.info?.avgRating > 4
                    );

                    setListOfRestaurants(filteredList)
                    console.log(filteredList)
                }}
                >Top Rated Restaurants</button>
                </div> */}
                
            </div>
            <div className='flex flex-wrap'>
                {
                    filterRestaurant?.map(restaurant => 
                   <Link 
                     key={restaurant?.info?.id}
                     to={"/restaurants/" + restaurant?.info?.id}> 

                     {
                        restaurant?.info?.promoted ? (
                        <RestaurantCardPromoted resData = {restaurant} /> 
                        ) : (
                            <RestaurantCard resData={restaurant}/>

                        )}
                    </Link>
                )}
            </div>
        </div>
    )
}
export default Body;