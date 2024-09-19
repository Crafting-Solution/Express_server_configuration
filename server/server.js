import config from './config'
import app from './express'

app.get('/', (req, res) => {
    res.json({message: "Welcome to user app"})
})

application.listen(config.port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Server started at port number " + config.port)
    }
})