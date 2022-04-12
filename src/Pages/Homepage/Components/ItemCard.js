import React from "react";

import '../../../styles/ItemCardStyle.css';
import LazyLoad from 'react-lazyload';
const SOURCE_PATH = 'http://localhost/video-viewer/src/Sources/';

class ItemCard extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }
    render(){
        return(
            <LazyLoad className='item-card' offset={100}>
                <video preload="metadata" controls loop muted>
                    <source src={SOURCE_PATH + this.props.data.source} type="video/mp4"/>
                </video>
            </LazyLoad>  
        );
    }
}
export default ItemCard;