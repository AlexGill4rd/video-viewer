import React from "react";

import '../../../styles/ItemCardStyle.css';
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
            <div className='item-card'>
                <video preload="metadata" controls loop muted>
                    <source src={SOURCE_PATH + this.props.data.source} type="video/mp4"/>
                </video>
            </div>  
        );
    }
}
export default ItemCard;