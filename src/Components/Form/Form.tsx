import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Section } from '../../types';

const useStyles = makeStyles({
  container: {
    width: '100%'
  },
  form: {
    flex: '1 1 auto',
    overflowY: 'auto',
    backgroundColor: '#ffffff',
    height: '90vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 'calc(90vh - 225px)',
  },
  section: {
    margin: 25,
    height: 200,
  },
  footer: {
    height: '10vh',
    backgroundColor: '#cecece',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 50,
    margin: 20,
  }
});

type Props = {
  sections: Section[];
};

const Form = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id='form' className={classes.form}>
          <div className={classes.content}>
            {props.sections.map((section, index) => {
              return (
                <div key={index}>
                  <div id={section.sectionId} className={classes.section} ref={section.ref}>
                    {section.title}
                  </div>
                </div>
              );
            })}
          </div>
      </div>
      <div className={classes.footer}>
          <button className={classes.button}>
            Reset All
          </button>
          <button className={classes.button}>
            Submit
          </button>
      </div>
    </div>
  );
}

export default Form;
