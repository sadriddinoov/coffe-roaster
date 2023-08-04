import './type.scss'

function Type({img, title, subtitle}) {
    return (
        <li className='type_item'>
            <img className='type_img' src={img} alt="" />
            <h3 className="type_heading">
                {title}
            </h3>
            <p className="type_text">
                {subtitle}
            </p>
        </li>
    )
}

export default Type