import React, {useState, useEffect} from "react";

const lurl = "https://zomatoajulypi.herokuapp.com/location";

const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=";

function HeaderSearch() {

    const [location,setLocation] = useState();
    const [rest,setRest] = useState();

    

    useEffect(()=>{
        console.log("inside useEffect ")
        fetch(lurl,{method:'GET'})
        // return promise
        .then((res) => res.json())
        // return data
        .then((data) => {
            //console.log(data)
            setLocation(data)
        })
        .catch((err) => {
            console.log(err)
        })

    },[])

    const renderCity = (data) => {
        
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    const handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRest(data) 
        })
    }

    const renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

        return (
            <div>
                <div className="main-section">
                    <div className="main-section-cover-bg pt-5">
                    {/*title logo and search bar in section 1*/}
                        <div className="heading-paragraph">
                            <img className="title-logo" alt="logo" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"/>
                            <p>Discover the best food & drinks</p> 
                        </div>
                        {/*<!--search bar in section 1-->*/}
                        <div className="search-bar-main">
                            <div className="search-bar-inner">
                                <div className="col-md-6 location-search">
                                    <img alt="location" src="https://i.ibb.co/b2tFYr5/location-pin.png" width="22px" height="100%"/>
                                    <select onChange={handleCity}  className="location-select-options">
                                        <option>----SELECT LOCATION----</option>
                                        {renderCity(location)}
                                        
                                    </select>

                                </div>
                                <div className="col-md-6 restaurant-search">
                                    <img alt="location" src="https://i.ibb.co/b2tFYr5/location-pin.png" width="22px" height="100%"/>
                                    <select className="location-select-options">
                                    <option>----SELECT RESTAURANT----</option>
                                    {renderRest(rest)}
                                        
                                    </select>

                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
   

}

export default HeaderSearch;