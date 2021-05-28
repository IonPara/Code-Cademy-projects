
 const dnaBases = ['A', 'T', 'C', 'G']

// Returns a random DNA base
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4 )] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand
};

const pAequorFactor = (num , dnaArray) => {
   return{
    specimenNum: num,
    dna: dnaArray,
     mutate(){
       arr = this.dna;
    const i = Math.floor(Math.random()*arr.length);
 const oldBase = arr[i];
 const possBases = dnaBases.filter(base => oldBase !== base);
 const newBase = possBases[Math.floor(Math.random() * possBases.length)];
      arr[i] = newBase;
      return arr
      },
      compareDNA(otherPAequor){
        let count = 0;
        for(i=0 ; i< otherPAequor.length; i++){
        if(this.dna[i] === otherPAequor.dna[i] ) count += 1;
        }
        console.log(`Specimen ${this.specimenNum} and Specimen ${otherPAequor.specimenNum} have ${(count * 100)/this.dna.length} % DNA in common.`)
      },
      willLikelySurvive(){
        let countBase =  this.dna.filter(function(value){
    return value === 'C';
}).length;
      let countBase2 =  this.dna.filter(function(value){
    return value === 'G';
}).length;
        if(countBase * 100/this.dna.length >= 60 || countBase2 * 100/this.dna.length >= 60 || (countBase + countBase2)* 100 /this.dna.length >=60 ){
          return true
        }
          return false
     },
  }  
};

let instances = [];
for(i=0; instances.length < 30; i++){
  let template = pAequorFactor(i,mockUpStrand());
  if(template.willLikelySurvive() === true){
    instances.push(template)
  };
  
};




