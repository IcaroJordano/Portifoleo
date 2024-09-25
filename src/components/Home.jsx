import "./Home.css"
import video from "../midias/home-video-horizontal.mp4"
import arrow from '../midias/arrow.gif'

// import {useMediaQuery} from "@usehooks-ts"
import { useMediaQuery } from "@uidotdev/usehooks";

export function Home() {
    const isSmallDevice = useMediaQuery("only screen and (min-width : 768px)");
    return(
        <section className="Home" >
            {/* <div className="video" >
                <video muted autoPlay loop >
                    <source type="video/mp4" src={video} />
                </video>
                <div className="image" >
                    <img src={arrow} alt="" />
                </div>
            </div> */}
            .
        </section>
    )
}