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

class CourseDetails extends React.Component {

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
                }}
            >


                <Typography gutterBottom variant="h6" component="h6">

                    This is your course: "Data science with Python"

                </Typography>

                <Typography gutterBottom variant="h6" component="h6">

                    Chapters:

                </Typography>

                {/* submit cmoment */}
                <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.history.push("createNewChapter")}
                // disabled={this.state.loading}
                >

                    Create a new chapter

                </Button>

            </Container>
        );

    }

}

export default CourseDetails;