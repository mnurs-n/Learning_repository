const Room = () => {

    class Room { // 1.1 Создали class Room
        id: number;
        name: string;
        capacity: number;
        pricePerNight: number;
        isAvailable: boolean = true;

        constructor( // 1.2 Создали constructor для инициализации свойств класса
            id: number,
            name: string,
            capacity: number,
            pricePerNight: number,
            isAvailable: boolean
            ) 
            {
            this.id = id; // 1.3 Инициализировалли свойства класса
            this.name = name;
            this.capacity = capacity;
            this.pricePerNight = pricePerNight;
            this.isAvailable = isAvailable;
        }

        calculatePrice(nights: number):number { // 1.4 Создали метод рассчета стоимости, приниает значение из вне и выполняет логику рассчета возвращая результат
            if (nights <= 0) {
                throw new Error("Number of nights must be more than 0"); // 1.5 Добавили проверка на отрицательноее значение.
            }
            return this.pricePerNight * nights
        }

        checkAvailability(): boolean {
            return this.isAvailable
        }
        
        };
    

    const room_1 = new Room(1, "Basic_1", 4, 40, true); // 1.6 Создали экземпляр класса Room cо своими значениями
    console.log(room_1)
    console.log(room_1.calculatePrice(3));
    console.log(room_1.checkAvailability());

    // -------------------------------------Day-2-------------------------------------------------

    class HalfRoom extends Room {
    // Дополнительные свойства
    beds: number;
    
    // Constructor
    constructor(
        id:  number,
        name: string,
        capacity: number,
        pricePerNight: number,
        isAvailable: boolean,
        beds: number,
    ){
       // Вызов конструктора базового класса (Room)
       super(id, name, capacity, pricePerNight, isAvailable);
       // Вызов конструктора производного класса
       this.beds = beds
    }
    
    // Переопределение метода CalculatePrice
    CalculatePrice(nights: number) {
        return this.beds * nights;
    }
    
    // Доп метод специфичный для HalfRoom
    canAccomodate(people: number): boolean {
        return people > 0
            && people <= this.beds
            && people <= this.capacity;
    // Вернет true, если в комнате достаточно кроватей и вмстимость позволяет
    }
 }
     const halfRoom_1 = new HalfRoom(2, "HalfRoom_1", 2, 20, true, 2);
     console.log(halfRoom_1);
     console.log(halfRoom_1.canAccomodate(2));
    return(
        <div>
            <h1>Room</h1>
        </div>
    )

}

export default Room