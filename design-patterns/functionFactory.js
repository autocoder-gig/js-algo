function makeGreeting(language) {
    return function(firstname, lastname){
        if(language === 'en') {
            console.log("Hello "+firstname+" "+lastname );
        } else if(language === 'es') {
            console.log("Hola "+firstname+" "+lastname );
        }  
    };
}

var greetEng = makeGreeting('en');
var greetSpa = makeGreeting('es');

greetEng('Elon', 'Musk');
greetSpa('Elon', 'Musk');

