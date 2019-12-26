const environments = {
  development: {
    mysql: {
      username: 'root',
      password: '',
      database: 'node_api_codelab',
      hostinfo: {
        host: '127.0.0.1',
        dialect: 'mysql'
      }
    }
  },

  test: {
    mysql: {
      username: 'root',
      password: '',
      database: 'node_api_codelab_test',
      hostinfo: {
        host: '127.0.0.1',
        dialect: 'mysql'
      }
    }
  },

  production: {

  }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environments[nodeEnv];
