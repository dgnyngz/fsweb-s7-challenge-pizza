describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
});
it("Orta butonuna tıklandığında seçili olduğunu doğrula", () => {
  cy.visit("http://localhost:3000/pizza"); //sayfaya git
  cy.get('input[name="boyut"][value="Orta"]').click();
  cy.get('input[name="boyut"][value="Orta"]').should("be.checked");
});

it("kalın değerine tıkladığında value kalın dönüyor mu", () => {
  cy.visit("http://localhost:3000/pizza");

  cy.get("#size-dropdown").select("Kalın");

  cy.get("#size-dropdown").should("have.value", "Kalın");
});

it("adet minimum 1 olmalı", () => {
  cy.visit("http://localhost:3000/pizza");
  cy.get(".adet p").should("have.text", "1"); // countun başlangıç değerinin 1 olduğunu kontrol ediyoruz.

  cy.get(".adet .test").click(); // adetazalt fonksiyonunu çağırıyoruz.

  cy.get(".adet p").should("have.text", "1"); // countun minimum değerin 1 olduğunu kontrol ediyoruz.
});
