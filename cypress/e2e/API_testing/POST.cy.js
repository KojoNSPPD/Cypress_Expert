/// <reference types="cypress" />

describe('Validate POST API', () => {

    it('learn POST API request', () => {
        cy.request({
            method: 'POST',
            url: 'https://dummy.restapiexample.com/api/v1/create',
            body: {
                name: "kojo Ankra",
                salary: "85000",
                age: "30",
                id: "12345"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.name).to.eq("kojo Ankra");
            expect(response.body.data.salary).to.eq("85000");
            expect(response.body.data.age).to.eq("30");
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'Successfully! Record has been added.');
            
            cy.log('```json\n' + JSON.stringify(response.body, null, 2) + '\n```');
            cy.log(JSON.stringify(response.body));
        });
    });
})