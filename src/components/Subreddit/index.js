import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import {getSubReddit} from '../../store/actions/index';
import Typography from '@material-ui/core/Typography';
import Subreddit from './subrebbit';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  '& > * + *': {
		marginLeft: theme.spacing(2),
	  },
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '90vh'
	}
}));

const Index = () => {
	const classes = useStyles();
	const [subRedditData, setSubRedditData] = useState([]);

	const {sorted, madeRequest} = useSelector((state) => {
		return state;
	});

	useEffect(()=> {
		setSubRedditData(Object.entries(sorted));
	},[sorted])

	useEffect(()=> {
	},[subRedditData])
	const dispatch = useDispatch();

	useEffect(()=>{
		dispatch(getSubReddit());
	}, []);
	
	return (
		<>
			{madeRequest && <div className={classes.center}>
				<CircularProgress />
			</div>}
			{subRedditData.length ? subRedditData.map((item, i) => {
				return <Subreddit name={item[0]} data={item[1]} key={i}/>
			}): <div className={classes.center}>
				<Typography variant="h4" component="h4" ml={2}>No Feeds</Typography>
				</div>}
		</>
	);
};

export default Index;
