const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));
app.listen(PORT, () => console.log('listening on port ' + PORT));
