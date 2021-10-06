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

class CreateNewCourse extends React.Component {

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

                    Create a new course

                </Typography>

                {/* course information */}
                <TextField
                    id="standard-basic"
                    label="Title"
                    // margin = {3}
                    onChange={(e) => {
                        // this.setState({
                        //     newUserComment: e.target.value
                        // })
                    }}
                />

                {/* course information */}
                <TextField
                    id="standard-basic"
                    label="Subtitle"
                    // margin = {3}
                    onChange={(e) => {
                        // this.setState({
                        //     newUserComment: e.target.value
                        // })
                    }}
                />

                <TextField
                    id="standard-basic"
                    label="What the studens will learn in your course?"
                    // margin = {3}
                    onChange={(e) => {
                        // this.setState({
                        //     newUserComment: e.target.value
                        // })
                    }}
                />

                {/* submit cmoment */}
                <Button
                    align="center"
                    variant="contained"
                    color="primary"
                    onClick={() => this.props.history.push("courseDetails")}
                // onClick={() => this.addTrick()}
                // disabled={this.state.loading}
                >

                    Create

                </Button>

                {
                    this.state.loading &&

                    <CircularProgress />
                }

            </Container>
        );

    }

}

export default CreateNewCourse;