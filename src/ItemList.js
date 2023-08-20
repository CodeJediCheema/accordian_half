const ItemList = ({items}) =>{
    console.log(items)
    
    return(
        <div >
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="text-left  border-gray-200 border-b-2 p-2 m-2">
                    <div className="font-semibold flex justify-between" >
                        <span >{item?.card?.info?.name}</span>
                        <span >₹ {item?.card?.info?.price / 100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
            ))}

        </div>
    )
};

export default ItemList;