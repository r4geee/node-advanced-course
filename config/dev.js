module.exports = {
  googleClientID:
    '964808011168-29vqsooppd769hk90kjbjm5gld0glssb.apps.googleusercontent.com',
  googleClientSecret: 'KnH-rZC23z4fr2CN4ISK4srN',
  // mongoURI: 'mongodb://alexei:2EmZUWvjmhcNxkbr@cluster0-shard-00-00-kejbt.mongodb.net:27017,cluster0-shard-00-01-kejbt.mongodb.net:27017,cluster0-shard-00-02-kejbt.mongodb.net:27017/node-advanced?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
  mongoURI: 'mongodb://testUser:xyz123@localhost:27017/node-advanced',
  cookieKey: '123123123',
  redisUrl: 'redis://127.0.0.1:6379',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
};
