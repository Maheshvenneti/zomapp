import React,{useState, useEffect, useMemo} from "react";
import QuickDisplay from "./QuickDisplay";

const url = "https://zomatoajulypi.herokuapp.com/quicksearch";

function QuickSearch () {
    
    const [mealType, setMealType]= useState();
    
    // useEffect(() => {
    //                     fetch(url,{method:'GET'})
    //                     .then((res) => res.json())
    //                     .then((data) => {setMealType(data)})
    //                 }
    //          )

    useMemo(()=>{
                        fetch(url,{method:'GET'})
                        .then((res) => res.json())
                        .then((data) => {setMealType(data)})
            },[])

    return (
        <div>
                <div className="container">
                     <div className=" my-5"> 
                        <h2 className="text-center pb-3">Choose Your Best Type</h2>
                        <QuickDisplay mealData={mealType} />
                     </div>
                </div>
            </div>
    )

    
    
}

export default QuickSearch;