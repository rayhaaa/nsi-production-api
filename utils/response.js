const response = (statusCode, data, message, type, res) => {
    if (data.length == 0) {
        if (type == 'percen') {
            data = [{percen: 0.00001}];
        } else if (type == 'home') {
            data = [
                {
                    route:{
                        cam: "/cam -> untuk mendapat data production cam hari ini",
                        cnc1: "/cnc-1 -> untuk mendapat data production cnc line 1 hari ini",
                        cnc2: "/cnc-2 -> untuk mendapat data production cnc line 2 hari ini",
                        cnc3: "/cnc-3 -> untuk mendapat data production cnc line 3 hari ini",
                        line: "/line -> untuk mendapat data production tiap mesin di semua line",
                        lineCam: "/line-cam -> untuk mendapat data production tiap mesin di line cam",
                        lineCnc3: "/line-1 -> untuk mendapat data production tiap mesin di line cnc 1",
                        lineCnc2: "/line-2 -> untuk mendapat data production tiap mesin di line cnc 2",
                        lineCnc1: "/line-3 -> untuk mendapat data production tiap mesin di line cnc 3",
                    }
                }
            ]
        }
        else {
            data = null
        }
    }
    res.status(statusCode).json({
        payload: {
            status_code: statusCode,
            data: data[0],
            message: message,
        },
    });
};

module.exports = response;
