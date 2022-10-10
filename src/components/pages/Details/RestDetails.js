import React,{useState, useEffect} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useLocation, Link, useNavigate} from 'react-router-dom';
import MenuDisplay from "./MenuDisplay";


const url = "http://zomatoajulypi.herokuapp.com/details";
const menuUrl = "https://zomatoajulypi.herokuapp.com/menu";

function RestDetails (){
   
    const mealId=sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1;
    const [details, setDetails]= useState('detail');
    const [menuList, setMenuList]= useState();
    const [userItem, setUserItem]= useState([]);
    console .log('userItem:', userItem)

    const navigate = useNavigate();
    
    
    console.log('details:', details)
    console.log('menuList:', menuList)
    // apiCalling
    const location=useLocation();

    useEffect(()=>{

        let restId=location.search.split('=')[1];
        

        fetch(`${url}/${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log('Response:', data[0])
            setDetails(data[0])});

        fetch(`${menuUrl}/${restId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
         console.log('menuResponse:', data[0])
         setMenuList(data)});
            
        
    },[])
    
    

    
    
    
    const finalOrder = (data) =>{
        setUserItem(data)
    }

    const proceed = () =>{
        sessionStorage.setItem('menu',userItem)
        navigate(`/placeOrder/${details.restaurant_name}`)
    }

    
    return(
        <>
        
        <div>
                <div className="container details-main">
                    <div className="row" key={details._id}>
                        <div className="col-md-6 ">
                            <div className="card shadow img-card">
                                <img  src={details.restaurant_thumb}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1>{details.restaurant_name}</h1>
                            <p>{details.rating_text}</p>
                            <h6>Old Price <strike>Rs 1280/-</strike></h6>
                            <h5>New Price Rs {details.cost}/-</h5>
                            <p>{details.address}</p>
                            <img src="https://i.ibb.co/wJvrhYg/veg.png" width="50px" height="auto"/>&nbsp;&nbsp;
                            <img src="https://i.ibb.co/mD3jpgc/sentizied.png" width="60px" height="auto"/>
                            <h3>Available</h3>
                            

                            <Tabs className="mt-4">
                                <TabList>
                                    <Tab>About</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h4>{details.restaurant_name}</h4>
                                    <p>
                                        {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <h4>{details.address}</h4>
                                    <h5>Phone: {details.contact_number}</h5>
                                </TabPanel>
                            </Tabs>

                            <Link to={`/listing/${mealId}`} className="btn btn-danger">Back</Link>&nbsp;&nbsp;
                            <button onClick={proceed} type="button" className="btn btn-success">Checkout</button>

                        </div>
                        
                 </div>
                 <center><h1>menu</h1></center>
                 <MenuDisplay menuData={menuList} finalOrder={finalOrder}/>
                </div>

        </div>
        
        
        
        </>
    )
}

export default RestDetails;