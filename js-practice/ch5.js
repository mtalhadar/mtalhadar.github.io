const { every } = require('./scripts.js');
const SCRIPTS = require('./scripts.js');

require('./scripts.js'); // import array from another file


// flattening an array
let arrays = [[1, 2, 3], [4, 5], [6]];

// func binding that concats dimensions of array as 1
let bind = (flat, current) => {
  return flat.concat(current);
}

// call it
//console.log(arrays.reduce(bind));

// MY OWN LOOP BRØTHER
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

//loop(10,i=> i>=0,u=>u-1,b=>console.log(b));

// my every method

// using for loop
function everyone(test, array) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

//using some()
function everytwo(test, array) {
  let mask = array.some(test);

  let bool = mask.indexOf(false);

  if (bool != 1) return false;

  return true;
}

// recognizing text

// Returns the script a character code belongs to
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
}
// returns an array of objects of type {script, }
// function countByScript(string){
//   let counts=[];
//   let script={};
//   let known=0;
//   // interate over your string
//   for(let char of string){
//     // get the script of character code
//     script=characterScript(char.codePointAt());

//     // put the script in array and increment count
//     known=counts.indexOf(s=>s.name==script.name)

//     // if record didnt already exist
//     if(known==-1){
//       counts.push({name:s.name, count:1});
//     }
//     // if record already exists
//     else{
//       count[known].count++;
//     }
//   }

//   return counts;
// }

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// get counts by group
function textScripts(text) {
  // get scripts of text and their counts
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt());
    return script ? script.name : "none";
  });

  // filter out scripts name
  scripts = scripts.filter(({ name }) => name != "none");

  // get total of scripts counts
  let total = scripts.reduce((n, { count }) => n + count, 0);

  // replace all coutns by (count/total)*100
  for (let record of scripts) {
    record.count = Math.round((record.count / total) * 100);
  }

  return scripts;
}

function textDominantDirection(text) {
  let directions = countBy(text,
    char => {
      let script = characterScript(char.codePointAt());
      return script ? script.direction : "none";
    });

  directions = directions.filter(({ name }) => name != "none");

  let total = directions.reduce((n, { count }) => n + count, 0);

  for (let record of directions) {
    record.count = Math.round((record.count / total) * 100);
  }

  return directions;

}
let text=' ᠽ‍ над дээр ир би чиний ээжийг зөндөө шүү дээ میرے پاس او میرے پاس آؤ میں تمہاری ماں کو بھاڑ میں دوں گا because your mum is gae';
console.log(textDominantDirection(text));
console.log(textScripts(text));