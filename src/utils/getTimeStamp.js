const getTimeStamp = async () => {
    return Math.floor(Date.now() / 1000)
}

module.exports = { getTimeStamp }