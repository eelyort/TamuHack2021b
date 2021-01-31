export default class LocationMock {
    constructor(){
        this.index = -1;
        this.fakes = [
            {
                lat: 0.05,
                lng: 0.05,
            },
            {
                lat: 0.1,
                lng: 0.1,
            },
            {
                lat: 0.15,
                lng: 0.15,
            },
            {
                lat: 0.2,
                lng: 0.2,
            },
        ];
    }

    getNext() {
        this.index++;
        return this.fakes[this.index % this.fakes.length];
    }
};