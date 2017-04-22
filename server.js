var express = require('express'),
    path = require('path'),
    cors = require('cors'),
    port = process.env.PORT || 4000,
    app = express();

app.use(cors());
app.use(express.static(__dirname ));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

  app.listen(port);
