 ///------Chapter # 21-25----

 // -----Ques # 1
 var firstName = prompt("Enter Your First Name");
 var space = " ";
 var lastName = prompt("Enter Your Last Name");
 var fullName = firstName+space+lastName;
 document.write(fullName+"<br><br><br>")

// // -----Ques # 2
// var favMobile = prompt("Enter Your favorite Mobile Phone Name");
// document.write("My Favorite Mobile Phone is:"+" "+favMobile+"<br>")
// document.write("length of string is:"+" "+favMobile.length+"<br><br><br>")

// // -----Ques # 3
// var nationality = "Pakistani";
// document.write("String:" + " " + nationality + "<br>")
// document.write("Index Of 'n'is:" + " " + nationality.indexOf('n') + "<br><br><br>")

// // -----Ques # 4
// var greet = "Hello World"
// document.write("String:" + " " + greet + "<br>")
// document.write("Last Index of 'l' is:" + " " + greet.lastIndexOf("l") + "<br><br><br>")

// // -----Ques # 5
// document.write("String:" + " " + nationality + "<br>")
// document.write("Character At index 3:" + " " + nationality.charAt('3') + "<br><br><br>")

// // -----Ques # 6
// var firstName = prompt("Enter Your First name");
// var space = " ";
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(space).concat(lastName);
// document.write(fullName+"<br><br><br>")

// // -----Ques # 7
// var city1 = "Hyderabad";
// var city2 = "Islama";
// var replaceCity = city1.replace("Hydera", city2);
// document.write("City:" + " " + city1 + "<br>")
// document.write("After replacement:" + " " + replaceCity + "<br><br><br>")

// // -----Ques # 8
// var message = "Zain and Abdullah are best friends. They play cricket and football together";
// var replaceMsg = message.replace(/and/g, "&")
// document.write("Message:" + " " + message + "<br>")
// document.write("After replacement:" + " " + replaceMsg + "<br><br><br>")

// // -----Ques # 9
// var num = "472"
// var num1 = Number(num);
// document.write("Value:" + " " + num + "<br>")
// document.write("Type:" + " " + typeof (num) + "<br>")
// document.write("Value:" + " " + Number(num) + "<br>")
// document.write("Type:" + " " + typeof (num1) + "<br><br><br>")

// // -----Ques # 10
// var userInput = prompt("Enter Something We Change it to Upper Case"); 
// var userInput2 = userInput.toUpperCase();
// document.write("User input:"+" "+userInput+"<br>")
// document.write("Upper case:"+" "+userInput2+"<br><br><br>")

// // -----Ques # 11
// var userName = prompt("Enter Your Name OR Anything");
// var firstLet = userName.charAt(0);
// var firstCap = firstLet.toUpperCase();
// var remLet = userName.slice(1);
// var remLetSm = remLet.toLowerCase();
// var titleCase = firstCap + remLetSm;
// document.write("User Input:"+" "+userName+"<br>")
// document.write("Title Case:"+" "+titleCase+"<br><br><br>")

// // -----Ques # 12
// var num = 35.36;
// var chngStrng = num.toString();
// var replac = chngStrng.replace(".","");
// document.write("NUmber:"+num+"<br>")
// document.write("Result:"+replac+"<br>")

// // -----Ques # 13
// var userName = prompt("Enter Your Name: ");
// var message;
// var arr1=[];
// var arr2=[];

// for(var i=0;i<userName.length;i++)
// {
//     arr1[i]=userName.split("&nbsp;");
//     arr2[i]=userName.charCodeAt(i);
//     if(arr2[i]!=33||arr2[i]!=44||arr2[i]!=46||arr2[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr2[i]==33||arr2[i]==44||arr2[i]==46||arr2[i]==64)
//     {
//         alert("Please enter a valid userName");                                                                                                                   
//         userName=prompt("Enter your Name: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr1[i]=userName.split("&nbsp;");
//             arr2[i]=userName.charCodeAt(i);
//             if(arr2[i]!=33||arr2[i]!=44||arr2[i]!=46||arr2[i]!=64)
//             {
//                 break;
//             }
//         }
//     }

// }
// alert(message);

// // -----Ques # 14
// document.write("<h1>HM Bakery:</h1>")
// var bakeryItem = ["cakes","soft drinks","cookies","chips","patties"]
// var takeOrder = prompt("What do your want to buy").toLowerCase()
// var order = true;
// for(var i = 0; i<bakeryItem.length; i++){
//     if(takeOrder===bakeryItem[i]){
//         document.write(takeOrder + " is <strong>Available</strong> at index " + i + " is " + bakeryItem[i] + "<br>");
//         order= false
//     }
// }
// if(order === true){
//     document.write("We are Sorry " + takeOrder + " is <strong>Not Available</strong> in our bakkery" + "<br>");
// }

// // -----Ques # 15
// var userPass = prompt("Enter Your Password");
// var beginingWord = parseInt(userPass.charAt());
// // var flag = true;
// for(var i = 0; i<userPass.length; i++){
//     if(userPass[i]==beginingWord){
//         alert("password Should Not Start With Number")
//     }
// }
// if (userPass == "") {
//     alert("Please enter Password")
// } else if ((userPass.length < 6) || (userPass.length > 12)) {
//     alert("password must be b/w 6 to 12 character")
// }else if(userPass==NaN){
//     alert("Password Can't begin with  number")
// }else{
//     alert("welcome Dear..,!")
// }

// // -----Ques # 16
// var bu = "Karachi University";
// for(var i = 0;i<bu.length;i++ ){
//     document.write(bu[i]+"<br>")
// }

// // -----Ques # 17
// var user = "Pakistan";
// var userLastchar = user.charAt(7);
// document.write("<br><br>User Input: " + user);
// document.write("<br>Last Character of Input: " + userLastchar);

// // -----Ques # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var occurances = (text.toLowerCase().match(/the/g)).length;
// document.write("<br><br>Text: " + text);
// document.write("<br>There are " + occurances + " of the word 'the'");

//               ///// ------Chapter # 26-30----/////

// // ---Ques # 1
// var number = 3.45214;
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number:" + " " + number + "<br>")
// document.write("round off:" + " " + round + "<br>")
// document.write("Floor value:" + " " + floor + "<br>")
// document.write("ceil value:" + " " + ceil + "<br><br><br>")

// // ---Ques # 2
// var number1 = -2.673;
// var round1 = Math.round(number1);
// var floor1 = Math.floor(number1);
// var ceil1 = Math.ceil(number1);
// document.write("number:" + " " + number1 + "<br>")
// document.write("round off:" + " " + round1 + "<br>")
// document.write("Floor value:" + " " + floor1 + "<br>")
// document.write("ceil value:" + " " + ceil1 + "<br><br><br>")

// // ---Ques # 3
// var num = Number(prompt("Enter Number for Absolute"));
// var absolute =Math.abs(num);
// document.write("<br><br>The Absolute Value Of "+num +" is "+ absolute);

// // ---Ques # 4
// var ran = Math.floor(Math.random() * 6 + 1);
// var rand = Math.floor(Math.random() * 6 + 1);
// document.write("Random dice value:" + " " + ran + "<br>")
// document.write("Random dice value:" + " " + rand + "<br><br><br>")

// // ---Ques #5
// var toss = Math.floor(Math.random() * 2 + 1);
// // document.write(toss)
// if (toss == 1) {
//     document.write(toss + "<br>")
//     document.write("random coin value:" + " " + "heads" + "<br><br><br>")
// } else {
//     document.write(toss + "<br>")
//     document.write("random coin value:" + " " + "tails" + "<br><br><br>")
// }

// // ---Ques #6
// var randomNum = Math.floor(Math.random() * 100 + 1);
// document.write("random number betwenn 1 and 100:" + " " + randomNum + "<br><br><br>")

// // ---Ques #7
// var userWeight = prompt("Enter Your Weight in 'kgs'")
// var userWeight1 = userWeight.replace("kgs", "KIlograms")
// document.write("the Weight of user is"+" "+userWeight )

// // ---Ques #8
// var scrtNum = Math.floor(Math.random() * 10 + 1)
// var userNume = +prompt("Enter NUmber Between 1 and 10")
// if (scrtNum == userNume){
//     alert("Congratulations")
// }else{
//     alert("try Agein Boss.. the Number is"+" "+scrtNum)