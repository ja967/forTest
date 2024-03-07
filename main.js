const speak = () => {
    console.log('Hello, I am a robot!');
}

speak();

const calc = (grades,factor)  => {
    let total = 0;
    for(let i=0 ;i< grades.length ; i++){
        total += grades[i] * factor;
    }
    return total;
};

console.log(calc([10,20,30],2)); 
