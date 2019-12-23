class Dobble{
    constructor(){
       
    }
  generateCard(){
      var r = 1;
      var n = 7;
      var i, j, k
      var x = {};
      var res = "";
      var first = [];
      res = "Card" + r + ":"
      for(i = 1; i<= n+1; i++) {
         first.push(i)
        }

         x["Card" + r] = first;

      for (j=1; j<=n; j++)  {
      var gunj = [];
      r=r+1
      res = "Card" + r + ":";
      for (k=1; k<=n; k++) {
        gunj.push( n + n * (j-1) + k+1)
        
         }
   
      var s = 1
     gunj.unshift(s)
   
          x["Card" + r] = gunj;
        }

     for (i= 1; i<=n; i++) {
        for (j=1; j<=n; j++) {
          var lunj = []
          r=r+1
          res = "Card" + r + ":"
           for (k=1; k<= n; k++) {
             lunj.push(n + 2 + n * (k-1) + (((i-1) * (k-1) +j-1) % n))
            }
        
        
        lunj.unshift(i+1)
             x["Card" +r] = lunj;
           }
        } 

    return x;

  }

  shuffleObject(obj){
        Array.prototype.shuffle = function(){
        for (var i = 0; i < this.length; i++){
            var a = this[i];
            var b = Math.floor(Math.random() * this.length);
            this[i] = this[b];
            this[b] = a;
        }
    }

         function getKeys(obj){
           var arr = new Array();
           for (var key in obj)
              arr.push(key);
              
            return arr;
        }

     function shuffleProperties(obj) {
        var new_obj = {};
        var keys = getKeys(obj);
        keys.shuffle();
        for (var key in keys){
            if (key == "shuffle") continue; // skip our prototype method
            new_obj[keys[key]] = obj[keys[key]];
        }
        return(new_obj);
     }
     
     var y = shuffleProperties(obj);
     return y;
     
     
  }

    GotchaKeys(obj){
       var kin = Object.keys(obj);
       return(kin)
    }


}

hanani1 = new Dobble();
var k = hanani1.generateCard(1,7);

var s = hanani1.shuffleObject(k);
console.log(s)
var x = hanani1.GotchaKeys(s);















