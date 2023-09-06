const express = require('express');
const cors = require('cors');
const port = 3004;

const response = require('./response');

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
} = require('./database');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    response(200, '', 'production api', res);
});

// get data production
// get data cam
app.get('/cam', async (req, res) => {
    try {
        let result = await getDataCam();

        console.log(result)

        response(200, result, 'data produksi cam, hari ini', 'percen', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'percen', res);
    }
});

// get data cnc 1
app.get('/cnc-1', async (req, res) => {
    try {
        let result = await getDataCncSatu();

        response(200, result, 'data produksi cnc 1, hari ini', 'percen', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'percen', res);
    }
});

// get data cnc 2
app.get('/cnc-2', async (req, res) => {
    try {
        let result = await getDataCncDua();

        response(200, result, 'data produksi cnc 2, hari ini', 'percen', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'percen', res);
    }
});

// get data cnc 3
app.get('/cnc-3', async (req, res) => {
    try {
        let result = await getDataCncTiga();

        response(200, result, 'data produksi cnc 3, hari ini', 'percen', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'percen', res);
    }
});

// get data produksi semua mesin di semua line
app.get('/line', async (req, res) => {
    try {
        let result = await getAllLine();

        response(200, result, 'data produksi per mesin semua line', 'line', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res);
    }
});

// get data produksi semua mesin di line CAM
app.get('/line-cam', async (req, res) => {
    try {
        let result = await getCamLine();

        response(200, result, 'data produksi per mesin line CAM', 'line', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res);
    }
});

// get data produksi semua mesin di line 1
app.get('/line-1', async (req, res) => {
    try {
        let result = await getLineSatu();

        response(200, result, 'data produksi per mesin line 1', 'line', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res);
    }
});

// get data produksi semua mesin di line 2
app.get('/line-2', async (req, res) => {
    try {
        let result = await getLineDua();

        response(200, result, 'data produksi per mesin line 2', 'line', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res);
    }
});

// get data produksi semua mesin di line 3
app.get('/line-3', async (req, res) => {
    try {
        let result = await getLineTiga();

        response(200, result, 'data produksi per mesin line 2', 'line', res);
    } catch (error) {
        console.log(error);
        response(500, error, 'internal server error', 'line', res);
    }
});

app.listen(port, () => {
    console.log(`server listen on ${port}`);
});
