const {
    getDataCam,
    getDataCncSatu,
    getDataCncDua,
    getDataCncTiga,
} = require('../../data/database');

const emitSocket = require('../../utils/emitSocket')

async function emitData(socket) {
    try {

        let data = {production: {
            cam: null,
            cncSatu: null,
            cncDua: null,
            cncTiga: null,
        }}
        let cam = await getDataCam()
        let cncSatu = await getDataCncSatu()
        let cncDua = await getDataCncDua()
        let cncTiga = await getDataCncTiga()

        data.production.cam = emitSocket('percen', cam)
        data.production.cncSatu = emitSocket('percen', cncSatu)
        data.production.cncDua = emitSocket('percen', cncDua)
        data.production.cncTiga = emitSocket('percen', cncTiga)

        console.log(data)
        console.log('gap')
        socket.emit('data', data)

        data.production.cam = null
        data.production.cncSatu = null
        data.production.cncDua = null
        data.production.cncTiga = null
    } catch (error) {
        console.log(error)
        return
    }
}

module.exports = emitData
