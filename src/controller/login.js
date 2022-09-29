const loginController = async (ctx) => {
    console.log('login is match');
    ctx.body = {
        code: 0,
        msg: 'ok',
        data: ''
    }
}

module.exports = { loginController }