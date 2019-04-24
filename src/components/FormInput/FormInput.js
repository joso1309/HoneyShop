import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// const styles = theme => ({
//     // container: {
//     //     display: 'flex',
//     //     flexWrap: 'wrap',
//     // },
//     // formControl: {
//     //     margin: theme.spacing.unit,
//     // },
// });

class ComposedTextField extends React.Component {
    state = {
        text: '',
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ text: event.target.value });
        console.log(this.state.text);

    };

    render() {
        // const { classes } = this.props;

        return (

            <div >
                <br></br>
                {/* className={classes.container} */}
                {/* className={classes.formControl} */}
                {/* variant="outlined" */}
                <FormControl variant="outlined">
                    <InputLabel
                        ref={ref => {
                            this.labelRef = ReactDOM.findDOMNode(ref);
                        }}
                    // htmlFor="component-outlined"
                    >Ime</InputLabel>
                    <OutlinedInput
                        id="text-input"
                        value={this.state.text}
                        onChange={this.handleChange}
                        labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                    />
                </FormControl>

            </div>
        );
    }
}

// ComposedTextField.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ComposedTextField);
export default ComposedTextField;