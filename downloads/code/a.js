// 获取服务的IP地址
// 参考自： https://blog.csdn.net/alreadyRAY/article/details/95317309

const os = require('os')

function getIPAdress() {
    const interfaces = os.networkInterfaces()
    let internal = true ;
    let locatIp = '' ;
    for (let devName in interfaces) {
        let iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias, internal) {
                locatIp = alias.address
            }
        }
    }
    return locatIp ;
}

console.log(getIPAdress())

const myHost = getIPAdress() //本地IP地址