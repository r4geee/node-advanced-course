const AWS = require('aws-sdk')
const uuid = require('uuid/v1')
const keys = require('../config/keys')
const requireLogin = require('../middlewares/requireLogin')

const s3 = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: 'eu-north-1',
})

module.exports = app => {
    app.get('/api/upload', requireLogin, (req, res) => {
        const Key = `${req.user.id}/${uuid()}.jpeg`
        s3.getSignedUrl('putObject', {
            Bucket: 'my-blog-bucket-node-advanced-444',
            ContentType: 'image/jpeg',
            Key,
        }, (err, url) => res.send({key: Key, url}))
    })
}
