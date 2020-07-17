const path = require('path');
const fs = require('fs');
const mkdirSync = require('../utils/mkdir');

const srcPath = path.join(__dirname, '../../src/app');

const args = process.argv.slice(2);

console.log(args);

const params = args.filter(a => a.indexOf('=') > -1)
    .reduce((m, p) => {
        let [k, v] = p.split('=', 2);
        m[k] = v;
        return m;
    }, {});

const pagePath = path.join(srcPath, params.path || 'pages');

args.filter(a => a.indexOf('=') < 0)
    .forEach(dir => {
        const fileName = dir.split(/\//g).pop();

        const fileDir = path.join(pagePath, dir);

        mkdirSync(fileDir);

        const jsFilePath = path.join(fileDir, `${fileName}.ts`);
        const htmlFilePath = path.join(fileDir, `${fileName}.html`);
        const cssFilePath = path.join(fileDir, `${fileName}.css`);

        // 兼容windows的路径
        const jsFileRelative = path.relative(srcPath, jsFilePath).replace(/\\/g, '\/');
        const htmlFileRelative = path.relative(fileDir, htmlFilePath).replace(/\\/g, '\/');
        const cssFileRelative = path.relative(fileDir, cssFilePath).replace(/\\/g, '\/');

        const className = fileName.replace(/^./, t => t.toUpperCase()).replace(/[-_]./g, t => t.split('').pop().toUpperCase())
        const componentName = dir.replace(/[\/A-Z]/g, t => ['-', t.replace('/', '').toLowerCase()].join(''))

        console.log({
            path: fileDir,
            name: fileName,
            class: className,
            js: jsFileRelative,
            css: cssFileRelative,
            html: htmlFileRelative,
        });

        fs.writeFileSync(jsFilePath, `
import Vue from 'vue';
import { Component } from "vue-property-decorator";
/// @ts-ignore
import template = require("text!./${htmlFileRelative}");
/* import "css!./${cssFileRelative}"; */

@Component({
    name: '${className}',
    template: template
})
export default class ${className} extends Vue {
}
`.trim());

        fs.writeFileSync(htmlFilePath, `<div>this page is ${dir}</div>`.trim());

        fs.writeFileSync(cssFilePath, ``.trim());

    });
console.log();
