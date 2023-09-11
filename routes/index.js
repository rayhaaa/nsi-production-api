const express = require('express')
const router = express.Router()

const {
    getDataCamController,
    getDataCncSatuController,
    getDataCncDuaController,
    getDataCncTigaController,
    getAllLineController,
    getCamLineController,
    getLineSatuController,
    getLineDuaController,
    getLineTigaController
} = require('../controller/lineController')


// Menampilkan data produksi line cam hari ini
router.get('/cam', getDataCamController)


// Menampilkan data produksi line cnc 1 hari ini
router.get('/cnc-1', getDataCncSatuController)

// Menampilkan data produksi line cnc 2 hari ini
router.get('/cnc-2', getDataCncDuaController)

// Menampilkan data produksi line cnc 3 hari ini
router.get('/cnc-3', getDataCncTigaController)


// Menampilkan data produksi per mesin di semua line hari ini
router.get('/line', getAllLineController)

// Menampilkan data produksi per mesin di line cam hari ini
router.get('/line-cam', getCamLineController)

// Menampilkan data produksi per mesin di line cnc 1 hari ini
router.get('/line-1', getLineSatuController)

// Menampilkan data produksi per mesin di line cnc 2 hari ini
router.get('/line-2', getLineDuaController)

// Menampilkan data produksi per mesin di line cnc 3 hari ini
router.get('/line-3', getLineTigaController)

module.exports = router
