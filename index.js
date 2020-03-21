const styles = require('./styles');

function Art(message, style) {
    let template = '';

    if (!this.styles) {
        this.styles = [];
    }

    if (style) {
        this.styles.push(style);
    }

    if (message) {
        for (let i = 0; i < this.styles.length; i = i + 1) {
            template = template + styles.esc + this.styles[i];
        }

        return template + message + styles.esc + styles.reset;
    }

    return Art;
}

Object.keys(styles).forEach(function(key) {
    Object.defineProperty(Art, key, {
        get: function() {
            return Art.call(Art, null, styles[key]);
        }
    });
});

module.exports = Art;