import { createMuiTheme } from '@material-ui/core/styles';
// import indigo from 'material-ui/colors/indigo';
// import pink from 'material-ui/colors/pink';
// import red from 'material-ui/colors/red';
// import purple from '@material-ui/core/colors/purple';
// import red from '@material-ui/core/colors/red';

// const primary = red[500]; // #F44336
// const primary = "#2a9d8f";
// const primary = "#4361EE"; // blue
const primary = "#003049";

// const accent = purple['A200']; // #E040FB
// const accent = "#e76f51";
// const secondary = "#66FBD1";// kind of green fucsia
const secondary = "#06d6a0";

// const secondary = purple.A200; // #E040FB (alternative method)

export default createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "10px",
                padding: "10px"
            }
        }
    },

    palette: {
        primary: {
            main: primary
        },
        secondary: {
            main: secondary
        } // Indigo is probably a good match with pink
    }
});

// import {cyan500, deepPurple500} from 'material-ui/colors';
// // import getMuiTheme from 'material-ui/styles/getMuiTheme'; 
// import { getMuiTheme } from 'material-ui/styles';

// export default theme = getMuiTheme({
//   palette: {
//     textColor: cyan500
//   },
//   appBar: {
//     height: 50
//   }
// });

// export default theme;