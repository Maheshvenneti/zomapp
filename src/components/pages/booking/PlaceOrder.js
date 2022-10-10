import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const url = "http://zomatoajulypi.herokuapp.com/menuItem";
const OrderPlaced = "http://localhost:9870/orders" 




function PlaceOrder(){

    const {restName} = useParams();
    console.log(restName)

    const [name, setName] = useState('Mahesh');
    const [email, setEmail] = useState('hungry@gmail.com');
    const [address, setAddress] = useState('Rajahmundry');
    const [phone, setPhone] = useState('9878678921');
    const [cost, setCost] = useState(0);
    const [menuItem, setMenuItem] = useState();
    console.log(name, email, address, phone);

    useEffect(()=>{
        let menuItem = sessionStorage.getItem('menu');
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let totalPrice = 0;
            data.map((item) => {
                totalPrice = totalPrice + Number(item.menu_price);
                return 'ok'
            })
            setCost(totalPrice);
            console.log({cost})
            setMenuItem(data);
            console.log({menuItem})
        })
    },[])

   

    const  renderItem = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <div className="col-md-3">
                        <div className="card mb-4" key={item.menu_id}>
                            <img className="card-img-top" src={item.menu_image} alt={item.menu_name}/>
                            <div className="card-body">
                                <h3>{item.menu_name}</h3>
                                <h4>Rs. {item.menu_price}</h4>
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }
    }

   
    
    return(
        <>
        <div className="container pt-5">
               <div className="card mb-5">
                   <div className="card-title p-3 bg-primary">
                    <h5>Your Order From Restaurant <b>{(restName)}</b> </h5>
                   </div>
                   <div className="card-body">
                       <form>
                           <div className="row">
                               <input type="hidden" name="cost" />
                               <input type="hidden" name="id" />
                               <input type="hidden" name="hotel_name" />
                                <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input className="form-control" name="name" 
                                    value={name} onChange={(event)=>{setName(event.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input className="form-control" name="email"
                                    value={email}  onChange={(event)=>{setEmail(event.target.value)}} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone"
                                    value={phone}  onChange={(event)=>{setPhone(event.target.value)}} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Address</label>
                                    <input className="form-control" name="address"
                                    value={address}  onChange={(event)=>{setAddress(event.target.value)}} />
                                </div>
                           </div>

                            <div className="row my-5">
                                {renderItem(menuItem)}
                            </div>

                        
                           <div className="row">
                               <div className="col-md-12">
                                   <h2>Total Price is Rs.{cost} </h2>
                               </div>
                           </div>
                           <button className="btn btn-success" >Checkout</button>
                       </form>
                   </div>
               </div>
            </div>
        </>
    )
}
export default PlaceOrder;