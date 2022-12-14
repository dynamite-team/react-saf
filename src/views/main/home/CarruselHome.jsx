import AliceCarousel from "react-alice-carousel";

import imagen1 from '../../../assets/img/home1.jpg'
import imagen2 from '../../../assets/img/home2.jpg'
import imagen3 from '../../../assets/img/home3.jpg'
import imagen4 from '../../../assets/img/home4.jpg'

const CarruselHome = () => {

    const ArrayImagenes = [
        {
            id: 1,
            img: `${imagen1}`
        },
        {
            id: 2,
            img: `${imagen2}`
        },
        {
            id: 3,
            img: `${imagen3}`
        },
        {
            id: 4,
            img: `${imagen4}`
        }
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };

    const items = ArrayImagenes.map((item) => {
        return <div key={item.id} style={{ 'width': '100%', 'height': '10%', "margin": "auto" }}>
            <img src={item.img}  style={{ 'objectFit': 'cover', 'width': '100%', 'height': '400px', 'borderRadius': '20px'}}/>
        </div>
    })

    return (
        <>
            <AliceCarousel
                style={{ "margin": "auto" }}
                mouseTracking
                items={items}
                responsive={responsive}
                disableButtonsControls
                autoPlay
                infinite
                animationDuration={3000}
            />
        </>
    )
}

export default CarruselHome;