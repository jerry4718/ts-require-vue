require(["require.config"], function(config) {
    require.config(config);
    console.log(1, arguments);
    require(["text!app/App.ts", "Vue"], function (template, vue) {
        console.log(template, vue);

    })
});