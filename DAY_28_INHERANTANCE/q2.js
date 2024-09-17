class leptops{
    constructor(Lenovo,Dell,Asus,Infinix){
        this.Lenovo = Lenovo,
        this.Dell = Dell,   
        this.Asus = Asus,
        this.Infinix = Infinix
    }

    getValue(){
        console.log(`${this.Lenovo}'s Price is -${this.Asus}'s Price is - ${
            this.Infinix}'s Price is - ${this.Keybord}'s Price is - ${this.Mouse}'s Price is`);
    }
}

class accessories extends leptops{
    constructor(Lenovo,Asus,Infinix,Keybord,Mouse){
        super(Lenovo,Asus,Infinix,Keybord,Mouse)
        this.Keybord = Keybord,
        this.Mouse = Mouse
    }
}


let show = new accessories ("20,120/-", "50,000/-" , "65,025/-" ,"78,000/-" , "3,500/-" , "2,850/-")
// console.log(show);
show.getValue()