/// <reference path="Data.ts" />


class JsonParser 
{
    data: Array<Data>;

    constructor(private link : string) 
    {
        this.link = link;
        this.data = [];
    }

    getData(): Array<Data> 
    {
        return this.data;
    }

    parseData(callback : Function): void 
    {
        var self = this;
    
        $.get(this.link).done(function (rsp) 
        {
            var response = rsp.data;
            for (var i: number = 0; i < response.length; i++) {
                for (var j: number = 0; j < response[i]['dvs'].length; j++) {
                    var dataElement: Data = { 
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
    }
}