const cup = {
    name : "a cup of coffee",
    color : '#fff',
    pattern : null,
    handle : true,
    temperature : "hot",
    contains : {
        coffee : 80,
        almondMilk : 20,
    },

    contains : function (containsCoffee, containsAlmondMilk) {
        this.contains.coffee = containsCoffee;
        this.contains.almondMilk = containsAlmondMilk;
    },
};

console
