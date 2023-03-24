class Language {
    constructor(name, alphabet, country ){
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }
    get_info(){
        console.log(`Язык: ${this.name} , Алфавит: ${this.alphabet} , Страна, в которой говорят на этом языке: ${this.country}`);
    }
}


const Language_1 = new Language('Немецкий ', 'Латинский ', 'Германия, Швейцария, Австрия')
const Language_2 = new Language('Японский', 'Кандзи', 'Япония')

console.log(Language_1.name, Language_1.alphabet, Language_1.country);

Language_2.get_info();
Language_1.get_info();