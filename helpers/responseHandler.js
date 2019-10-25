const mappedErrors = {
    "1451": "Error al completar la operación. El registro cuenta con registros relacionados.",
    "default": "Error al completar la operación."
}

const mapErrorToMessage = 
    (errNo) => mappedErrors.hasOwnProperty(errNo) 
                ? mappedErrors[errNo] 
                : mappedErrors["default"];

const mapSuccessToMessage = 
    (result) => {
        if(result && result.constructor == Array)
            return result;
        return {
            "id": result.insertId,
            "message": result.message,
            "affectedRows": result.affectedRows
        }
    }

const ResponseHandler = {
    SQLServiceHandler(err, result) {
        return err 
            ? { error: mapErrorToMessage(err.errno) } 
            : { "data": mapSuccessToMessage(result) };
    }
}

module.exports = ResponseHandler;