let name = prompt('What is your name?').trim();
let surname = prompt ('What is your surname?').trim();
document.write(`
<ul style="list-style-type:none;">
   <li>Full name:  ${name}  ${surname}</li>
</ul>
`);
let email = prompt ('Write your email,please!').replace(/\s/g, '').toLowerCase();
if (email.startsWith('@')){
   document.write(`
      <ul style="list-style-type:none;">
         <li>Email:  not valid email <b>${email}</b> (symbol @ find in first place)</li>
      </ul>
   `)
} else if (email.endsWith('@')){
   document.write(`
      <ul style="list-style-type:none;">
         <li>Email:  not valid email <b>${email}</b> (symbol @ find in last place)</li>
      </ul>
   `)
}
else if (email.indexOf('@') > -1){
   document.write(`
      <ul style="list-style-type:none;">
         <li>Email:  ${email}</li>
      </ul>
   `)
}
 else{
   document.write(`
   <ul style="list-style-type:none;">
      <li>Email:  not valid email <b>${email}</b> (symbol @ not exist)</li>
   </ul>
`)
}


let yearBorn = prompt ('What is your date of birth?').replace(/\s/g, '');
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(yearBorn);

document.write (`
   <ul style="list-style-type:none;">
      <li>Age:  ${calculatedAge}</li>
   </ul>
`)



