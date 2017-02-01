/// <reference path="JsonParser.ts" />
/// <reference path="TransportSpeed.ts" />
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var jsonParser = new JsonParser('/resources/data.json');
        jsonParser.parseData(function () {
            var data = jsonParser.getData();
            console.log(data);
        });
        return 0;
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=Startup.js.map