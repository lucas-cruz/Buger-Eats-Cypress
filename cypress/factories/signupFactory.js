var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {
    deliver : function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        
        var data = 
            {
                name: `${firstName} ${lastName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '11999999999',
                address:{
                    postalcode:'05782450',
                    street: 'Rua Pedrina Maria da Silva Valente',
                    number: '44',
                    details: 'Condominio horto ho ype',
                    district: 'Parque Munhoz',
                    city_state: 'São Paulo/SP'
    
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg.jpg'
        }
        return data
    }
}