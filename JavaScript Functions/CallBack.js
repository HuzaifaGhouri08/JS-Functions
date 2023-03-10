// CallBack FuncTion
let html = () => {
  console.log('i am html');
};

let css = (lan) => {
  console.log('i am css');
  lan();
};

css(html);

// Another Example
let friend1 = (name1, callback) => {
  console.log(`Hellow Guys i'am ${name1} Assistant`);
  callback(`Alexa`);
};

let friend2 = (name2) => {
  console.log(`hey..! i'm ${name2}`);
};

friend1(`Google`, friend2);


// Multiples CBF
let help1 = (name1) => {
  console.log(`Hellow Guys i'am ${name1} Assistant`);
};

let help2 = (name2) => {
  console.log(`hey..! i'm ${name2}`);
};

let cbf = (name3, CallBack1, CallBack2) => {
  console.log(`well, This is me ${name3}`);
  CallBack1(`Google`);
  CallBack2(`Alexa`);
};
cbf(`Huzaifa`, help1, help2);