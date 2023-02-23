module.exports = {
  apps: [
    {
      name: '999md-server',
      script: 'dist/src/main.js',
      watch: '.',
      ignore_watch: ['src/schema.gql'],
      env_production: {
        NODE_ENV: 'production',
        MONGODB_URL: 'mongodb://localhost/nest',
        DATABASE_NAME: 'NUME',
        DB_USERNAME: 'mihaicujba',
        DB_PASS: 'Ks3oD6EDEbFhJFMs',
        $PORT: 5000,
        JWT_SECRET: 'e5mZm8EnMUfqGNQCcSEtuARgaxkfaVSOu7flWhCl',
        CRYPTO_SECRET_KEY:
          'b6AVejHM7YoqilKyIdzRr4D38hTf1kXJx2Z5msaS9WwgFU0pOnvPGBLNQCcEtu',
        SERVER_URL: 'localhost:3000',
      },
      env_development: {
        NODE_ENV: 'development',
        MONGODB_URL: 'mongodb://localhost/nest',
        DATABASE_NAME: 'NUME',
        DB_USERNAME: 'danielr',
        DB_PASS: 'Sq4aRGNZnlRloofa',
        $PORT: 5000,
        JWT_SECRET: 'e5mZm8EnMUfqGNQCcSEtuARgaxkfaVSOu7flWhCl',
        CRYPTO_SECRET_KEY:
          'b6AVejHM7YoqilKyIdzRr4D38hTf1kXJx2Z5msaS9WwgFU0pOnvPGBLNQCcEtu',
        SERVER_URL: 'localhost:3000',
      },
    },
  ],
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'https://github.com/cujba-mihai/999md_client.git',
      path: 'dist',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
    development: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/develop',
      repo: 'https://github.com/cujba-mihai/999md_client.git',
      path: 'dist',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env development',
      'pre-setup': '',
    },
  },
};
