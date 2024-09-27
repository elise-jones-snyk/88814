const app = express();

const
compression = require("compression");

const csurf = require("surf");

app.use(require("body-parser").json());



app.use(
    require("cookie-session")({

secret: "I am nearly always happy.",

maxAge: 24 * 60 * 60 * 1000
})
)