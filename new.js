// let fastName = prompt("what is your name ?");
// let = partnerName = prompt("what is your partner name ?");


// //calculator

let Number = Math.random() * 100;
Number = Math.floor(Number) + 1;


// //showing result  


alert(fastName + " and  " + partnerName + " 's love percentage is : " + Number + "%")



// let tweet = prompt("Compose your tweet");

// // slice

// let slicdTweet = tweet.slice(0, 140);

// //alert
// alert(slicdTweet + "\nyour gorginal tweet size:" + tweet.length);

// console.log(slicdTweet.length);




// let userName = prompt("what is your name ?");

// let userNameUpperCase = userName.toUpperCase();
// let userNameLowerCase = userName.toLowerCase();


// let fastLater = userNameUpperCase.slice(0, 1);


// let totalLenght = userName.Lenght;


// alert("hello " + fastLater + userNameLowerCase.slice(1, totalLenght));

const name = "Ripon";
const age = 28;
const job = "content creator";
const city = "Netrokona";
let html;

// html = "<ul>" +
//     "<li> Name:" + name + "</li>" +
//     "<li> Name:" + age + "</li>" +
//     "<li> Name:" + job + "</li>" +
//     "<li> Name:" + city + "</li>" +
//     "</ul>"


html = `
<ul> 
 "<li> Name: ${name}</li>
<li> age: ${age} </li>
<li> job: ${job} </li>
<li> city:${city} </li>
<li> like:${10 + 100}k </li>
</ul>
`
document.body.innerHTML = html;