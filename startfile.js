/**
 * @fileoverview Injects Twitter's "tweet button" script at the end of the
 * application's start file
 */
define([], function () {
  return function (runtime, params, callback) {
    params.content = runtime.scriptAppend(params.content,
      '<script id="twitter-wjs" src="http://platform.twitter.com/widgets.js">' +
      '</script>');
    return callback();
  };
});