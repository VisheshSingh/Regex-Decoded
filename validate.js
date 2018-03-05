// MAKING REGEX

/* var regex = /[a-z]/gi;
var regex2 = new RegExp(/[a-z]/, "ig"); */

////////////////////////////////////////////
const inputs = document.querySelectorAll('input');

// REGEX FOR TELEPHONE

const patterns = {
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([\w\.-]+)@([\w-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
} 

// VALIDATE FUNCTION
function validate(field, regex){
    //console.log(regex.test(field.value));
    if(regex.test(field.value)){
        field.className='valid';
    } else {
        field.className='invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})