/**
 * Created by lyq on 2018/3/20.
 */
const { injectBabelPlugin  } = require('react-app-rewired');

module.exports = function override(config,env){
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};