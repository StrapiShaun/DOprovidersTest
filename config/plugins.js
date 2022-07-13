const sendmail = require('sendmail')({
    devHost:'localhost',
    devPort: 1025,
})

module.exports = ({env}) => ({
    // ...
    upload: {
      config: {
        breakpoints: {
          xlarge: 1920,
          large: 1000,
          medium: 750,
          small: 500,
          xsmall: 64
        },
      },
    },
    email: {
      config: {
        provider: 'sendmail',
        settings: {
          defaultFrom: 'myemail@protonmail.com',
          defaultReplyTo: 'myemail@protonmail.com',
        },
        
      },
    },
  })
 