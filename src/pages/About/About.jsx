import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import './About.scss'
import bgcImg from '../../assets/Bitmap.jpg'
import bitmap1 from '../../assets/Bitmap (1).jpg'
import bitmap2 from '../../assets/Bitmap (2).jpg'
import img1 from '../../assets/Combined Shape (2).svg'
import img2 from '../../assets/Combined Shape (3).svg'
import img3 from '../../assets/Combined Shape (4).svg'

function About() {
    return (
        <>
        <Header/>
        
        <div className="about">
        <div className="container">
        <div style={{backgroundImage: `url(${bgcImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="about_container">
        <h1 className="about_heading">
        About Us
        </h1>
        
        <p className="about_text">
        Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
        </p>
        </div>
        </div>
        </div>
        
        <div className="section">
        <div className="container">
        <div className="section_container">
        <img className='section_img' src={bitmap1} alt="" />
        
        <div>
        <h2 className="section_heading">
        Our commitment
        </h2>
        
        <p className="section_text">
        We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
        </p>
        </div>
        </div>
        </div>
        </div>
        
        
        <div className="quality">
        <div className="container">
        <div className="quality_container">
        <h3 className="quality_heading">
        Uncompromising quality
        </h3>
        
        <p className="quality_text">
        Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </p>
        
        <img src={bitmap2} alt="" className="quality_img" />
        </div>
        </div>
        </div>
        
        <div className="country">
        <div className="container">
        <div className="country_container">
        <h4 className="country_heading">
        Our headquarters
        </h4>
        
        <ul className="country_list">
        <li className="country_item">
        <img src={img1} alt="" />
        <h4 className="country_item-heading">
        United Kingdom
        </h4>
        
        <p className="country_item-text">
        68  Asfordby Rd <br />
        Alcaston <br />
        SY6 1YA <br />
        +44 1241 918425 <br />
        </p>
        </li>
        
        <li className="country_item">
        <img src={img2} alt="" />
        <h4 className="country_item-heading">
        Canada
        </h4>
        
        <p className="country_item-text">
        1528  Eglinton Avenue <br />
        Toronto <br />
        Ontario M4P 1A6 <br />
        +1 416 485 2997 <br />
        </p>
        </li>
        
        <li className="country_item">
        <img src={img3} alt="" />
        <h4 className="country_item-heading">
        Australia
        </h4>
        
        <p className="country_item-text">
        36 Swanston Street <br />
        Kewell <br />
        Victoria <br />
        +61 4 9928 3629 <br />
        </p>
        </li>
        </ul>
        </div>
        </div>
        </div>
        
        <Footer/>
        </>
        )
    }
    
    export default About