import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import SortIcon from '@material-ui/icons/Sort'
import Card from './card'

const useStyles = makeStyles((theme) => ({
  backgroud: {
    backgroundColor: '#EFEEEE',
  },
  postBackground: {
    backgroundColor: '#212121',
    color: '#ffffff',
  },
  grid: {
    padding: '10px',
  },
  margin: {
    marginLeft: '5px 0 0 0',
  },
  cursor: {
    cursor: 'pointer',
  },
}))

const Subreddit = ({ name, data }) => {
  const [rData, setData] = useState(data)
  const [reverse, setReverse] = useState(false)
  const [rName] = useState(name)

  const sortUpvote = () => {
    if (rData.length > 1) {
      if (reverse) {
        const sort = rData.sort((a, b) => a.ups - b.ups)
        setData(sort)
        setReverse(false)
      } else {
        const sort = rData.sort((a, b) => b.ups - a.ups)
        setData(sort)
        setReverse(true)
      }
    }
  }

  const classes = useStyles()
  return (
    <main>
      <Box m={4} />
      <Box className={classes.backgroud} mb={1}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={6} sm={8}>
            <Typography
              className={classes.margin}
              variant="h4"
              component="h4"
              ml={2}
            >
              {rName}
            </Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography
              align="right"
              onClick={sortUpvote}
              className={classes.cursor}
            >
              <SortIcon />
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={6} m={1} className={classes.grid}>
        {rData && rData.map((item, i) => <Card data={item} key={i} />)}
      </Grid>
    </main>
  )
}

export default Subreddit
