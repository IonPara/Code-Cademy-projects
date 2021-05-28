const _ = {
    clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
     },
     
     inRange(number, start, end){
       if( end === undefined){
        end = start
        start = 0
      }
      if(start > end) {
        const temp = end
        end = start
        start = temp
         }
         const isInRange = start <= number && number < end
         return isInRange;
        },
        words(str){
          const string = str.split(' ');
         return  string;
          },
    
        pad(string, n){
          if(string.length >= n) {
            return string;
          };
         
          let frontPad = Math.floor ((n - string.length)/2);
          let endPad = n - (string.length + frontPad)
          let str = ' ';
          let paddedString = str.repeat(frontPad) + string + str.repeat(endPad);
        return paddedString;
        },
        has(object, key){
          const hasValue = object[key];
          if(hasValue != undefined){
            return true;
          } else {
           return false;
            }
            return hasValue;
        },
    
      invert (object) {
        let invertedObject = {};
        for(let key in object){
          const originalValue = object[key];
          invertedObject[originalValue] = key;
        }
      return invertedObject;
    },
    findKey(object,funct){
      for (let key in object){
        let value = object[key];
        let predicateReturnValue = funct(value);
        if (predicateReturnValue) return key;
      } ;
        
        return undefined;
    },
      drop(array, number) {
        
        if (number===undefined) {
          number = 1; 
          } 
        let droppedArray = array.slice(number);
        return droppedArray;
      },
      dropWhile(array, predicate){
    
            const dropNumber = array.findIndex((element,index)=>{
           return !predicate(element, index, array)
            });
            const droppedArray = this.drop(array,dropNumber);
            return droppedArray;
    
        },
    chunk(array, s){
      if(s === undefined) { 
        s = 1;
      }
      let arrayChunks = [];
      for(let i = 0; i < array.length ; i += s){
        let arrayChunk = array.slice(i, i + s);
      arrayChunks.push(arrayChunk);
      }
      return arrayChunks
    }
    };
