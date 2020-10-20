import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    flex: '1 1 auto',
    overflowY: 'auto',
    backgroundColor: '#ffffff',
  }
});

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to={'/'}>To the form</Link>
    </div>
  );
}

export default Page;
