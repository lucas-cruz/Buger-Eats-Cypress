import signup from '../pages/SignupPage'
import signupFactory from '../factories/signupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', ()=>{

    
    /*before(function(){
        cy.log('Tudo aqui é executado ANTES de TODOS os casos de testes')
    })

   /* beforeEach(function(){
        cy.log('Tudo aqui é executado ANTES de CADA caso de teste')
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })
    })*/

    after(function(){
        cy.log('Tudo aqui é executado DEPOIS de TODOS os casos de testes')
    })

    afterEach(function(){
        cy.log('Tudo aqui é executado DEPOIS de CADA caso de teste')
    })

    it('User should be deliver', function(){

        var deliver = signupFactory.deliver()

            
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('incorrect document', function(){

        var deliver = signupFactory.deliver()

        deliver.cpf = '123123123AA'
               
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const expectedMessage = 'Oops! CPF inválido'
        signup.alertMessageShouldBe(expectedMessage)

    })

    it('incorrect email', function(){

        var deliver = signupFactory.deliver()

        deliver.email = 'lucas.com.br'
               
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const expectedMessage = 'Oops! Email com formato inválido.'
        signup.alertMessageShouldBe(expectedMessage)

    })

    context('required fields', function(){

        const messages = [
            { field: 'name', output: 'É necessário informar o nome'},
            { field: 'cpf', output: 'É necessário informar o CPF'},
            { field: 'email', output: 'É necessário informar o email'},
            { field: 'postalcode', output: 'É necessário informar o CEP'},
            { field: 'street', output: 'É necessário informar o número do endereço'},
            { field: 'delivery_method', output: 'Selecione o método de entrega'},
            { field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })
    
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })


})