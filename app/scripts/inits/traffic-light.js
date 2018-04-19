function updateLight(color) {
    if (color === 'green') {
        return 'yellow';
    }

    if (color === 'yellow') {
        return 'red';
    }

    return 'green';
}

module.exports = updateLight;
