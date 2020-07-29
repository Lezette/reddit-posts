import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import { useDispatch } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { filterReddit } from '../../store/actions/index'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const FilterSearch = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    if (value) {
      dispatch(filterReddit(value))
    }
  }

  return (
    <Grid item xs={12} sm={6}>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel htmlFor="filter" id="labelid">
          Filter By
        </InputLabel>
        <Select
          defaultValue=""
          id="filter"
          labelId="labelid"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Date (new - old)</MenuItem>
          <MenuItem value={2}>Date (old - new)</MenuItem>
          <MenuItem value={3}>UpVotes (highest - lowest)</MenuItem>
          <MenuItem value={4}>UpVotes (lowest - highest)</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default FilterSearch
