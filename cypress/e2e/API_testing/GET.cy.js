/// <reference types="cypress" />

describe('Validate GET API', () => 
    {
    it.only('learn GET API request', () => 
    {
       cy.request('GET','https://dummy.restapiexample.com/api/v1/employee/3')
       .then((response) => {
           expect(response.status).to.eq(200);
           expect(response.body.data.id).to.eq(1);
           expect(response.body.data.employee_name).to.eq("Tiger Nixon");
           expect(response.body.data.employee_salary).to.eq(320800);
           expect(response.body.data.employee_age).to.eq(61);
           expect(response.body.data.profile_image).to.eq("");
           expect(response.body).to.have.property('status', 'success');
           expect(response.body).to.have.property('message', 'Successfully! Record has been fetched.');
           
            cy.log('```json\n' + JSON.stringify(response.body, null, 2) + '\n```');
           cy.log(JSON.stringify(response.body));
       });

    });

    it('learn GET API request from chatgpt', () => 
    {
        cy.request({
            method: 'GET',
            url: 'https://dummy.restapiexample.com/api/v1/employees',
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            
        });
       
   });

});