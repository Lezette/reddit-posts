import React from 'react';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    card: {
        display:'flex',
        justifyContent: 'space-between'
    }
  });

const SubRedditCard = ({data}) => {
    const classes = useStyles();
	return (
		<>  
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={data.thumbnail}
                        title={data.title}
                        alt={data.title}
                        
                        />
                        <CardContent>
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.title}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.card}>
                        <Link component="a" href={`https://www.reddit.com${data.permalink}`} target="_blank">
                            View Post
                        </Link>
                        <Typography variant="body2" align="center" component="div">
                            <ThumbUpIcon />
                            <Box />
                            {data.ups}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {moment(moment.unix(data.created_utc), "YYYYMMDD").fromNow()}
                        </Typography>
                    </CardActions>
                </Card>
            </Grid>
		</>
	);
};

export default SubRedditCard;
