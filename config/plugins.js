const sendmail = require('sendmail')({
    devHost:'localhost',
    devPort: 1025,
})

module.exports = ({env}) => ({
    // ...
    // upload: {
    //   config: {
    //     provider: "strapi-provider-upload-do", 
    //     providerOptions: {
    //       key: env('DO_SPACE_ACCESS_KEY'),
    //       secret: env('DO_SPACE_SECRET_KEY'),
    //       endpoint: env('DO_SPACE_ENDPOINT'),
    //       space: env('DO_SPACE_BUCKET'),
    //       directory: env('DO_SPACE_DIRECTORY'),
    //       cdn: env('DO_SPACE_CDN'),
    //     }
    //   },
    // }, 
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
 