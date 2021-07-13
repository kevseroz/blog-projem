import React from 'react';
import Carousel from 'react-material-ui-carousel'
import image1 from './images/carousel1.jpg'
import image2 from './images/carousel2.jpg'
import image3 from './images/carousel3.jpg'

function Omcarousel(props)
{
    var items = [
        {
            image: image1,
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            image: image2,
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            image: image3,
            name: "Random Name #3",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
            <div>
                  
   
   
    </div>
    )

}
export default Omcarousel;