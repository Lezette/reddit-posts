import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	backgroud: {
		backgroundColor: '#000000'
	}
}));
const Heading = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar position="static" className={classes.backgroud}>
				<Toolbar variant="dense">
					<Typography variant="h6" color="inherit">
						Reddits Posts
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};
export default Heading;
