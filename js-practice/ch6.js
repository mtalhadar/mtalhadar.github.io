class Rabbit{
    constructor(type){
        this.type=type;
    }

    speak(line){
        console.log(`the ${this.type} rabbit says "${line}"`);
    }
}

killerRabbit=new Rabbit("nigga");
killerRabbit.speak("wassup foo");

killerRabbit.gayness="alot";