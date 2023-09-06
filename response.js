const response = (statusCode, data, message, type, res) => {
    if (data == 0) {
        if (type == 'percen') {
            data = [{percen: 0.00001}];
        } else {
            data = [
                {
                    mcn: null,
                    groupMsn: null,
                    itemCode: null,
                    planQty: null,
                    receiveQty: null,
                    percen: null,
                    wh: null,
                    next: null,
                },
            ];
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
