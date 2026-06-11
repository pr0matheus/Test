module.exports = {
    uiPort: process.env.PORT || 1880,
    credentialSecret: false,
    functionGlobalContext: {
    influxToken: process.env.INFLUX_TOKEN
}
}
