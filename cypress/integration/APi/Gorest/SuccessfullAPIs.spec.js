
describe("Verifying the Api Request of Gorest Website", () => {

    it.skip("Verify the GET Request Api", function () {
        cy.request({
            methode: "GET",
            url: "https://gorest.co.in/public/v2/users/788",
            headers: {
                Authorization: "dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(200)
        })
    })
    it.skip("Verify the User is created",()=> {
        let email =`tenali.ramakrishna@15${Math.random()*6}ce.com`
        cy.request({
            methode: "POST",
            url:"https://gorest.co.in/public/v2/users",
            Body:
            {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers: {
                Authorization: " Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
            }
         })
        .then((res) => {
            cy.log(res)
            cy.log(res.body.length)
            expect(res.status).to.eql(200)
         //   expect(res.duration).to.be.lessThan(200)
            // expect(res.duration).to.be.lessThan(200)
        })
    })


    it.skip("Verify the User is Updated or Not", () => {
        // let email =`tenali.ramakrishna@15${Math.random()*6}ce.com`
        cy.request({
            methode: "PUT",
            url: "https://gorest.co.in/public/v2/comments",
            Body:
            {
                "name": "Shriram Peddana",
                "gender": "male",
                "email": "allasani.peddana@15ce.com",
                "status": "active"
            },
            headers: {
                Authorization: " Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.duration).to.be.lessThan(900)
            expect(res.status).to.be.eql(200)
        })
    })

        it("Verify the User is Delete", () => {

            cy.request({
                methode: "Delete",
                url: "https://gorest.co.in/public/v2/todos",

                headers: {
                    Authorization: " Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
                }
            }).then((res)=>{
                cy.log(res)
            })


        })

})
