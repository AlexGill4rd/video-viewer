import React from "react";

import FFMPEG from "react-ffmpeg";

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
    async handleSubmit(e){
        e.preventDefault();
        this.state.files.map(async function (file) {
            await FFMPEG.process(
            file,
            '-i ' + file + ' -vcodec libx265 -crf 28 output.mp4',
            function (e) {
                const video = e.result;
    
                const element = document.createElement("a");;
                element.href = video;
                element.download = file.name;
                document.body.appendChild(element);
                element.click();
            }.bind(this)
            );
        })
        const file = this.state.files[0];
        await FFMPEG.process(
          file,
          '-i ' + file + ' -vcodec libx265 -crf 28 output.mp4',
          function (e) {
            const video = e.result;
            console.log(video);
          }.bind(this)
        );
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