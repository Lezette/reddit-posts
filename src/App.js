import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Heading from './components/Heading';
import Search from './components/Search';
import FilterSearch from './components/FilterSearch';
import Subreddit from './components/Subreddit';

export default function App() {
	return (
		<div>
			<Heading />
			<CssBaseline />
			<Box m={1} />
			<Container maxWidth="sm">
				<Grid container spacing={4}>
					<Search />
					<FilterSearch />
				</Grid>
			</Container>
			<Subreddit />
		</div>
	);
}
