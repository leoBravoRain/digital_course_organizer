import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
    Button,
    // Box,
    TextField,
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import LiveTv from '@material-ui/icons/LiveTv';

import { ReactMediaRecorder } from "react-media-recorder";

// import GoogleMapReact from 'google-map-react';
// import LocationSearching from "@material-ui/icons/LocationSearching";
// import Add from "@material-ui/icons/Add";

// import {
//     fs,
//     an,
//     // auth,
// } from "../../libraries/firebase/firebase";

// import firebase from "firebase";

// import {
//     MapContainer,
//     MapConsumer,
//     TileLayer,
//     CircleMarker,
//     // Popup,
//     // Tooltip, 
//     // useMap,
//     // MapControl,
// } from 'react-leaflet';

// // import SearchBox from "./components/searchBox.component";

// const L = require("leaflet");

// import Room from '@material-ui/icons/Room';



class VideoRecorder extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            // loading: false,
            // cityName: null,
            // marker: null,
            // countryName: null,
            // updateUserLocation: false,
        };

        // this.addCity = this.addCity.bind(this);
        // this.addMarker = this.addMarker.bind(this);

    }


    componentDidMount() {

        alert("If you want to add your webcam to the video, please open the webcam using your favorite app");
        
    }

  
    render() {

        // return method
        return (

            <Container
                style={{
                }}
            >

                <ReactMediaRecorder
                    // video
                    screen
                    audio
                    onStop = {(url) => {
                        alert("stop video");
                        console.log(url);

                        // const blob = new Blob([JSON.stringify(url)], { type: 'video' });
                        // var blob = new Blob([url], { type: 'video/ogg' });
                        // var url = URL.createObjectURL(blob);

                        // console.log(blob);
                        // console.log(url);

                        // function download() {
                        var blob = new Blob(url, {
                                type: 'video/webm'
                            });
                            var url = URL.createObjectURL(blob);
                            var a = document.createElement('a');
                            document.body.appendChild(a);
                            a.style = 'display: none';
                            a.href = url;
                            a.download = 'test.webm';
                            a.click();
                            window.URL.revokeObjectURL(url);
                        // }


                    }}
                    render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
                        <div>
                            <p>{status}</p>
                            <button onClick={startRecording}>Start Recording</button>
                            <button onClick={stopRecording}>Stop Recording</button>
                            <video src={mediaBlobUrl} controls autoplay loop />
                            {/* <button onClick = {alert("aoisjd")}> Save video </button> */}
                        </div>
                    )}
                />


            </Container>
        );

    }

}

export default VideoRecorder;