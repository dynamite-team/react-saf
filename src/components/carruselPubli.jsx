import AliceCarousel from "react-alice-carousel";
import imagen2 from '../assets/img/soberania.jpeg'


const CarruselPublicidad = () => {

    const ArrayImagenes = [
        {
            id: 1,
            img: `${imagen2}`
        },
        {
            id: 2,
            img: `${imagen2}`
        },
        {
            id: 3,
            img: `${imagen2}`
        }
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 1 },
    };

    const items = ArrayImagenes.map((item) => {
        return <div key={item.id} style={{ 'width': '95%', 'height': '10%'}}>
            <img src={item.img}  style={{ 'objectFit': 'cover', 'width': '100%', 'height': '250px', 'borderRadius': '20px' }}/>
        </div>
    })

    return (
        <>
            <AliceCarousel
                style={{ "margin": "35px 35px 35px 35px" }}
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