async function preInit(inputObj) {
    console.log(`
    _    _ ______ _    _ ______ 
   | |  | |  ____| |  | |  ____|
   | |__| | |__  | |__| | |__   
   |  __  |  __| |  __  |  __|  
   | |  | | |____| |  | | |____ 
   |_|  |_|______|_|  |_|______|
                                
                                `)
}

async function postInit(inputObj) {
    console.log("初始化后")
}

module.exports = {
    postInit,
    preInit
}
