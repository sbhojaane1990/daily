///<reference types="Cypress"/>
describe('How to use Traversal Methode ', () => {
    it('Verification', () => {
        cy.visit('https://example.cypress.io/commands/traversal#')

        //        To get children of DOM elements, use the .children() command.

        cy.get('.traversal-breadcrumb')
            .children('.active')
            .should('contain', 'Data')


        //.closest()
        // To get the closest ancestor DOM element, use the .closest() command.
        cy.get('.traversal-badge')
            .closest('ul')
            .should('have.class', 'list-group')


        //.eq()
        //To get a DOM element at a specific index, use the .eq() command.
        cy.get('.traversal-list>li')
            .eq(1).should('contain', 'siamese')


        //.filter()
        //To get DOM elements that match a specific selector, use the .filter() command.
        cy.get('.traversal-nav>li')
            .filter('.active').should('contain', 'About')


        //.find()
        //To get descendant DOM elements of the selector, use the .find() command.
        cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)


        //.first()
        cy.get('.traversal-table td')
            .first().should('contain', '1')


        //.last()
        cy.get('.traversal-buttons .btn')
            .last().should('contain', 'Submit')


        //.next()
        cy.get('.traversal-ul')
            .contains('apples').next().should('contain', 'oranges')

        //.nextAll()
        cy.get('.traversal-next-all')
            .contains('oranges')
            .nextAll().should('have.length', 3)


        //.nextUntil()
        cy.get('#veggies')
            .nextUntil('#nuts').should('have.length', 3)

        //.not()

        cy.get('.traversal-disabled .btn')
            .not('[disabled]').should('not.contain', 'Disabled')


        //.parent()
        cy.get('.traversal-mark')
            .parent().should('contain', 'Morbi leo risus')

        //.parents()
        cy.get('.traversal-cite')
            .parents().should('match', 'blockquote')


        //.parentsUntil()
        cy.get('.clothes-nav')
            .find('.active')
            .parentsUntil('.clothes-nav')
            .should('have.length', 2)


        //.prev()
        cy.get('.birds').find('.active')
            .prev().should('contain', 'Lorikeets')


        //.prevAll()
        cy.get('.fruits-list').find('.third')
            .prevAll().should('have.length', 2)



        //.prevUntil()
        cy.get('.foods-list').find('#nuts')
            .prevUntil('#veggies').should('have.length', 3)


        //.siblings()
        cy.get('.traversal-pills .active')
            .siblings().should('have.length', 2)
    })
})