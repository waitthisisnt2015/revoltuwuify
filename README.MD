PASTE THIS INTO YOUR REVOLT CONSOLE



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://codeberg.org/waitthisisnt2015/UWUIFYREVOLTPLUGIN/raw/branch/main/script.js");
xhr.send("");
xhr.onload = function() {
    const uwuifyPlugin = new Function(xhr.response);
    const uwuifyPluginInstance = uwuifyPlugin();

    state.plugins.add({
        format: 1,
        version: "1.0.0",
        namespace: "waitthisisnt2015",
        id: "uwuify",
        entrypoint: xhr.response
    });

    window.location.reload();
};
