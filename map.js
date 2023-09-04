const map = new Map()

map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', "France")

//ya unice value store karta hai ek hi baar ek value ko lega 

// console.log(map);

const myObject = {

    js : "javascript",
    cpp : "c++ code using",
    rb : "ruby code using"

}
 for (const key in myObject) {
    // console.log(`${key}=${myObject[key]}`);
   
 }



 const coding = ["ruby", "java", "python", "javascript", "cpp"]

 coding.forEach ( (item) => {
    // console.log(item);
 })

//  const mynumers =[1,2,3,4,5,6,7,8,9,10]

//  const newnums= mynumers.map( (num) => num + 10)
//  console.log(newnums);

const supping= [

   {
      airebareds : "noise ",
      price : 999
   },
   {
      laptap: "lanavo",
      price : 450000
   },

   {
     copy : "hande book",
     price: 50
   }
]

const online = supping.reduce((acc, item) => acc + item.price, 0)

console.log(online);
