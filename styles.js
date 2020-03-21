const ANSI_8_COLORS = [
    {
        name: 'Black',
        code: 30
    },
    {
        name: 'Red',
        code: 31
    },
    {
        name: 'Green',
        code: 32
    },
    {
        name: 'Yellow',
        code: 33
    },
    {
        name: 'Blue',
        code: 34
    },
    {
        name: 'Magenta',
        code: 35
    },
    {
        name: 'Cyan',
        code: 36
    },
    {
        name: 'White',
        code: 37
    }
];

let styles = {
    esc: '\u001b[',
    reset: '0m',
    bold: '1m',
    dim: '2m',
    italic: '3m',
    underline: '4m',
    blink: '5m',
    inverse: '7m',
    invisible: '8m',
    strikethrough: '9m'
};

for (let i = 0; i < ANSI_8_COLORS.length; i = i + 1) {
    styles[ANSI_8_COLORS[i].name.toLowerCase()] = ANSI_8_COLORS[i].code + 'm';
    styles['bright' + ANSI_8_COLORS[i].name] = ANSI_8_COLORS[i].code + ';1m';
    styles['bg' + ANSI_8_COLORS[i].name] = ANSI_8_COLORS[i].code + 10 + 'm';
    styles['bgBright' + ANSI_8_COLORS[i].name] = ANSI_8_COLORS[i].code + 10 + ';1m';
}

module.exports = styles;