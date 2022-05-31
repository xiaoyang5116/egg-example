'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // 将 .ejs 的后缀改成 .html 的后缀。
  ejs:{
    enable:true,
    package:'egg-view-ejs'
  },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
