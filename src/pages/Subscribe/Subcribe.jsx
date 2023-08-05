import Header from '../../components/header/header'
import './Subscribe.scss'
import bgcImg from '../../assets/plan.png'
import { Link } from 'react-router-dom'

export default function Subscribe() {
    return (
        <>
        <div>
        <div className='sub_wrapper'>
        <Header/>
        
        <div className="create">
        <div className="container">
        <div style={{backgroundImage: `url(${bgcImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="create_container">
        <h1 className="create_heading">
        Create a plan
        </h1>
        
        <p className="create_text">
        Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
        </p>
        </div>
        </div>
        </div>
        
       
        
        </div>

        <div className="orders">
        <h4 className="orders_heading">
        Order Summary
        </h4>
        
        <h4 className="order">
        “I drink my coffee as <span className='orders_code'>Filter</span>, with a <span className='orders_code'>Decaf</span> type of bean. <span className='orders_code'>250g</span> ground ala <span className='orders_code'>Cafetiére</span>, sent to me <span className='orders_code'>Every Week</span>.”
        </h4>
        
        <p className="orders_text">
        Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
        </p>
        
        <div style={{display: 'flex', gap: '30px'}}>
        <h4 className="orders_cash">$14.00/ mo</h4>
        
        <Link to={'/'}>
        <button className="btn">Checkout</button>
        </Link>
        </div>
        </div>
        </div>
        
        
        </>
        )
    }