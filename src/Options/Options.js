import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export default function Options(props) {
    return (
        <div>
            <FormGroup aria-label="position">
                <FormControlLabel
                    control={<Checkbox color="primary"
                        checked={props.state.bathroom}
                        onChange={(e) => props.setState({ ...props.state, bathroom: e.target.checked })}
                    />}
                    label="Bathroom"
                />
                <FormHelperText>Select to route you through a restroom on the way to your gate.</FormHelperText>
                <FormControlLabel
                    control={<Checkbox color="primary"
                        checked={props.state.food}
                        onChange={(e) => props.setState({ ...props.state,  food: e.target.checked })}
                    />}
                    label="Eat in"
                />
                <FormControlLabel
                    control={<Checkbox color="primary"
                        checked={props.state.togo}
                        onChange={(e) => props.setState({ ...props.state,  togo: e.target.checked })}
                    />}
                    label="Food/Coffee To-go"
                />
            </FormGroup>
        </div>
    );
}