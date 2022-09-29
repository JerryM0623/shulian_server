const Koa = require('koa');

const app = new Koa();

app.listen(4477, () => {
    console.log('server init...');
    console.log(`this server is running at: http://localhost:4477`);
})