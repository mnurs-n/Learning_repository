const Playground = () => {

// -------------------------------------1.1 Синтаксис классов

  // Синтаксис-1: базовый синтаксис с явным объявлением свойств. Рекомендуем к использованию (best-practice)
    
 class Room  {
    protected id: number;
    protected name: string;
    protected price: number;
    protected status: boolean = true;

    constructor(
        id: number,
        name: string,
        price: number,
        status: boolean
    ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
    }

 }

 class PremiumRoom extends Room {

    protected coeficient: number;

    constructor(
        id: number,
        name: string,
        price: number,
        status: boolean = true,
        coeficient: number
    ) {
        super(id, name, price, status);
        this.coeficient = coeficient;
    }

    public calculatePremiumPrice(nights: number){
        return this.price * nights * this.coeficient;
    }
 }

 const premiumRoom = new PremiumRoom(1, "Premium Room-1", 100, true, 1.2)
 
 console.log(premiumRoom)
 console.log(premiumRoom.calculatePremiumPrice(2))
 
 return(
    <div>
        <h1>Playground</h1>
    </div>
 )

}

export default Playground