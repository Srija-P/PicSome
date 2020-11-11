import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    //const [hovered, setHovered] = useState(false)
    const [hovered, ref] = useHover()

    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
   //img coming from props and has id property 
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id ===img.id)
          // if the item is already in the cart
            // return <i className="ri-shopping-cart-fill cart"></i>
        if(alreadyInCart) {
              return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
          } 
        else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
      
        
    }

    
    
    return (
        <div 
            className={`${className} image-container`}
           // onMouseEnter={() => setHovered(true)}
           // onMouseLeave={() => setHovered(false)}
           ref = {ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

//very important to create propTypes for component that are receiving props
Image.propTypes = {
    //properties of this objectis the props that iam accepting

    className: PropTypes.string, //className should be a string //// img should be an Object
    img: PropTypes.shape ( {      
        //img.PropTypes.object, Specifying the properties of an object is called and object's "shape" 
        //specifically an object with `id`, `url`, and `isFavorite` properties
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image

