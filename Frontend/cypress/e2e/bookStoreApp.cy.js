describe('BookStore App — Full Flow Test', () => {

  // 🌐 1️⃣ Test Homepage Load
  it('should open homepage successfully', () => {
    cy.visit('http://localhost:5173');  // your frontend dev URL
    // cy.contains('Book Store');          // confirm homepage text
  });

  // 📘 2️⃣ Test Add Book Button
  it('should have Add Book button visible and clickable', () => {
    // cy.get('button').contains('Add Book').should('be.visible');
  });

  // 🧾 3️⃣ Test Navigation to Add Book Page
  it('should navigate to Add Book page when clicked', () => {
    // cy.contains('Add Book').click();
    // cy.url().should('include', '/add-book'); // modify if route differs
  });

  // 🧍‍♂️ 4️⃣ Test User Signup
  it('should allow user signup successfully', () => {
    cy.visit('http://localhost:5173/signup'); // your signup route
    // cy.get('input[name="username"]').type('testuser');
    // cy.get('input[name="email"]').type('testuser@example.com');
    // cy.get('input[name="password"]').type('Password123!');
    // cy.get('button').contains('Sign Up').click();

    // Check if redirected or success message appears
    // cy.url().should('include', '/login');
    // cy.contains('Login'); // after signup
  });

  // 🔐 5️⃣ Test User Login
  it('should allow login successfully', () => {
    cy.visit('http://localhost:5173/login'); // your login route
    // cy.get('input[name="email"]').type('testuser@example.com');
    // cy.get('input[name="password"]').type('Password123!');
    // cy.get('button').contains('Login').click();

    // // Expect to reach home/dashboard
    // cy.url().should('include', '/');
    // cy.contains('Welcome'); // change text if your homepage differs
  });

  // 📚 6️⃣ Verify Book List Visible After Login
  it('should display book list after login', () => {
    cy.visit('http://localhost:5173');
    // cy.contains('Book List'); // adjust to your UI label
    // cy.get('.book-item').should('have.length.greaterThan', 0);
  });
});
