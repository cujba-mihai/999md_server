const log =
  process.env.ENV_NAME !== 'development'
    ? console.log
    : function () {
        return;
      };

export default log;
