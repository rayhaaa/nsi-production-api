function emitSocket(type, result) {
    if (type == 'percen') {
        if (result.length == 0) {
            let data = {percen: 0.00001}
            return data
        }
        return result[0]
    }

    if (type == 'line') {
        if (result == 0) {
            let data = [
                {
                    mcn: null,
                    groupMsn: null,
                    itemCode: null,
                    planQty: null,
                    receiveQty: null,
                    percen: null,
                    wh: null,
                    next: null,
                }
            ]

            return data
        }

        return result
    }
}

module.exports = emitSocket
