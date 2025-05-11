/// <reference types="cypress" />   

describe('Validate complex data using assert', () => {

    it('Validate Complex Data using assert', function(){
   // cy.visit('www.google.com')

    //Assertion Strings

    let firstname = 'Kojo'
    let lastname = 'Agyeman'
    
    assert .equal(firstname,'Kojo')
    assert.include(firstname, 'Ko', 'First name is Kojo')
    assert.equal(lastname, 'Agyeman', 'Last name is Agyeman')
    assert.typeOf(firstname, 'string', 'First name is a string')
    assert.notTypeOf(firstname, 'integer', 'First name is not a number')


    //Assertion Objects

    let person = {
        name: 'Kojo',
        age: 30,
        country: 'Ghana',
        city: 'Accra'           
    }
    assert.property(person, 'name', 'Person has a name property') 
    assert.propertyVal(person, 'name', 'Kojo', 'Person name is Kojo') 
    assert.isObject(person, 'Person is an object')
    assert.deepPropertyVal(person,'country', 'Ghana')

    //Assertion Arrays

    let fruits = ['Apple', 'Banana', 'Cherry']
    assert.isArray(fruits, 'Fruits is an array')
    assert.include(fruits, 'Banana', 'Fruits include Banana')
    assert.lengthOf(fruits, 3, 'Fruits array has a length of 3')
    assert.deepEqual(fruits, ['Apple', 'Banana', 'Cherry'], 'Fruits array is equal to the expected array')
    assert.includeMembers(fruits, ['Apple', 'Banana'], 'Fruits array includes Apple and Banana')
    assert.notInclude(fruits, 'Orange', 'Fruits array does not include Orange')
    assert.isNotEmpty(fruits, 'Fruits array is not empty')
    assert.isNotOk(fruits.length === 0, 'Fruits array is not empty')
    assert.isOk(fruits.length > 0, 'Fruits array is not empty')
    assert.isAbove(fruits.length, 2, 'Fruits array has more than 2 elements')
    assert.isAtLeast(fruits.length, 3, 'Fruits array has at least 3 elements')
    assert.isAtMost(fruits.length, 4, 'Fruits array has at most 4 elements')
    assert.isBelow(fruits.length, 5, 'Fruits array has less than 5 elements')
    assert.isNotArray(person, 'Person is not an array')
    assert.isNotObject(fruits, 'Fruits is not an object')

    })
})