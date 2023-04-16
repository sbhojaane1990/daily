describe("Automate calender", () => {

    Cypress.on("uncaught:exception", () => {
              return false
    })

    it.only("Automate SpiceJet Date calender for Depart date & Return date", () => {

              cy.log("##--- Depart Date ---##")
              var DepartDateObj = new Date()
              DepartDateObj.setDate(DepartDateObj.getDate() + 5)
              var Departyear = DepartDateObj.getFullYear()
              var DepartMonth = DepartDateObj.getMonth()
              DepartMonth = DepartDateObj.toLocaleString("default", { month: "long" })
              var DepartMonthStr = DepartDateObj.toLocaleString('default', { day: "2-digit", month: "2-digit" }).split("/").reverse().join("/")
              var DepartDate = DepartDateObj.getDate()
              cy.log(Departyear, DepartMonth, DepartDate)

              cy.visit("https://book.spicejet.com/");
              cy.get("#custom_date_picker_id_1").first().siblings("button").click({ force: true })

              function SelectYear(para) {
                        cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                  if (!el.text().includes(Departyear)) {
                                            cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                            SelectYear(1)
                                  }
                        })
              }

              function SelectMonth(para) {
                        return cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                  if (!el.text().includes(DepartMonth)) {
                                            cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                            SelectMonth(1)
                                  }
                        })
              }

              SelectYear(0)
              SelectMonth(0).then(el => {
                        cy.wrap(el).parent("div").siblings("table").find(".ui-state-default").each((el) => {
                                  if (el.text() == DepartDate) cy.wrap(el).click({ force: true })
                        })
              })
              cy.get("#custom_date_picker_id_1").first().should("have.value", DepartMonthStr)


              //--------------------------------------
              cy.log("##--- Return Date ---##")
              var ReturnDateObj = new Date()
              ReturnDateObj.setDate(ReturnDateObj.getDate() + 210)
              var ReturnYear = ReturnDateObj.getFullYear()
              var ReturnMonth = ReturnDateObj.getMonth()
              ReturnMonth = ReturnDateObj.toLocaleString("default", { month: "long" })
              var ReturnMonthStr = ReturnDateObj.toLocaleString('default', { day: "2-digit", month: "2-digit" }).split("/").reverse().join("/")
              var ReturnDate = ReturnDateObj.getDate()
              cy.log(ReturnYear, ReturnMonth, ReturnDate)

              cy.get("#custom_date_picker_id_2").last().click({ force: true })

              function ReturnSelectYear(para) {
                        cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                  if (!el.text().includes(ReturnYear)) {
                                            cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                            ReturnSelectYear(1)
                                  }
                        })
              }
              function ReturnSelectMonth(para) {
                        return cy.get(".ui-datepicker-title").eq(para).then((el) => {
                                  if (!el.text().includes(ReturnMonth)) {
                                            cy.get(".ui-datepicker-next.ui-corner-all").click({ force: true })
                                            ReturnSelectMonth(1)
                                  }
                        })
              }

              ReturnSelectYear(0)
              ReturnSelectMonth(0).then(el => {
                        cy.wrap(el).parent("div").siblings("table").find(".ui-state-default").each((el) => {
                                  if (el.text() == ReturnDate) cy.wrap(el).click({ force: true })
                        })
              })
              cy.get("#custom_date_picker_id_2").last().should("have.value", ReturnMonthStr)
    })


})