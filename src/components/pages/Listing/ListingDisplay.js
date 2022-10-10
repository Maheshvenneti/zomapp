import React from "react";
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    
    
    
    const renderData = ({listData} ) => {
        
        if(listData){
            if(listData.length > 0){
                return listData.map((item)=>{
                    return(
                        <div key={item._id}>
                            <div className="card shadow my-3" >
                                <div className="row" >
                                    <div className="col-md-5 data-img">
                                         <img src={item.restaurant_thumb} alt={item.restaurant_name}/>
                                    </div>
                                    <div className="col-md-7 pt-1 listing-data">
                                        <h2><Link to={`/details?restId=${item.restaurant_id}`} >{item.restaurant_name}</Link></h2>
                                        <p>{item.address}</p>
                                        <h5>Rs {item.cost}/-</h5>
                                        
                                        <button type="button" className="btn btn-primary">{item.mealTypes[0].mealtype_name}</button>&ensp;
                                        <button type="button" className="btn btn-danger">{item.mealTypes[1].mealtype_name}</button>
                                        <div><br></br></div>
                                        <button type="button" className="btn btn-secondary">{item.cuisines[0].cuisine_name}</button>&ensp;
                                        <button type="button" className="btn btn-success">{item.cuisines[1].cuisine_name}</button>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                    )
                    }
                )

            }else{
                return (
                    <div>No data found as per your filter</div>
                )

            }

        }else{
            return(
                <div>
                    <h3>Loading</h3>
                    <img src="https://i.ibb.co/4N9tbjb/loader.gif" alt="loader"/>
                </div>
            )
        }

    }

    return(
        <div id="content" >
            {renderData(props) }
        </div>
    )
}

export default ListingDisplay;