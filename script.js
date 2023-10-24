function uwuifyText(text) {
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

