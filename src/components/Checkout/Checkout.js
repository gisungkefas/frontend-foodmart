import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {BsApple} from 'react-icons/bs'
import burgar from '../../assets/images/burgerCart.jpeg'
import { apiGet, apiPost } from '../UserService/UserService'
import  './Checkout.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Swal from "sweetalert";


const Checkout =() =>{
    const [address,setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [SubTotal,setSubTotal] = useState({});
    const [products, setProducts] = useState({})
    const [rate, setRate] = useState("")
    const [walletBalance, setwalletBalance] = useState(0.00);
    const navigator = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.value)
        if(e.target.value === "FLAT_RATE"){

            setRate(SubTotal.FLAT_RATE)
        }
        if(e.target.value === "EXPEDITED_DELIVERY"){

            setRate(SubTotal.EXPEDITED_DELIVERY)
        }
        if(e.target.value === "OVERNIGHT_DELIVERY"){
            setRate(SubTotal.OVERNIGHT_DELIVERY)
        }
    }

    const getwalletbalace =async ()=>{
        const {data} = await apiGet('wallet/balance')
        setwalletBalance(data.walletBalance)
        console.log(walletBalance);
    }
  
    const getPrices = async() => {
        const {data} = await apiGet('api/v1/view-cart')
        setProducts(data)
        setSubTotal(
            {
                "FLAT_RATE": "FLAT_RATE",
                "EXPEDITED_DELIVERY":"EXPEDITED_DELIVERY",
                "OVERNIGHT_DELIVERY": "OVERNIGHT_DELIVERY"
            }
        )
    }

    const handleSubmit = async(e) => {
        try {

              e.preventDefault()
              if(walletBalance >=products.cartTotal){
                const {data} = await apiPost('api/v1/checkout', {
                    "deliveryMethod": rate,
                    "streetAddress": address,
                    "city": city,
                    "state": state
                })
                
            }


        navigator("/viewAnOrder")
        } catch(err){
            console.log(err);
            Swal.fire('Any fool can use a computer')
        }
    
    }

    useEffect(()=>{
        getPrices()
    }, [])

    useEffect(()=>{
        getwalletbalace()
    },[])

    return(
    <>
    <Navbar />
    
    <div className='main--checkout--div'>

        <div className='left--checkout'>
            <div className='apple--logo'>{<BsApple/>} Pay</div>
            <div className='input--checkout-style'>
                <h2>Items Ordered</h2>
            </div>
            {products && products.cartItemList && products.cartItemList[0] ? products.cartItemList.map((product)=>(
                 <div key={product.id} className='product--order'>
                 <div className='product--div'>
                     <img src={ burgar} alt="burger" /> 
                     <div className='classic--burger'><h4>{product.product.productName}</h4><span>Quantity: {product.product.quantity}</span></div>
                 </div>
                 <span>₦ {product.product.productPrice} </span> 
             </div>
            )):

            <h2 className='input--checkout-style'>Cart is empty</h2>
        }
           
            
            <div className='input--checkout-order'>
                <h2>Delivery Address</h2>
                <p style={{color:"orange"}}>*Required</p>
            </div>
        <form onSubmit={handleSubmit}>
            <div className='order--details'>

            

                <h4 style={{marginTop:"10px"}}>Street Address *</h4>
                <input onChange={(e)=>setAddress(e.target.value)}/>


                <div className='provix'>
                    <div className='singx1'>
                        <h4>City * </h4>
                        <input onChange={(e)=>setCity(e.target.value)}/>
                    </div>
                    <div className='singx2'>
                        <h4>State/Province *</h4>
                         <select name='states' onChange={(e)=>setState(e.target.value)} className="select78uj">
                                <option>ABIA</option>
                                <option>ADAMAWA</option>
                                <option>AKWA IBOM</option>
                                <option>ANAMBRA</option>
                                <option>BAUCHI</option>
                                <option>BAYELSA</option>
                                <option>BENUE</option>
                                <option>BORNO</option>
                                <option>CROSS RIVER</option>
                                <option>DELTA</option>
                                <option>EBONYI</option>
                                <option>ENUGU</option>
                                <option>EDO</option>
                                <option>EKITI</option>
                                <option>GOMBE</option>
                                <option>IMO</option>
                                <option>JIGAWA</option>
                                <option>KADUNA</option>
                                <option>KANO</option>
                                <option>KATSINA</option>
                                <option>KEBBI</option>
                                <option>KOGI</option>
                                <option>KWARA</option>
                                <option>LAGOS</option>
                                <option>NASARAWA</option>
                                <option>NIGER</option>
                                <option>OGUN</option>
                                <option>ONDO</option>
                                <option>OSUN</option>
                                <option>OYO</option>
                                <option>PLATEAU</option>
                                <option>RIVERS</option>
                                <option>SOKOTO</option>
                                <option>TARABA</option>
                                <option>YOBE</option>
                                <option>ZAMFARA</option>
                                <option>FEDERAL CAPITAL TERRITORY (FCT)</option>
                            </select>
                   </div>  
                 </div>
                
                   
            </div>
            </form>
           
            <div className='input--checkout-shipping'>
                <h2>Shipping Method</h2>
            </div>

        <div className='input--checkout-shipping'>

            <div className='radio-buttonxx'>
                <div className='inpxder'>
                    <span>
                        <input type="radio" name='deliveryMethod' value='FLAT_RATE' onChange={handleChange}/>
                    </span>
                    <div className='xfsfgsgd'>
                        <h4>Flat-Rate</h4>
                        <p>Standared flat rate for all shipments</p>
                    </div>
                </div>
               <div><span className='xzf'> {SubTotal.FLAT_RATE}</span></div>
            </div>

            <div className='radio-buttonxx'>
                <div className='inpxder'>
                    <span>
                        <input type="radio" onChange={handleChange} name='deliveryMethod' value='EXPEDITED_DELIVERY' />
                    </span>
                    
                    <div className='xfsfgsgd'>
                        <h4>Expedited Shipping</h4>
                        <p>Expedited shipping to get shipment in a day or two </p>
                    </div>
                </div>
               <div><span className='xzf'>{SubTotal.EXPEDITED_DELIVERY}</span></div>
            </div>

            <div className='radio-buttonxx'>
                <div className='inpxder'>
                    <span>
                        <input type="radio" onChange={handleChange} name='deliveryMethod' value='OVERNIGHT_DELIVERY'/>
                    </span>
                    <div className='xfsfgsgd'>
                        <h4>Overnight Shipping</h4>
                        <p>An expensive option to get shipment on the next business day</p>
                    </div>
                </div>
               <div><span className='xzf'> {SubTotal.OVERNIGHT_DELIVERY} USD</span></div>
            </div>

            </div>
        </div>
        <div className='right--checkout'>
            <div className='input--checkout-style1'>
                <h2>Order Summary</h2>
                
            </div>
            <div className='left-checkout-summary'>
                    <div className='xzcnfjrj'><p>SubTotal</p><span>₦ {products.cartTotal}</span></div>
                    {rate ? (
                        <div className='xzcnfjrj'><p>Shipping Rate</p><span>₦ {rate==="FLAT_RATE"?(18.50):rate === "EXPEDITED_DELIVERY"?(191.10):
                        rate === "OVERNIGHT_DELIVERY"?(345.80):(0)}</span></div>
                    ):

                        <div className='xzcnfjrj'><p>No Shipping method selected</p></div>
                    }
                    <div className='xzcnfjrj'><p>Total</p><span style={{fontWeight:700}}>₦ {rate === "FLAT_RATE"?
                    (products.cartTotal + 18.50):rate === "EXPEDITED_DELIVERY"?
                    (products.cartTotal + 191.10): rate === "OVERNIGHT_DELIVERY"?
                    (products.cartTotal + 345.80): ("")} 
                    </span>
                    </div>
                
            </div>
            <button className='buttonxx' onClick={handleSubmit}>Checkout</button>
        
        </div>
        
    </div>
   

    <Footer />
    </>
    )
}
export default Checkout