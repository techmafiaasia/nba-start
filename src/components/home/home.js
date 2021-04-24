import React from 'react'
import Slider from '../widgets/newsSlider/slider'
import NewsList from '../widgets/newsList/newsList'
import VideosList from '../widgets/videosList/videosList'
export default function Home() {
    return (
        <div>
            <Slider
                type = "featured"
                start = {5}
                amount = {3}
                settings = {{
                    dots: false
                }}
            />
            <NewsList
                type = "card"
                loadMore = {true}
                start = {0}
                amount = {3}
            />
            <VideosList 
                type = "card"
                loadMore = {true}
                title = {true}
                start = {3}
                amount = {3}

            />

        </div>
    )
}
