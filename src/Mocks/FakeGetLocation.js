const fakes = [
    {
        lat: 0.1,
        lng: 0.1,
    },
    {
        lat: 0.1,
        lng: 0.1,
    },
    {
        lat: 0.1,
        lng: 0.1,
    },
    {
        lat: 0.1,
        lng: 0.1,
    },
];

export default function LocationMock () {
    if(!this.index) {
        this.index = 0;
    }
    else{
        this.index++;
    }

    return fakes[this.index];
};