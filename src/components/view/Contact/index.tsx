import React, { useState } from 'react';

import {
  AppBar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography
} from '@material-ui/core';
import GenericPrompt from '../../common/GenericPrompt';
import ServiceFactory from '../../../context/factories/ServiceFactory';

interface IContactDetails {
  body: string;
  email: string;
  name: string;
  subject: string;
}

export default function Contact() {
  const [prompt, setPrompt] = useState({
    open: false,
    msg: '',
    title: '',
  })
  const [contactDetails, setContactDetails] = useState<IContactDetails>({
    body: '',
    email: '',
    name: '',
    subject: '',
  });

  const [isValidName, setIsValidName] = useState({
    error: false,
    text: '',
  });

  const [isValidBody, setIsValidBody] = useState({
    error: false,
    text: '',
  });

  const [isValidEmail, setIsValidEmail] = useState({
    error: false,
    text: '',
  });

  const [isValidSubject, setIsValidSubject] = useState({
    error: false,
    text: '',
  });


  const isValidForm = () => {
    let isValid = true;

    if (contactDetails.name === '') {
      isValid = false;
      setIsValidName({ error: true, text: 'Please enter your name' });
    } else {
      setIsValidName({ error: false, text: '' });
    }

    if (contactDetails.body.length < 50) {
      isValid = false;
      setIsValidBody({ error: true, text: 'Please type minimum 50 characters' });
    } else {
      setIsValidBody({ error: false, text: '' });
    }

    if (contactDetails.email === '') {
      isValid = false;
      setIsValidEmail({ error: true, text: 'Please enter your email' });
    } else {
      setIsValidEmail({ error: false, text: '' });
    }

    if (contactDetails.subject === '') {
      isValid = false;
      setIsValidSubject({ error: true, text: 'Please type subject' });
    } else {
      setIsValidSubject({ error: false, text: '' });
    }

    return isValid;
  };


  const submit = () => {
    if (isValidForm()) {
      new ServiceFactory()
        .getSendingBlueService().transactions().sendTransactionEmail(
          contactDetails.email,
          contactDetails.name,
          contactDetails.subject,
          contactDetails.body
        ).then((res) => {
          if (res.messageId) {
            setPrompt({
              title: 'Success!',
              msg: 'Thank you for contacting me. I will get back to you as soon as possible',
              open: true,
            })
          } else {
            setPrompt({
              title: 'Failed!',
              msg: `Failed to send email. Please try again later or email me at jonsoliev31@gmail.com`,
              open: true,
            })
          }
        })
    }
  };


  const valueChanged = (prop: keyof IContactDetails) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactDetails({
      ...contactDetails,
      [prop]: event.target.value,
    });
  };

  const closeAndClearForm = () => {
    setContactDetails({
      body: '',
      email: '',
      name: '',
      subject: '',
    });
    setPrompt({
      title: '',
      msg: '',
      open: false
    });
  }

  return (
    <React.Fragment>
      <AppBar
        position="static"
        elevation={0}
        style={{
          color: 'white',
        }}
      >
        <Toolbar>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper square elevation={0}
          >
            <Container maxWidth="sm">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography align="center" variant="h6">
                    Let's connect! Would love to hear about your project ideas or thoughts what we might build together!
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={contactDetails.name}
                    onChange={valueChanged('name')}
                    error={isValidName.error}
                    helperText={isValidName.text}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    value={contactDetails.email}
                    onChange={valueChanged('email')}
                    error={isValidEmail.error}
                    helperText={isValidEmail.text}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="subject"
                    label="Subject"
                    required
                    variant="outlined"
                    value={contactDetails.subject}
                    onChange={valueChanged('subject')}
                    fullWidth
                    error={isValidSubject.error}
                    helperText={isValidSubject.text}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    rows={7}
                    multiline
                    id="body"
                    label="Body"
                    required
                    variant="outlined"
                    value={contactDetails.body}
                    onChange={valueChanged('body')}
                    fullWidth
                    error={isValidBody.error}
                    helperText={isValidBody.text}
                  />
                </Grid>

                <Grid item xs={12}
                  style={{
                    textAlign: 'center'
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      color: '#fff'
                    }}
                    onClick={() => submit()}
                  >
                    Send Message
                  </Button>
                </Grid>

              </Grid>
            </Container>
          </Paper>

          <GenericPrompt
            title={prompt.title}
            id="contact-confimation"
            open={prompt.open}
            body={(
              <div>
                {prompt.msg}
              </div>
            )}
            closeText="Close"
            onClose={() => closeAndClearForm()}
          />
        </Grid>
      </Grid>

    </React.Fragment>
  );
}
