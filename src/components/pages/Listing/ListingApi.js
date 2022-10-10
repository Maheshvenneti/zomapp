import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import ListingDisplay from "./ListingDisplay";



const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

function ListingApi (){
    
    const [restaurantList, setRestaurantList] = useState();
    const {mealId} = useParams();

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        fetch(`${url}${mealId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {setRestaurantList(data)})
    },[])

    return(
        <div className="main-content pt-5">
            <div className="col-md-3 float-left  px-4">
                <div id="filter">

                </div>

            </div>
            <div className="col-md-9 px-4">
                <ListingDisplay listData={restaurantList}/>

            </div>
                
        </div>
            
    )
}

export default ListingApi;

// useEffect(()=>{
//     //     console.log('Location:', location)
//     //     const restId = location.search.split('=')[1];
//     //     console.log('Rest ID:', restId)
//     //     fetch(`${url}/${restId}`,{method:'GET'})
//     //     // return promise
//     //     .then((res) => res.json())
//     //     // return data
//     //     .then((data) => {
//     //         console.log('Response:', data);
//     //         setDetails(data[0])})
//     //         .catch((err) => {
//     //         console.log(err)
//     //     })

//     // },[])