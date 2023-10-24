if (typeof uwuifyPlugin === "undefined") {
    const uwuifyPlugin = {
        onMessage: (message) => {
            if (message.content) {
                message.content = message.content
                    .replace(/(?:R|L)/g, 'W')
                    .replace(/th/g, 'f')
                    .replace(/TH/g, 'F')
                    .replace(/you/g, 'u')
                    .replace(/You/g, 'U')
                    .replace(/ove/g, 'uv')
                    .replace(/s/g, 'sh')
                    .replace(/S/g, 'Sh')
                    .replace(/\./g, ' uwu.')
                    .replace(/!/g, ' uwu!')
                    .replace(/\?/g, ' uwu?');
            }
            return message;
        }
    };

    window.revoltPlugins = window.revoltPlugins || [];
    window.revoltPlugins.push(uwuifyPlugin);
    console.log('uwuifyPlugin has been loaded.');
} else {
    console.log('uwuifyPlugin is already loaded. Avoiding redeclaration.');
}
