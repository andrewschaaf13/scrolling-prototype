import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Tab } from '../../types';
import Item from './Item';

const useStyles = makeStyles({
  container: {
    background: '#D3D3D3',
    width: 200,
    flex: '0 0 auto',
    overflowY: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    paddingTop: 20,
    height: 50,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#b50f52',
  },
});


type Props = {
  tabs: Tab[];
};

const SideNav = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.header}>
          Test
        </div>
        {props.tabs.map((tab, index) => {
          return(<Item key={index} tab={tab} index={index}/>);
        })}
      </div>
    </div>
  );
}

export default SideNav;
