import React from 'react'
import Slider from '../widgets/newsSlider/slider'
export default function Home() {
    return (
        <div>
            <Slider
                type = "featured"
                start = {5}
                amount = {3}
                settings = {{
                    dots: true
                }}
            />
        </div>
    )
}
