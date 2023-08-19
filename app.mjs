import express from 'express'
import path from "path"
const app = express()
const port = 5000

app.use('/', express.static(path.join(process.cwd(),"web","build")));
app.get('/abc', (req, res) => {
  res.send('Hello World! ' + new Date().toString())
  console.log(req.ip);

})
app.use('*', express.static(path.join(process.cwd(),"web","build")))
// app.use har trha ke method me chalta he 
// console.log(path.dirname(__filename));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})