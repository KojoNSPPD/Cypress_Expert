/// <reference types="cypress" />

describe('Validate DELETE API', () => {

    it(('learn DelETE API request'), () => {
        cy.request(
            'DELETE',
            'https://dummy.restapiexample.com/api/v1/delete/2',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.not.exist;
            expect(response.body).to.have.property('status', 'success');
            expect(response.body).to.have.property('message', 'Successfully! Record has been deleted');

            cy.log('```json\n' + JSON.stringify(response.body, null, 2) + '\n```');
            cy.log(JSON.stringify(response.body));
        }
        );  
    })
})