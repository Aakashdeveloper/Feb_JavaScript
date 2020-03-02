//literal notation
var country = {
    name:'India',
    capital:'Delhi',
    population:87876875
}
undefined
typeof(country)
"object"
country.name
"India"
country.population
87876875
country.population=10
10
country
{name: "India", capital: "Delhi", population: 10}
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 10, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "Hindi"}
country['capital']
"Delhi"
country['population']
undefined
country['language']
"Hindi"
country['language']="English"
"English"
country
{name: "India", capital: "Delhi", language: "English"}