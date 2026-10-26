const Prototype = () => {
 class Room {
        id: number;
        name: string;
        capacity: number;
        price: number;

        constructor(id:number, name:string, capacity:number, price:number){
            this.id = id;
            this.name = name;
            this.capacity = capacity;
            this.price = price;
        }

        calculatePrice(night: number): number {
            return this.price * night;
        }
    };

 const room_1 = new Room(1, "room_1", 3, 30);
 const room_2 = new Room(2, "room_2", 4, 40);
 const room_3 = new Room(3, "room_3", 5, 50);

 const info = room_1.calculatePrice(3) + room_2.calculatePrice(4) + room_3.calculatePrice(5);
 console.log(info);


    return (
        <div>
            <h1>Prototype practice</h1>
        </div>
    )
}

export default Prototype;