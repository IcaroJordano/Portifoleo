import "./Home.css"
import video from "../midias/home-video-vertical.mp4"
import arrow from '../midias/arrow.gif'

export function Home() {
    return(
        <section className="Home" >
            <video muted autoPlay loop >
                <source type="video/mp4" src={video} />
            </video>
            <div className="image" >
                <img src={arrow} alt="" />
            </div>
        </section>
    )
}