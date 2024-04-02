               /*TASK 1
    Compare two JSON have the same properties without order? */

let obj1 = { names: "person 1", age: 5 };

let obj2 = { age: 5, names: "person 1" };

let same = true;

if (Object.keys(obj1).length === Object.keys(obj2).length) {
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      console.log(key, "Has The Same Value");
    } else {
      same = false;
      console.log(key, "Has Different Value");
    }
  }
} else {
  same = false;
  console.log("Length are different");
}
if (same) {
  console.log("Json is equal");
} else {
  console.log(" Json not equal");
}

                        /*TASk2
//2. Use the rest countries API URL  and display all the country flags*/


let val2 = new XMLHttpRequest();

val2.open("GET", "https://restcountries.com/v3.1/all", true);

val2.send();

val2.onload = function () {
  var data = val2.response;
  console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  for (let i=0; i < result.length; i = i + 1) {
    console.log(result[i].flags.png);
  }
}

                         /*TASK
     3.Use the same countries and print all countries 
      names ,regions , sub region, and populations*/

let val = new XMLHttpRequest();

val.open("GET", "https://restcountries.com/v3.1/all", true);

val.send();

val.onload = function () {
var data = val.response;
var result = JSON.parse(data);
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    console.log(
      "countryname: " + " " + result[i].name.common,
      "region: " + " " + result[i].region,
      "subregion: " + " " + result[i].subregion,
      "popullation: " + " " + result[i].population
    );
  }
};
