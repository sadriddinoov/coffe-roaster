import './Home.scss'
import { Link } from "react-router-dom"
import Header from "../../components/header/header"
import Type from '../../components/type/type'
import img1 from '../../assets/kopi1 copy.png'
import img2 from '../../assets/kopi1.png'
import img3 from '../../assets/kopi3.png'
import img4 from '../../assets/kopi4.png'
import bgcImg from '../../assets/Bitmap.png'
import colection from '../../assets/our collection.png'
import kofe from '../../assets/Shape.svg'
import gift from '../../assets/gift.svg'
import dostavka from '../../assets/truck.svg'
import Footer from '../../components/footer/footer'

function Home() {
    return (
        <>
        <Header/>
        
        <div className="main">
        <div className="container">
        <div style={{backgroundImage: `url(${bgcImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="main_container">
        <h1  className="main_heading">
        Great coffee made simple.
        </h1>
        
        <p className="main_text">
        Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
        </p>
        
        <Link to={'/plan'}>
        <button className="btn">Create your plan</button>
        </Link>
        </div>
        </div>
        </div>
        
        <div  className="type">
        <div className="container">
        <ul className="type_container">
        <Type
        img={img1}
        title='Gran Espresso'
        subtitle='Light and flavorful blend with cocoa and black pepper for an intense experience.'
        />
        
        <Type
        img={img2}
        title='Planalto'
        subtitle='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.'
        />
        
        <Type
        img={img3}
        title='Piccollo'
        subtitle='Mild and smooth blend featuring notes of toasted almond and dried cherry.'
        />
        
        <Type
        img={img4}
        title='Danche'
        subtitle='Ethiopian hand-harvested blend densely packed with vibrant fruit notes.'
        />
        
        </ul>
        <img className='type_colection' src={colection} alt="" />
        </div>
        </div>
        
        <div className="choose">
        <div className="container">
        <div className="choose_container">
        <h2 className="choose_heading">
        Why choose us?
        </h2>
        
        <p className="choose_text">
        A large part of our role is choosing which particular coffees will be featured 
        in our range. This means working closely with the best coffee growers to give 
        you a more impactful experience on every level.
        </p>
        
        <ul className='choose_list'>
        <li className='choose_item'>
        <img src={kofe} alt="" className="choose_img" />
        <h3 className="choose_item-h">
        Best quality
        </h3>
        
        <p className="choose_item-p">
        Discover an endless variety of the world's best artisan coffee from each of our roasters.   
        </p>
        </li>
        
        <li className='choose_item'>
        <img src={gift} alt="" className="choose_img" />
        <h4 className="choose_item-h">
        Exclusive benefits  
        </h4>
        
        <p className="choose_item-p">
        Special offers and swag when you subscribe, including 30% off your first shipment.
        </p>
        </li>
        
        <li className='choose_item'>
        <img src={dostavka} alt="" className="choose_img" />
        <h4 className="choose_item-h">
        Free shipping
        </h4>
        
        <p className="choose_item-p">
        We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
        </p>
        </li>
        </ul>
        </div>
        </div>
        </div>
        
        <div className="plan">
        <div className="container">
        <div className="plan_container">
        <h4 className="plan_heading">
        How it works
        </h4>
        
        <ul className="plan_list">
        <li className="plan_item">
        <h4 className="plan_number">
        01
        </h4>
        
        <h4 className="plan_item-heading">
        Pick your coffee
        </h4>
        
        <p className="plan_item-text">
        Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
        </p>
        </li>
        
        <li className="plan_item">
        <h4 className="plan_number">
        02
        </h4>
        
        <h4 className="plan_item-heading">
        Choose the frequency
        </h4>
        
        <p className="plan_item-text">
        Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
        </p>
        </li>
        
        <li className="plan_item">
        <h4 className="plan_number">
        03
        </h4>
        
        <h4 className="plan_item-heading">
        Receive and enjoy!
        </h4>
        
        <p className="plan_item-text">
        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
        </p>
        </li>
        </ul>
        
        <Link to={'/plan'}>
        <button className="btn">Create your plan</button>
        </Link>
        </div>
        </div>
        </div>

        <Footer/>   
        </>
        )
    }
    
    export default Home