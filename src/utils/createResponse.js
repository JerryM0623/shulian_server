const createResponse = async (code, message, data) => {
    return {
        code,
        message,
        data
    }
}

module.exports = { createResponse }