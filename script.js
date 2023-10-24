function textToUwu(inputText, pluginManifest) {
    if (pluginManifest && pluginManifest.entrypoint) {
        // Use the provided plugin's entrypoint to transform the text
        const transformFunction = new Function('text', pluginManifest.entrypoint);
        const transformedText = transformFunction(inputText);
        return transformedText;
    } else {
        // Fallback to the default transformation
        let text = inputText;
        text = text.replace(/(?:r|l)/g, 'w');
        text = text.replace(/(?:R|L)/g, 'W');
        text = text.replace(/th/g, 'f');
        text = text.replace(/TH/g, 'F');
        text = text.replace(/you/g, 'u');
        text = text.replace(/You/g, 'U');
        text = text.replace(/ove/g, 'uv');
        text = text.replace(/s/g, 'sh');
        text = text.replace(/S/g, 'Sh');
        text = text.replace(/\./g, ' uwu.');
        text = text.replace(/!/g, ' uwu!');
        text = text.replace(/\?/g, ' uwu?');
        return text;
    }
}

// Example usage with a plugin:
const inputText = "Hello there, how are you doing?";
const plugin = {
    entrypoint: `(text) => {
        return text.replace(/are/g, 'r');
    }`
};

const uwuText = textToUwu(inputText, plugin);
console.log(uwuText);
