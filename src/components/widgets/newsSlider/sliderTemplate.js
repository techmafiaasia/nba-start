import React from 'react'
import Slick from 'react-slick'
import {Link} from 'react-router-dom'
export default function SliderTemplate(props) {
    
    const settings = {
        dots: true,
        infinite: true,
        arrows:false,
        speed: 300,
        ...props.settings
    }
    let template = ''

    switch(props.type){
        case 'featured':
            template = props.data.map((item,i) =>{
                return(
                    <div key = {i} className = "featured-item">
                        <div className = "featured-image" style ={{
                            backgroundImage: `url(images/articles/${item.image})`
                        }}>

                        </div>
                        <Link to = {`./articles/${item.id}`}>
                            {item.title}
                        </Link>
                    </div>
                )
            })
            break;
        default:
            template = ''
    }
    return (
            <Slick
                
                {...settings}
            >
               {template}
            </Slick>
    )
}
