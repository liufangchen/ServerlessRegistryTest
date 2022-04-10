async function preInit(inputObj) {
    console.log("初始化前")
}

async function postInit(inputObj) {
    console.log("初始化后")
}

module.exports = {
    postInit,
    preInit
}
