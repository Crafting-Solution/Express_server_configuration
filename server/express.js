import bodyParser from "body-parser"
import express from express
import cookieParser from "cookie-parser"
import helmet from "helmet"
import cors from "cors"
import compress from 'compression'


var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app()