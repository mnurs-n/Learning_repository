const Room = () => {

    class Room { // 1.1 Создали class Room
        id: number;
        name: string;
        capacity: number;
        pricePerNight: number;
        availability: boolean = true;

        constructor( // 1.2 Создали constructor для инициализации свойств класса
            id: number,
            name: string,
            capacity: number,
            pricePerNight: number
            ) 
            {
            this.id = id; // 1.3 Инициализировалли свойства класса
            this.name = name;
            this.capacity = capacity;
            this.pricePerNight = pricePerNight;
        }

        calculatePrice(nights: number):number { // 1.4 Создали метод рассчета стоимости, приниает значение из вне и выполняет логику рассчета возвращая результат
            if (nights <= 0) {
                throw new Error("Number of nights must be more than 0"); // 1.5 Добавили проверка на отрицательноее значение.
            }
            return this.pricePerNight * nights
        }

        checkAvailability(): boolean {
            return this.availability
        }
        
        };
    

    const room_1 = new Room(1, "Basic_1", 4, 40); // 1.6 Создали экземпляр класса Room cо своими значениями
    console.log(room_1)
    console.log(room_1.calculatePrice(3));
    console.log(room_1.checkAvailability());
    return(
        <div>
            <h1>Room</h1>
        </div>
    )

}

export default Room