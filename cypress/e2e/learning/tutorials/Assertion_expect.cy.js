/// <reference types="cypress" />

context('Learn BDD Explicit Assertions', () => {

    it('Validate Complex Data using expect', function(){
        cy.visit('www.google.com')

        //Simple String Verification
        let PageName = 'Google Homepage'
        expect(PageName).to.not.equal('Google Search')
        expect(PageName).to.equal('Google Homepage')
        expect(PageName).to.be.a('string')
        expect(PageName).to.have.length.of.at.most(15)

        //Validaiing Objects
        let Person = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        }

        expect(Person).to.have.property('name').and.to.equal('John Doe')
        expect(Person).to.deep.equal({
            name: 'John Doe',
            age: 30,
            city: 'New York'
        })
        expect(Person).to.have.keys('name', 'age', 'city')
        expect(Person).to.have.property('city','New York').and.to.be.a('string')
        expect(Person).to.have.property('age').and.to.be.a('number')
        expect(Person).to.have.property('age').and.to.be.greaterThan(20)

        //Validating Arrays
        let Fruits = ['Apple', 'Banana', 'Cherry']

        expect(Fruits).to.include('Banana')
        expect(Fruits).to.have.ordered.members(['Apple', 'Banana', 'Cherry'])
        expect(Fruits).to.include('Apple').and.to.have.length(3)

    })
})