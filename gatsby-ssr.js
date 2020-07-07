const React = require('react');

const { FORM_NAME } = require('./src/contactFormConstants');

const STYLE_RESET = { width: '100%', height: '100%', margin: 0 };

exports.onRenderBody = ({
  setHeadComponents,
  setPostBodyComponents,
  setBodyAttributes,
  setHtmlAttributes,
}) => {
  // Getting these into the head so the fonts start loading fast and we don't have a FoUC.
  setHeadComponents([
    <style key="font-face">
      {`
      @font-face: {
        font-family: 'Overpass',
        font-style: 'normal',
        font-display: 'swap',
        font-weight: 400,
        src: url(Overpass/Overpass-Regular.ttf),
      }
      `}
    </style>,
  ]);

  setBodyAttributes({
    style: STYLE_RESET,
  });

  setHtmlAttributes({
    style: STYLE_RESET,
  });

  // <form netlify... /> is here to trigger the netlify bot into making form submissions available
  // for this website. If I put the tags on the form which actually performs the submission
  // then it doesn't work. I believe that form is rendered too dynamically to trigger the netlify
  // bot. This form doesn't do any actual work on the site for users.
  setPostBodyComponents([
    <form name={FORM_NAME} netlify="true" netlify-honeypot="bot-field" hidden key="form">
      <input type="email" name="email" />
    </form>,
  ]);
};