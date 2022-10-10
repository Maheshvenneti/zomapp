import React, {useState} from "react";


function MenuDisplay(props) {

    const [cartItem, setCartItem] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const placeOrder = (id) =>{
        setCartItems(cartItem.push(id))
        console.log("item :" , cartItem);
    }
   
    const  removeOrder = (id) => {
        if(cartItem.indexOf(id)>-1){
            setCartItems(cartItem.splice(cartItem.indexOf(id),1))
            
            console.log('remove',cartItem)
     
            
        }
    }


   

    // let orderId = [];
    

    // const placeOrder = (id) => {
    //     orderId.push(id)
        
    //     console.log('placeOrder',orderId)
        

    //     props.finalOrder(orderId)
       
        
        
        
    // }

    // const  removeOrder = (id) => {
    //     if(orderId.indexOf(id)>-1){
    //         orderId.splice(orderId.indexOf(id),1)
    //         console.log('remove',orderId)
            
    //         props.finalOrder(orderId)
            
            
            
    //     }
    // }
    
    const  renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}, &nbsp;</b>
                )
            })
        }
    }
    

    const renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item) => {
                return(
                    <div key={item.menu_id}>
                        <div className="row pt-1">
                            <div className="col-md-7">
                                <b>{item.menu_id}</b> &nbsp;
                                <img src={item.menu_image} alt={item.menu_name} style={{width:80, height:80}}/>
                                &nbsp; {item.menu_name} - Rs.{item.menu_price}
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success"  onClick={()=>{placeOrder(item.menu_id)}}>
                                    <i className="bi bi-bag-plus-fill"></i>
                                </button> &nbsp;
                                <button className="btn btn-danger" onClick={()=>{removeOrder(item.menu_id)}}>
                                    <i className="bi bi-bag-dash-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <div>
                <div className="col-md-12">
                    <h2>Item Added</h2>
                     <h3>Item Number:- {renderCart(cartItem)}</h3>
                    
                    
                </div>
                <div className="col-md-12">
                    {renderMenu(props)}
                 
                </div>
        </div>
    )
}

export default MenuDisplay;