import React from "react";

var ffmpeg = require('js-ffmpeg');


import '../../styles/VideoConverterStyle.css';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            files: []
        };
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFileChange = (event) => {
        this.setState({ files: Array.from(event.target.files) });
    }
    handleSubmit(e){
        e.preventDefault();
        this.state.files.map(function (file) {
            ffmpeg.ffmpeg_simple('./ToConvert/' + file.name, {
                width: 640,
                height: 360,
                auto_rotate: true,
                ratio_strategy: "fixed",
                shrink_strategy: "crop",
                mixed_strategy: "crop-pad",
                stretch_strategy: "pad"
            }, 'output.mp4', function (progress) {
                console.log(progress);
            }).success(function (json) {
                console.log(json);
            }).error(function (error) {
                console.log(error);
            });
        });
    }
    render(){
        return(
            <div className="converter-main">
                <div className="converter-data">
                    <form method="post" className="converter-data-form" onSubmit={this.handleSubmit}>
                        <label className="converter-data-form-label">Selecteer video's</label>
                        <input type="file" id="converter-data-form-file" name="videos" accept="video/*" onChange={(event) => this.handleFileChange(event)} multiple></input>
                        <div className="converter-data-form-selected">
                            {this.state.files.map(function (file) {
                                return <span key={file.name}>* {file.name}</span>
                            })}
                        </div>
                        <label className="converter-data-form-text" >Width</label>
                        <input type="text" placeholder="Geef gewenste width in"/>
                        <label className="converter-data-form-text">Height</label>
                        <input type="text" placeholder="Geef gewenste height in"/>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default HomePage;