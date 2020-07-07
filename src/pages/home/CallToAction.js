import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';
import indigo from '@material-ui/core/colors/indigo';

import Button from './Button';
import { FORM_NAME } from '../../contactFormConstants';

const useStyles = createUseStyles(() => ({
  inputWrapper: {
    width: '100%',
    display: 'flex',
  },

  input: {
    flex: 1,

    border: 'none',
    borderLeft: `2px solid ${deepOrange[600]}`,
    borderRadius: 0,
    padding: '0.5rem 0.5rem',

    backgroundColor: grey[100],
    color: indigo[900],

    fontSize: '1rem',
    fontWeight: 700,
    fontFamily: 'Moderat Mono, Courier New, monospace',
    lineHeight: 2,

    '&:focus': {
      borderRadius: 0,
      // Just change the color of the border so the cursor in the input doesn't move.
      borderLeftColor: 'transparent',
    },

    '&::placeholder': {
      fontWeight: 700,
      color: indigo[900],
      fontFamily: 'Moderat Mono, Courier New, monospace',
      lineHeight: 2,
      fontSize: '0.875rem',
      // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
      opacity: 1,
    },
  },
}));

const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((k) => {
    formData.append(k, data[k]);
  });
  return formData;
};

const CallToAction = ({ placeholderText = 'Work email', buttonText = 'Notify me' }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // TODO: Don't submit if the email is blank or not set.
    // TODO: Disable the button until the email field has a value.
    // TODO: Disable the button while the submission is ocurring.
    // TODO: Show a success and failure message.

    const resp = await fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': FORM_NAME,
        email,
      }),
    });

    if (resp.ok) {
      // Show success
      setEmail('');
    } else {
      // Show failure
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={classes.inputWrapper}>
        <input
          type="email"
          name="email"
          placeholder={placeholderText}
          className={classes.input}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Button text={buttonText} />
      </div>
    </form>
  );
};

export default CallToAction;