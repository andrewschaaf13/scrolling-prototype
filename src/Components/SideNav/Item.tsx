import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import './SideNav.css'
import { Tab } from '../../types';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
  section: {
    height: 100,
  },
  subItem: {
    paddingLeft: 35,
    borderLeft: '3px solid transparent',
    transition: 'border-left .2s',
  },
  selectedSubItem: {
    paddingLeft: 35,
    borderLeft: '3px solid #b50f52',
    transition: 'border-left .2s',
  },
  item: {
    borderLeft: '3px solid transparent',
    margin: 0,
    padding: 0,
    height: 50,
  },
  selectedItem: {
    borderLeft: '3px solid #b50f52',
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    width: 200,
    height: 50,
  },
  linkText: {
    paddingLeft: 20,
    paddingTop: 7,
  },
  expand: {
    marginRight: 10,
  }, 
  noTextDeco: {
    textDecoration: 'none',
    color: 'black',
  },
});

type Props = {
  tab: Tab;
  index: number;
};

const getDimensions = (ele: HTMLElement) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop - 20;
  const offsetBottom = offsetTop + height - 20;
  return {
    offsetTop,
    offsetBottom,
  };
};

const Item = (props: Props) => {
  const classes = useStyles();
  const { tab, index } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedSubItem, setSelectedSubItem] = useState(-1);
  const location = useLocation();

  const handleTabClick = () => {
    var form = document.getElementById("form");
    if (form) {
      form.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    if (location.pathname === tab.route) {
      if (!selected) {
        setOpen(true);
        setSelected(true);
        if (tab.sections) {
          setSelectedSubItem(-1);
        }
      }
    } else {
      setOpen(false);
      setSelected(false);
    }

    const handleScroll = (form: HTMLElement | null) => {
      const pos = form?.scrollTop;
      tab.sections?.find((section) => {
        const ele = section.ref.current;
        if (ele && pos) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          const match = pos > offsetTop && pos < offsetBottom;
          if (match) {
            setSelectedSubItem(section.index);
          }
        }
      });
    };

    if (selected) {
      var form = document.getElementById("form");
      if (form) {
        form.addEventListener("scroll", () => handleScroll(form));
      }
    }
  }, [location.pathname, tab.route, tab.sections, selected]);
  
  if (tab.sections) {
    return (
    <div key={index}>
      <ListItem button className={(selected) ? classes.selectedItem : classes.item}>
        <Link to={tab.route} className={classes.link} onClick={handleTabClick}>
          <ListItemText primary={tab.title} className={classes.linkText} />
        </Link>
        <div className={classes.expand} onClick={() => setOpen(!open)}>
          {open ? < ExpandLess/> : < ExpandMore/>}
        </div>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {tab.sections.map((section, index) => {
            if (!section.hideInSideNav) {
              return (
                <div key={index}>
                  <HashLink smooth to={tab.route + '#' + section.sectionId} className={classes.noTextDeco}>
                    <ListItem 
                        button 
                        className={(index === selectedSubItem) ? classes.selectedSubItem : classes.subItem}>
                        <ListItemText primary={section.title} />
                    </ListItem>
                  </HashLink>
                </div>
              );
            }
            return null;
          })}
        </List>
      </Collapse>
    </div>
    );
  } else {
    return (
      <div key={index}>
        <ListItem button className={(selected) ? classes.selectedItem : classes.item}>
          <Link to={tab.route} className={classes.link}>
            <ListItemText primary={tab.title} className={classes.linkText} />
          </Link>
        </ListItem>
      </div>
    );
  }
}

export default Item;
