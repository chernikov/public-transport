/// <reference path="Data.ts" />
var JsonParser = (function () {
    function JsonParser(link) {
        this.link = link;
        this.link = link;
        this.data = [];
    }
    JsonParser.prototype.getData = function () {
        return this.data;
    };
    JsonParser.prototype.parseData = function (callback) {
        var self = this;
        $.get(this.link).done(function (rsp) {
            var response = rsp.data;
            for (var i = 0; i < response.length; i++) {
                for (var j = 0; j < response[i]['dvs'].length; j++) {
                    var dataElement = {
                        number: response[i]['dvs'][j].gNb,
                        speed: parseInt(response[i]['dvs'][j].spd)
                    };
                    self.data.push(dataElement);
                }
            }
            if (callback) {
                callback();
            }
        });
    };
    return JsonParser;
}());
//# sourceMappingURL=JsonParser.js.map