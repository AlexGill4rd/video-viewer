var ffmpeg = require('ffmpeg');

var express = require('express');
var cors = require('cors');
const app = express();
var bodyParser = require("body-parser")
const { response } = require('express');
const { json } = require('body-parser');
var path = require("path");

const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/video/convert', function (req, res) {
    try {
        new ffmpeg('../Client/src/Pages/VideoConverter/ToConvert/19368_extreme_close_up_of_turning_a_page_in_the_dictionary_to_find_the_word_love_by_Omri_Ohana_Artgrid-H264-UHD.mp4', function (err, video) {
            if (!err) {
                console.log(video.metadata)
                console.log('The video is ready to be processed');
            } else {
                console.log('Error: ' + err);
            }
        });
    } catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }
});
app.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});