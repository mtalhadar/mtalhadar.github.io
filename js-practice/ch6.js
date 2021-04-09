let protoRabbit = {};
protoRabbit.type = '';
protoRabbit.speak = function speak(line) { console.log(" ${this.type} Rabbit says '${line}' ") };

protoRabbit.type = "kaala";

protoRabbit.speak("YEET");

let rabbit = {};
rabbit.speak = function(line) {
console.log(`The rabbit says '${line}'`);
};
rabbit.speak("YEET")