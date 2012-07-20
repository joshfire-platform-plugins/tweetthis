define([], function () {
  return function (config) {
    return {
      generate: function (options, callback) {
        // TODO: The problem here is that the script should be included once
        // and called each time an item is rendered. Right now, the script
        // returned by Twitter runs only once.
        var html = '<a href="https://twitter.com/share" class="twitter-share-button"' +
          (options.data && options.data.url ? ' data-url="' + options.data.url + '"' : '') +
          ' data-count="horizontal"' +
          ' data-text="Wow">Tweet</a>' +
          '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>';
        return callback(null, html);
      }
    };
  };
});