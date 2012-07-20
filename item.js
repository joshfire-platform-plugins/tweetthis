define([], function () {
  return function (config) {
    return {
      generate: function (options, callback) {
        // TODO: use template configuration parameters to adjust
        // the button settings (text and so on)
        var html = '<a href="https://twitter.com/share"' +
          ' class="twitter-share-button"';
        if (options.data && options.data.url) {
          html += ' data-url="' + options.data.url + '"';
        }
        if (options.data && options.data.name) {
          html += ' data-text="' + options.data.name + '"';
        }
        else {
          html += ' data-text="I thought I\'d share this"';
        }
        html += ' data-count="horizontal">Tweet</a>';
        return callback(null, html);
      },

      enhance: function (el, options) {
        // Force detection of the rendered link by Twitter script
        twttr.widgets.load();
      }
    };
  };
});