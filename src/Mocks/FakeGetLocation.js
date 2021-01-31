export default class LocationMock {
    constructor(){
        this.index = -1;
        // lat/long
        //  Security:       41.97646727821397, -87.90130965501601
        //  Subway:         41.97540730411563, -87.90320274316586
        //  AA lounge:      41.97481412314290, -87.90002753367936
        //  Smoothie King:  41.97759762749232, -87.90717628823200
        this.fakes = [
            {
                lat: 41.97646727821397,
                lng: -87.90130965501601,
            },
            {
                lat: 41.97540730411563,
                lng: -87.90320274316586,
            },
            {
                lat: 41.97481412314290,
                lng: -87.90002753367936,
            },
            {
                lat: 41.97759762749232,
                lng: -87.907176288232,
            },
        ];
    }

    getNext() {
        this.index++;
        console.log('mock returning');
        console.log(this.fakes[this.index]);
        return this.fakes[this.index];
    }
};