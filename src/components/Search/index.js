import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import {sortReddit} from '../../store/actions/index';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1)
	}
}));

const Search = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [value, setValue] = useState('');
	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const onEnter = (event) =>{
		if(event.keyCode === 13) {
			if(value.trim()){
				dispatch(sortReddit(value));
			}
		}
	}

	return (
		<Grid item xs={12} sm={6}>
			<TextField
				label="Search reddit..."
				fullWidth
				id="standard-start-adornment"
				className={classes.margin}
				onChange={handleChange}
				onKeyUp={onEnter}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					)
				}}
			/>
		</Grid>
	);
};

export default Search;
