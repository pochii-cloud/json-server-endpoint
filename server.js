const json_server=require('json-server')
const cors1=require('cors')
const path=require('path')
const app=json_server.create();

const routes=json_server.router(path.join(__dirname,'db.json'))
const middleware=json_server.defaults();
app.use(cors1())
app.use(json_server.bodyParser)
app.use(routes)
app.use(middleware)
app.listen(4000,console.log('server is up'))

