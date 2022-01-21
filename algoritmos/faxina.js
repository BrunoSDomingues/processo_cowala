function removeEmpty(obj) {
    Object.keys(obj).forEach((key) => {
        if (obj[key] === null || obj[key] === undefined) delete obj[key];
    });

    return obj;
}

// console.log(removeEmpty({"fizz": "buzz", "foo": null, "bar": 42}))
