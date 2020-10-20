import React, { useRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SideNav from './Components/SideNav/SideNav';
import Form from './Components/Form/Form';
import Page from './Components/Page/Page';
import { BrowserRouter, Route } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
  }
});

const App = () => {
  const classes = useStyles();
  
  const formSections = [
    {
      index: 0,
      title: 'Header',
      sectionId: 'header',
      sideNavId: 'header',
      hideInSideNav: true,
      ref: useRef(null)
    },
    {
      index: 1,
      title: 'Section 1',
      sectionId: 'section1',
      sideNavId: 'sideNav1',
      ref: useRef(null)
    },
    {
      index: 2,
      title: 'Section 2',
      sectionId: 'section2',
      sideNavId: 'sideNav2',
      ref: useRef(null)
    },
    {
      index: 3,
      title: 'Section 3',
      sectionId: 'section3',
      sideNavId: 'sideNav3',
      ref: useRef(null)
    },
    {
      index: 4,
      title: 'Section 4',
      sectionId: 'section4',
      sideNavId: 'sideNav4',
      ref: useRef(null)
    },
    {
      index: 5,
      title: 'Section 5',
      sectionId: 'section5',
      sideNavId: 'sideNav5',
      ref: useRef(null)
    },
    {
      index: 6,
      title: 'Section 6',
      sectionId: 'section6',
      sideNavId: 'sideNav6',
      ref: useRef(null)
    }
  ]

  const tabs = [
    {
      title: 'Tab 0',
      index: 0,
      id: 'tab-0',
      route: '/page'
    },
    {
      title: 'Tab 1',
      index: 1,
      id: 'tab-1',
      route: '/',
      sections: formSections
    }
  ]

  return (
    <div className={classes.container}>
      <BrowserRouter>
        <SideNav tabs={tabs} />
        <Route path='/' exact component={() => <Form sections={formSections}/>} />
        <Route path='/page' exact component={Page} />
        <Route path='/page2' exact component={Page} />
      </BrowserRouter>
    </div>
  );
}

export default App;
