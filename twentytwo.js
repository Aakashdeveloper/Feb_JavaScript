////Call Apply///

var person = {
    fullName: function(){

        return this.firstname+"_"+this.lastname
    }
}

var john ={
    firstname:'John',
    lastname:'eva'
}

person.fullName.call(john)


function add(a,b){
    return a+b
}

add(1,2)