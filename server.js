let express = require("express");
let app = express();

app.use(express.static("./AU"));

app.listen(81, function() {
    console.log("Listening on port 81");
});
