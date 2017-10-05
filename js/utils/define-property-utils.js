function makeConfigurableProperty(obj, key) {
    return Object.defineProperty(obj, key, {
        configurable: true
    });
}

function printEnumerableInfo(o, key) {
    console.info("\n");
    // Detection
    console.info("Detection *****************************");
    console.info("***************************************");
    console.info("o.propertyIsEnumerable('" + key + "') = \n", o.propertyIsEnumerable(key));
    console.info("o.hasOwnProperty('" + key + "') = \n", o.hasOwnProperty(key));
    // Retrieval
    console.info("Retrieval *****************************");
    console.info("***************************************");
    console.info("Object.keys(o).includes('" + key + "') = \n", Object.keys(o).includes(key));
    console.info("Object.getOwnPropertyNames(o).includes('" + key + "') = \n", Object.getOwnPropertyNames(o).includes(key));
    console.info("\n");
}