import React from "react";
import {Link} from "react-router-dom";


const QuickDisplay =(props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) =>  {
                return (
                    
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                    
                            <div className="mealTypeCard my-3" key={item._id}>
                                <div className="card shadow zoom-effect">
                                    <div>
                                        <div className="images-section">
                                            <img src={item.meal_image} alt="breakfast"/>
                                        </div>
                                        
                                        <div className="cards-body">
                                            <h5>{item.mealtype}</h5>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        
                     </Link>
                )
            })
        }
    }

    return (
        <div>{listMeal(props)}</div>
    )
}

export default QuickDisplay;

//<Link to={`/listing/${item.mealtype_id}`} key={item._id}>