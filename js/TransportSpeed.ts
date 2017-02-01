/// <reference path="Data.ts" />

class TransportSpeed {
    private data: Array<Data>;

    constructor(data: Array<Data>) {
        this.data = data;
    }

    display(): void {
        console.log(this.data[0].speed);
    }
}