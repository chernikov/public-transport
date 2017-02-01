/// <reference path="JsonParser.ts" />
/// <reference path="TransportSpeed.ts" />

class Startup {
    public static main(): number 
    {
        var jsonParser: JsonParser = new JsonParser('/resources/data.json');
        jsonParser.parseData(function() {
            var data = jsonParser.getData();
            console.log(data);
        });
        return 0;
    }
}

Startup.main();