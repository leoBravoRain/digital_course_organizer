import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {
    Button,
    Box,
    TextField,
} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import LiveTv from '@material-ui/icons/LiveTv';


// import {
//     fs,
//     an,
//     // auth,
// } from "../../libraries/firebase/firebase";

// import firebase from "firebase";

// import Room from '@material-ui/icons/Room';

class AddVideoToChapter extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            // loading: false,
            // newUserComment: "",
            // newUserVideo: null,
            // newUserName: "",
            // newUserLinkToProfile: "",
        }

        // this.addTrick = this.addTrick.bind(this);

    }


    componentDidMount() {

    }

    render() {

        // return method
        return (

            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >


                <Typography gutterBottom variant="h6" component="h6">

                    Create a new chapter

                </Typography>

                <Typography gutterBottom variant="h6" component="h6">

                    Select add video or record video

                </Typography>

                {/* <TextField
                    id="standard-basic"
                    label="Resource description"
                    // margin = {3}
                    onChange={(e) => {
                        // this.setState({
                        //     newUserComment: e.target.value
                        // })
                    }}
                />

                <input
                    label=" aoisjdiasd"
                    accept="video/*"
                    type="file"
                    onChange={(e) => {
                        // this.setState({
                        //     newUserVideo: e.target.files[0]
                        // });
                    }}
                /> */}


                {/* submit cmoment */}
                <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.history.push("videoRecorder")}
                // onClick={() => this.addTrick()}
                // disabled={this.state.loading}
                >

                    Next step

                </Button>

            </Container>
        );

    }

}

export default AddVideoToChapter;