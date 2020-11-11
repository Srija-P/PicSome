import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context) //Geting the allPhotos array from context
    
    //// map over it, and creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />

    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos