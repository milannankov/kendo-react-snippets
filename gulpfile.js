var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var snippetFormatter = require('gulp-vscode-snippet-formatter');
var gulpOptions = {
    snippetSource: ["./snippets-source/**/*.js", "./snippets-source/**/*.jsx", "./snippets-source/**/*.snippet"],
    dest: "./snippets-source/"
}

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('generate-snippets', function () {
    return gulp.src(gulpOptions.snippetSource)
        .pipe(snippetFormatter())
        .pipe(gulp.dest('compiled'));
    // place code for your default task here
});

gulp.task('update-snippet-file', function () {
    // place code for your default task here
});

gulp.task('compile', function (callback) {
    gulpSequence(
        'generate-snippets',
        'update-snippet-file',
        function (error) {
            if (error) {
                console.log(error);
            } else {
                console.log('Compilations successful');
            }
            callback(error);
        });
});