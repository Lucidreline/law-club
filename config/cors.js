const whitelist = ['http://localhost:3010', 'https://pls.manuelc.me'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

module.export = corsOptions;
