const whiteList = ['https://www.youtube.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by Cors!'));
    }
  },
};

module.exports = corsOptions;
