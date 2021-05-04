const path = require('path')

// default config that is overridden by the Lambda event
module.exports = {
    S3_REGION: 'us-east-1',
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-11.6'),
    // maximum time allowed to connect to postgres before a timeout occurs
    PGCONNECT_TIMEOUT: 900,
    USE_IAM_AUTH: false,
    PGDUMP_ARGS: ["--no-acl", "--no-owner"]
}
