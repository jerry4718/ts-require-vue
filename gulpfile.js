const gulp = require("gulp");
const ts = require("gulp-typescript");
let minify = require('gulp-minify');
let uglify = require('gulp-uglify');
const tsProject = ts.createProject("tsconfig.json");

gulp.task("dist:ts", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist/app"));
});

gulp.task("dist:ts:uglify", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js
        .pipe(uglify())
        .pipe(gulp.dest("dist/app"));
});

gulp.task("copy:resources", function () {
    return gulp.src([
        "src/**",
        "!src/**/*.js",
        "!src/**/*.ts"
    ])
        .pipe(gulp.dest("dist"));
})

gulp.task("copy:lib", function () {
    return gulp.src("src/@libs/**/*.js")
        .pipe(gulp.dest("dist/@libs"));
})

gulp.task("copy:lib:minify", function () {
    return gulp.src("src/@libs/**/*.js")
        .pipe(minify({ext: {min: ''}}))
        .pipe(gulp.dest("dist/@libs"));
})

gulp.task("copy:js", function () {
    return gulp.src([
        "src/**/*.js",
        "!src/@libs/**/*.js",
    ])
        .pipe(gulp.dest("dist"));
})

gulp.task("copy:js:uglify", function () {
    return gulp.src([
        "src/**/*.js",
        "!src/@libs/**/*.js",
    ])
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
})

gulp.task('dist:dev', gulp.series('dist:ts', 'copy:resources', 'copy:js', 'copy:lib'));

gulp.task('dist:pro', gulp.series('dist:ts:uglify', 'copy:resources', 'copy:js:uglify', "copy:lib:minify"));