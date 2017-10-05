'use strict';

/**
 * Key:Value pairs
 *  Keys can be a String or a Symbol
 *  Values can be anything
 */

null;

/**
 * There are two types of object properties which have certain attributes
 *  1. Data Property
 *  2. Accessor Property
 */

/****************
 * Configurable
 ****************/

var o = {};

/** Configurable **/

Object.defineProperty(o, "configurable", {
    configurable: true
});

// Because o.detection.enumerable is configurable, we can delete it or redefine it

delete o.configurable;

o = makeConfigurableProperty(o, "configurable");
o = makeConfigurableProperty(o, "configurable");

/** Not Configurable **/

Object.defineProperty(o, "notConfigurable", {
    configurable: false
});

// We can not delete or redefine this property

try {
    delete o.notConfigurable;
}
catch (e) {
    console.error(e);
}

try {
    o = makeConfigurableProperty(o, "notConfigurable");
}
catch (e) {
    console.error(e);
}

/****************
 * Writable
 ****************/

/** Writable **/

Object.defineProperty(o, "writable", {
    writable: true
});

o.writable = "newValue";

/** Not Writable **/

Object.defineProperty(o, "notWritable", {
    writable: false
});

try {
    o.notWritable = "newValue";
}
catch (e) {
    console.error(e);
}

/****************
 * Enumerable
 ****************/

/** Own-Object Enumerable **/

Object.defineProperty(o, "enumerable", {
    enumerable: true
});

printEnumerableInfo(o, "enumerable");

/** Own-Object Not Enumerable **/

Object.defineProperty(o, "notEnumerable", {
    enumerable: false
});

printEnumerableInfo(o, "notEnumerable");