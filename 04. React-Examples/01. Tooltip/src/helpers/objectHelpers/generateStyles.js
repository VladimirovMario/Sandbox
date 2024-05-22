function generateStyles(params) {
    const stylesObj = {};
    for (const key in params) {
        let value = params[key];
        if (key === 'positions') {
            // If the key is 'positions', assume it contains position properties
            for (const prop in value) {
                stylesObj[prop] = value[prop];
            }
        } else {
            // Otherwise, assign the value directly
            stylesObj[key] = value;
        }
    }
    return stylesObj;
}

export { generateStyles };
