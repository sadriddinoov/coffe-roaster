import './Plan.scss'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import bgcImg from '../../assets/plan.png'
import row from '../../assets/row.svg'
import { Link } from 'react-router-dom'

export default function Plan() {
    return (
        <>
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
        
        <div className="plan">
        <div className="container">
        <div className="plan_container plan_container2">
        
        
        <ul className="plan_list">
        <li className="plan_item">
        <h4 className="plan_number">
        01
        </h4>
        
        <h4 className="plan_item-heading plan_item-heading2">
        Pick your coffee
        </h4>
        
        <p className="plan_item-text plan_item-text2">
        Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
        </p>
        </li>
        
        <li className="plan_item">
        <h4 className="plan_number">
        02
        </h4>
        
        <h4 className="plan_item-heading plan_item-heading2">
        Choose the frequency
        </h4>
        
        <p className="plan_item-text plan_item-text2">
        Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
        </p>
        </li>
        
        <li className="plan_item">
        <h4 className="plan_number">
        03
        </h4>
        
        <h4 className="plan_item-heading plan_item-heading2">
        Receive and enjoy!
        </h4>
        
        <p className="plan_item-text plan_item-text2">
        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
        </p>
        </li>
        </ul>
        
        
        </div>
        </div>
        </div>
        
        <div className="hero">
        <div className="container hero_inner-wrapper">
        <div className="hero_container">
        <ul className="hero_l">
        <li className="hero_l-item">
        <p className="hero_l-num">01</p>
        <h4 className="hero_l-heading">
        Preferences
        </h4>
        </li>
        
        <li className="hero_l-item">
        <p className="hero_l-num">02</p>
        <h4 className="hero_l-heading">
        Bean Type
        </h4>
        </li>
        
        <li className="hero_l-item">
        <p className="hero_l-num">03</p>
        <h4 className="hero_l-heading">
        Quantity
        </h4>
        </li>
        
        <li className="hero_l-item">
        <p className="hero_l-num">04</p>
        <h4 className="hero_l-heading">
        Grind Option
        </h4>
        </li>
        
        <li className="hero_l-item hero_l-item-active">
        <p className="hero_l-num">05</p>
        <h4 className="hero_l-heading">
        Deliveries
        </h4>
        </li>
        </ul>
        
        <div className="hero_r">
        <ul className="hero_r-list">
        <li className="hero_r-item">
        <div className='hero_r-top'>
        <h4 className="hero_r-heading">
        How do you drink your coffee?
        </h4>
        
        <button className='hero_r-btn'><img src={row} alt="" /></button>
        </div>
        
        <ul className="hero_rb-list">
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Capsule
        </h3>
        
        <p className="hero_rb-text">
        Compatible with Nespresso systems and similar brewers
        </p>
        </li>
        
        <li className="hero_rb-item green">
        <h3 className="hero_rb-heading white">
        Filter
        </h3>
        
        <p className="hero_rb-text white">
        For pour over or drip methods like Aeropress, Chemex, and V60
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Espresso
        </h3>
        
        <p className="hero_rb-text">
        Dense and finely ground beans for an intense, flavorful experience
        </p>
        </li>
        </ul>
        </li>
        
        <li className="hero_r-item">
        <div className='hero_r-top'>
        <h4 className="hero_r-heading">
        What type of coffee?
        </h4>
        
        <button className='hero_r-btn'><img src={row} alt="" /></button>
        </div>
        
        <ul className="hero_rb-list">
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Single Origin
        </h3>
        
        <p className="hero_rb-text">
        Distinct, high quality coffee from a specific family-owned farm
        </p>
        </li>
        
        <li className="hero_rb-item green">
        <h3 className="hero_rb-heading white">
        Decaf
        </h3>
        
        <p className="hero_rb-text white">
        Just like regular coffee, except the caffeine has been removed
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Blended
        </h3>
        
        <p className="hero_rb-text">
        Combination of two or three dark roasted beans of organic coffees
        </p>
        </li>
        </ul>
        </li>
        
        <li className="hero_r-item">
        <div className='hero_r-top'>
        <h4 className="hero_r-heading">
        How much would you like?
        </h4>
        
        <button className='hero_r-btn'><img src={row} alt="" /></button>
        </div>
        
        <ul className="hero_rb-list">
        <li className="hero_rb-item green">
        <h3 className="hero_rb-heading white">
        250g
        </h3>
        
        <p className="hero_rb-text white">
        Perfect for the solo drinker. Yields about 12 delicious cups.
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        500g
        </h3>
        
        <p className="hero_rb-text">
        Perfect option for a couple. Yields about 40 delectable cups.
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        1000g
        </h3>
        
        <p className="hero_rb-text">
        Perfect for offices and events. Yields about 90 delightful cups.
        </p>
        </li>
        </ul>
        </li>
        
        <li className="hero_r-item">
        <div className='hero_r-top'>
        <h4 className="hero_r-heading">
        Want us to grind them?
        </h4>
        
        <button className='hero_r-btn'><img src={row} alt="" /></button>
        </div>
        
        <ul className="hero_rb-list">
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Wholebean
        </h3>
        
        <p className="hero_rb-text">
        Best choice if you cherish the full sensory experience
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Filter
        </h3>
        
        <p className="hero_rb-text">
        For drip or pour-over coffee methods such as V60 or Aeropress
        </p>
        </li>
        
        <li className="hero_rb-item green">
        <h3 className="hero_rb-heading white">
        Cafetiére
        </h3>
        
        <p className="hero_rb-text white">
        Course ground beans specially suited for french press coffee
        </p>
        </li>
        </ul>
        </li>
        
        <li className="hero_r-item">
        <div className='hero_r-top'>
        <h4 className="hero_r-heading">
        How often should we deliver?    
        </h4>
        
        <button className='hero_r-btn'><img src={row} alt="" /></button>
        </div>
        
        <ul className="hero_rb-list">
        <li className="hero_rb-item green">
        <h3 className="hero_rb-heading white">
        Every week
        </h3>
        
        <p className="hero_rb-text white">
        $7.20 per shipment. Includes free first-class shipping.
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Every 2 weeks
        </h3>
        
        <p className="hero_rb-text">
        $9.60 per shipment. Includes free priority shipping.
        </p>
        </li>
        
        <li className="hero_rb-item">
        <h3 className="hero_rb-heading">
        Every month
        </h3>
        
        <p className="hero_rb-text">
        $12.00 per shipment. Includes free priority shipping.   
        </p>
        </li>
        </ul>
        </li>
        </ul>
        
        <div className="hero_r-order">
        <h4 className="hero_r-order-heading">
        Order Summary
        </h4>
        
        <h4 className="order">
        “I drink my coffee as <span className='order_code'>Filter</span>, with a <span className='order_code'>Decaf</span> type of bean. <span className='order_code'>250g</span> ground ala <span className='order_code'>Cafetiére</span>, sent to me <span className='order_code'>Every Week</span>.”
        </h4>
        
        
        </div>

        <Link style={{marginLeft: '550px'}} to={'/subscribe'}>
        <button className="btn btn2">Create my plan!</button>
        </Link>
        </div>
        </div>
        </div>
        </div>
        
        <Footer/>
        </>
        )
    }