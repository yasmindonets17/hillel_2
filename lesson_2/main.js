let name = prompt('What is your name?').trim();
let surname = prompt ('What is your surname?').trim();


let email = prompt ('Write your email,please!').replace(/\s/g, '').toLowerCase();

//if(email.startsWith('@')) {
   //document.write(`not valid email <b>${email}</b> (symbol @ not exist)`);
//}
//if(email.startsWith('@')) {
   //document.write(`not valid email <b>${email}</b> (symbol @ not exist)`);
//}
//else if (email.endsWith ('@')){
//   document.write(`not valid email <b>${email}</b> (symbol @ find in first place)`);
//}

let dateofBirth = prompt ('What is your date of birth?').replace(/\s/g, '');

document.write(`
<ul>
   <li>Full name:  ${name}  ${surname}</li>
   <li>Email:  ${email}</li>
   <li>Age:</li>
</ul>
`);
