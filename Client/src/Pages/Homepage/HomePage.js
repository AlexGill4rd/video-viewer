import React from "react";

import '../../styles/HomePageStyle.css';

import axios from 'axios';
import ItemCard from "./Components/ItemCard";

const API_PATH = 'http://localhost/video-viewer/Client/api/content/index.php';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            key: '123',
            videos: []
        };
    }
    componentDidMount() {
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
        .then(result => {
            this.setState({ videos: result.data });
        })
        .catch(error => this.setState({ error: error.message }));
    }
    render(){
        
        return(
            <div>
                <div className="background"></div>
                <div className='item-container'>
                    {this.state.videos.map(function (feature) {
                        return <ItemCard data={feature} key={feature.id}  />
                    })}
                </div>
            </div>
        );
    }
}
export default HomePage;