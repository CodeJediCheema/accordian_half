import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div >
            <div className="res-logo">
                <img src={CDN_URL + cloudinaryImageId} alt="Restaurant main picture"></img>
            </div>
            <h4 className="text-lg font-bold my-2">{name}</h4>
            <p className="my-1">{cuisines.join(", ")}</p>
            <p className="my-1">{costForTwo}</p>
            <p className="my-1">{avgRating} ⭐</p>
            <p className="my-1">{deliveryTime} Mins. ⏰</p>
        </div>
        
    )
};
 // Higher Order Component

export const withPromotedLabel = (RestaurantCard) =>{
    // As below code will be returned, therefore props are given here.
    return (props) =>{
        return (
            <div>
                <label className="absolute bg-slate-900 text-white m-0 p-1 rounded-sm ">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;