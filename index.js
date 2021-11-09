const { spy } = require("chai");


function receivesAFunction (callback){
    
    callback(spy);

}

function returnsANamedFunction () {
      return function () {
        
          
      } 
}



function returnsAnAnonymousFunction(){
    return  AnAnonymousFunction;
}
