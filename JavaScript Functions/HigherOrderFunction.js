// Higher Order Function
let About = (Greet) => {
  return (Language, Mentor) => {
    console.log(`${Greet} guys i'am learning ${Language} from ${Mentor}`);
  };
};

// There are two ways to call the return function

// First Way
About(`Hellow`)(`JavaScript`, `Sir Husnain`);

// Second Way
let MySelf = About(`Hey`);
MySelf(`NodeJs`, `Exhodius`);
