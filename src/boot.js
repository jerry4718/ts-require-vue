require(["require.config"], function(config) {
    require.config(config);
    console.log(1, arguments);
    require(["text!app/App.ts"], function (template) {
        console.log(template);

    })
});