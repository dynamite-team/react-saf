import AliceCarousel from "react-alice-carousel";

import imagen1 from '../assets/img/imagen2.png'
import imagen2 from '../assets/img/imagen3.png'
import imagen3 from '../assets/img/imagen4.png'

const CarruselPublicidad = () => {

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
        }
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };

    const items = ArrayImagenes.map((item) => {
        return <div key={item.id} style={{ 'width': '100%', 'height': '10%'}}>
            <img src={item.img}  style={{ 'objectFit': 'cover', 'width': '90%', 'height': '310px', 'borderRadius': '20px' }}/>
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

export default CarruselPublicidad;