class Form{
  constructor(name, address){
    this.name = name ;
    this.address = address;
    console.info(`Hello my name is ${this.name} and i live in ${address}`);
  }
}

const a = new Form('Ucok', 'PLG');
console.info(a);