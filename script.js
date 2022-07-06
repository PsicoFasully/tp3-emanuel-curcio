class autos{

    constructor(id, marca, color, año, modelos ){

        this.id = id
        this.marca = marca
        this.color = color
        this.año = año
        this.modelos = modelos




    }



}

const autos1 = new autos(1, "audi", "blanco", "2015",["a1","a2","a3","a4"])
const autos2 = new autos(2, "mercedes", "negro", "2020", ["AMG","A","B","C"])
const autos3 = new autos(3, "bmw", "negro", "2016", ["serie 1","serie 2", "i3","i4"])
const autos4 = new autos(4, "subaru", "negro", "2022",["BRZ","Evoltis","Forester","Imperaza"])

const Autos = [autos1, autos2, autos3, autos4]
console.log(Autos.reverse())
