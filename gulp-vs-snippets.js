var through = require('through2');
var PluginError = require('plugin-error');

var PLUGIN_NAME = 'gulp-example';

module.exports = function () {

    /**
   * @this {Transform}
   */
    var transform = function (file, encoding, callback) {
        var error = null;
        var output = "";

        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));
        } else if (file.isBuffer()) {
            var codeText = file.contents.toString();
            const separatedSnippet = codeText.replace(/"/g, '\\"').split(/[\r\n]+/);
            const newSnippet = separatedSnippet.map((line, index) => {
                return `"${line}"`;
            });

            file.contents = new Buffer(newSnippet.join(",\n"));
            this.push(file);
        }

        callback(error, null);
    };

    return through.obj(transform);
};