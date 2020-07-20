const gulp = require("gulp");
const ts = require("gulp-typescript");
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const fs = require("fs");
const buildConfig = require("./build/config.js");
const mkdir = require("./build/utils/mkdir.js");
const maps = require("./build/map.project-deps.js");
const tsProject = ts.createProject("tsconfig.json");
const { parallel, series, watch } = gulp;

const config = {
    src: {
        ts: ["src/**/*.ts"],
        js: ["src/**/*.js","!src/@libs/**/*"],
        scss: ["src/**/*.scss","!src/@libs/**/*" ],
        resource: ["src/**","!src/**/*.@(js|ts|scss)"],
        lib: ["src/@libs/**/*.js"],
    }
};

// let depsJsTempDir = buildConfig.root('__deps_js_temp');

// gulp.task("copy:single", series(function (cb) {
//     cb()
// }))

// function copyDeps(copytype = 'dev') {

//     for (let libPath in maps) {
//         let source = maps[libPath];
//         if (copytype === "src") {
//             let src = source['src'];
//             let copy_to = path.join(depsJsTempDir, libPath)
//             mkdir(path.dirname(copy_to));
//             fs.copyFileSync(buildConfig.root("node_modules", src), copy_to);
//         } else if (copytype === "min") {
//             let src = source['src'];
//             let copy_to = path.join(depsJsTempDir, libPath)
//             mkdir(path.dirname(copy_to));
//             fs.copyFileSync(buildConfig.root("node_modules", src), copy_to);
//         }
//         let copyfrom = source[copytype] || source[level[point + 1]];
//         let copyto = path.join(support, libPath);
//         mkdir(path.dirname(copyto));
//         fs.copyFileSync(buildConfig.root("node_modules", copyfrom), copyto);
//     }
// }

// gulp.task("copy:deps", function (cb) {

// });

// gulp.task("copy:deps：min", series(function (cb) {

// }));

function distTs(doUglify = false) {
    return function () {
        let task = tsProject.src()
            .pipe(tsProject())
            .js;
        if (doUglify) {
            task = task.pipe(uglify());
        }
        return task.pipe(gulp.dest("dist/app"));
    }
}

gulp.task("dist:ts", distTs());
gulp.task("dist:ts:uglify", distTs(true));

function copyJs(doUglify = false) {
    return function () {
        let task = gulp.src(config.src.js);

        if (doUglify) {
            task = task.pipe(uglify())
        }
        return task.pipe(gulp.dest("dist"));
    }
}

gulp.task("copy:js", copyJs());
gulp.task("copy:js:uglify", copyJs(true));

function distScss(doUglify = false) {
    return function () {
        let task = gulp.src(config.src.scss)
            .pipe(sass());
        return task.pipe(gulp.dest("dist"));
    }
}

gulp.task("dist:scss", distScss());
gulp.task("dist:scss:uglify", distScss(true));

function copyLib(doMinify = false) {
    return function () {
        let task = gulp.src(config.src.lib);
        if (doMinify) {
            task = task.pipe(minify({
                ext: {
                    src: '-debug.js',
                    min: '.js',
                }
            }));
        }
        return task.pipe(gulp.dest("dist/@libs"));
    }
}

gulp.task("copy:lib", copyLib());
gulp.task("copy:lib:minify", copyLib(true));

gulp.task("copy:resources", function () {
    return gulp.src(config.src.resource)
        .pipe(gulp.dest("dist"));
})

gulp.task('dist:dev', parallel('dist:ts', 'dist:scss', 'copy:resources', 'copy:js', 'copy:lib'));

gulp.task('dist:pro', parallel('dist:ts:uglify', 'dist:scss:uglify', 'copy:resources', 'copy:js:uglify', "copy:lib:minify"));

gulp.task('watch', series('dist:dev', function () {
    watch(config.src.ts, parallel("dist:ts"));
    watch(config.src.js, parallel("copy:js"));
    watch(config.src.scss, parallel("dist:scss"))
    watch(config.src.resource, parallel('copy:resources'));
    watch(config.src.lib, parallel('copy:lib'));
}))