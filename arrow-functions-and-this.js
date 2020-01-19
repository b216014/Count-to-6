let foot = {
    kick: function () {
        this.yelp = "Ouch!";
        return setImmediate(() => {
            console.log(this.yelp);
        });
    }
};

foot.kick();