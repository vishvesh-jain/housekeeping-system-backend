const express = require('express');
const appln = express();

appln.set('port', process.env.PORT || 3000);


appln.use(express.json());

appln.use(require('./routes/housekeeping'));

appln.listen(appln.get('port'), () => {
  console.log(`Server on port ${appln.get('port')}`);
});
