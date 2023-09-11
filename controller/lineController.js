const {
    getDataCam,
    getDataCncSatu,
    getDataCncDua,
    getDataCncTiga,
    getAllLine,
    getCamLine,
    getLineSatu,
    getLineDua,
    getLineTiga
} = require('../data/database');

const response = require('../utils/response')

const getDataCamController = async (req, res) => {
    try {
        let result = await getDataCam()

        response(200, result, 'data produksi cam, hari ini', 'percen', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'percen', res)
    }
}

const getDataCncSatuController = async (req, res) => {
    try {
        let result = await getDataCncSatu()

        response(200, result, 'data produksi cnc 1, hari ini', 'percen', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'percen', res)
    }
}

const getDataCncDuaController = async (req, res) => {
    try {
        let result = await getDataCncDua()

        response(200, result, 'data produksi cnc 2, hari ini', 'percen', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'percen', res)
    }
}

const getDataCncTigaController = async (req, res) => {
    try {
        let result = await getDataCncTiga()

        response(200, result, 'data produksi cnc 3, hari ini', 'percen', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'percen', res)
    }
}

const getAllLineController = async (req, res) => {
    try {
        let result = await getAllLine()

        response(200, result, 'data produksi per mesin semua line', 'line', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'line', res)
    }
}

const getCamLineController = async (req, res) => {
    try {
        let result = await getCamLine()

        response(200, result, 'data produksi per mesin line CAM', 'line', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'line', res)
    }
}

const getLineSatuController = async (req, res) => {
    try {
        let result = await getLineSatu()

        response(200, result, 'data produksi per mesin line 1', 'line', res)
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res)
    }
}

const getLineDuaController = async (req, res) => {
    try {
        let result = await getLineDua()

        response(200, result, 'data produksi per mesin line 2', 'line', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'line', res)
    }
}

const getLineTigaController = async (req, res) => {
    try {
        let result = await getLineTiga()

        response(200, result, 'data produksi per mesin line 2', 'line', res)
    } catch (error) {
        console.log(error)
        response(500, error, 'internal server error', 'line', res)
    }
}

module.exports = {
    getDataCamController,
    getDataCncSatuController,
    getDataCncDuaController,
    getDataCncTigaController,
    getAllLineController,
    getCamLineController,
    getLineSatuController,
    getLineDuaController,
    getLineTigaController
}
