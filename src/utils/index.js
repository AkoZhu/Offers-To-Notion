const crypto = require("crypto");
const client = require("@services/client");
const logger = require("@utils/logger");

const hashString = (data) => {
    const hash = crypto.createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
};

const toDateString = (date) => {
    return date.format("YYYY-MM-DD");
};

module.exports = { hashString, toDateString };
