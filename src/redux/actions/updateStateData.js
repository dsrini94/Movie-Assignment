module.exports = (data,type) => {
    return {
        method:"updateState",
        type:type,
        data:data
    }
}