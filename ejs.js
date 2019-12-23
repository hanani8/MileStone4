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
        return (new_obj);
    }

var i, j, k
var r=1
var n=7
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

var addToObject = function (obj, key, value, index,k) {

	// Create a temp object and index variable
	var temp = {};
	var i = 0;

   
	// Loop through the original object
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
         

			// If the indexes match, add the new item
			if (i === index && key && value) {
            delete obj[k]
				temp[key] = value;
            
			}

			// Add the current item in the loop to the temp obj
			temp[prop] = obj[prop];

			// Increase the count
			i++;

		}
	}

	// If no index, add to the end
	if (!index && key && value) {
		temp[key] = value;
	}

   console.log(temp);
  

};


y = shuffleProperties(x);
var keys = Object.keys( y );
 console.log(y);
 console.log(keys);
 



//Here X is being shuffled and being kept in 'y', and the keys of 'y' are being extracted, since Y is already shuffled
//the keys will also be shuffled, and when i take each individiual element of the keys array and put it inside 'x' object to get the value,
//I will get varied one,each single fuckin time.
//See....
//After some little experiment I concluded that x[keys[0]] = y[keys[0]]; where keys[0] is not equal to x.Card1;


// $("#result1").html(y[0]);
// var jumla = (y.slice(1,11))
// var dumla = (y.slice(11,21))
// $("#result2").html(juml  y = shuffle(x);a[0]);
// $("#result3").html(dumla[0]);





// for(x = 1; x < 58; x++){
//    console.log(`"Card${x}",`)
// }

// const cult = ["Card1",
// "Card2",
// "Card3",
// "Card4",
// "Card5",
// "Card6",
// "Card7",
// "Card8",
// "Card9",
// "Card10",
// "Card11",
// "Card12",
// "Card13",
// "Card14",
// "Card15",
// "Card16",
// "Card17",
// "Card18",
// "Card19",
// "Card20",
// "Card21",
// "Card22",
// "Card23",
// "Card24",
// "Card25",
// "Card26",
// "Card27",
// "Card28",
// "Card29",
// "Card30",
// "Card31",
// "Card32",
// "Card33",
// "Card34",
// "Card35",
// "Card36",
// "Card37",
// "Card38",
// "Card39",
// "Card40",
// "Card41",
// "Card42",
// "Card43",
// "Card44",
// "Card45",
// "Card46",
// "Card47",
// "Card48",
// "Card49",
// "Card50",
// "Card51",
// "Card52",
// "Card53",
// "Card54",
// "Card55",
// "Card56",
// "Card57"]
// for( i = 0; i < 9; i++){
// var lent = cult[Math.floor(Math.random() * cult.length)];
// console.log(lent);}
// I have been trying to do away with just using for loops and arrays, but it's cumbersome and not at all possible.
//I guess, I will have to use Object.Prototype






  



// var i, j, k
// var r=1
// var n=7
// var X = [];
// var res = '';
// res = "Card" + r + "="
// for (i = 1; i<= n+1; i++) {
//     res += " " + i
// }
// X.push(res)
// for (j=1; j<=n; j++)  {
//    r=r+1
//    res = "Card" + r + "=";
//    res += " 1";
//    for (k=1; k<=n; k++) {
//         res += " " + (n + n * (j-1) + k+1)
//    }
//    X.push(res)
// }
// for (i= 1; i<=n; i++) {
//    for (j=1; j<=n; j++) {
//       r=r+1
//       res = "Card" + r + "="
//       res += " " + (i+1) + " "
//       for (k=1; k<= n; k++) {
//         res += n + 2 + n * (k-1) + (((i-1) * (k-1) +j-1) % n) + " "
//       }
//       X.push(res)
//     }
// }

// console.log(X)

// function shuffle(array) {
//   var m = array.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }

//   return array
// }


//   </script>



