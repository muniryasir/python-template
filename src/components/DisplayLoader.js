import Loader from "react-js-loader";
import './DisplayLoader.css'
export default function DisplayLoader() {
    let color = 'blue'
    return (
<div className='loaderC'>
            <Loader type="box-rotate-x" bgColor={color} color={color} title={"Loading"} size={100} />
            </div>
    )

}