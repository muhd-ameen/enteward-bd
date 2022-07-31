module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('enteward'),
                api_key: env('127539859635446'),
                api_secret: env('2WjXt04r1RvzIQxohHpcssMtJAY'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    // ...
});