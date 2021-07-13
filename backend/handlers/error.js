function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Bir Şeyler Yanlış Gitti :("
        }
    });
}

module.exports = errorHandler;