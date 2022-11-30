/* import '../../styles/cardCarrusel.css'; */
import { Image, Transformation } from 'cloudinary-react'

const ItemCategories = (props) => {
    return (
        <>
            <div key={props.uid} style={{"backgroundColor": "pink"}}>
                <label>{props.nombre}</label>
                <Image cloudName="dawjd5cx8" publicId={props.img}>
                    <Transformation
                        height="100"
                        width="100"
                        aspectRatio="1"
                        crop="fill"
                    />
                </Image>
            </div>
        </>
    )
}

export default ItemCategories;