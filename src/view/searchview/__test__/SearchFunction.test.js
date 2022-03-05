const search = require('../SearchFunction.js');

// These are the unit tests for the Search function.
// The test searches for a user and if the user exists, recieves the users last status update.
// If user doesn't exists, the info that is returned is "User doesn't exist"
// Parameters are user (search for username) and 
//expected result(the last status update or "User doesn't exist")
test('Testing an existing user', () => {

    localStorage.setItem("Elias", "He is online, and taking a walk!")
    const user = localStorage.getItem('Elias');
    expect(user).toBe("He is online, and taking a walk!");
});

test('Testing an existing user', () => {

    localStorage.setItem("Elias", "He is online, and taking a walk!")
    expect(search('Elias')).toBe("He is online, and taking a walk!");
});

test('Testing a non existant user', () => {
  expect(search('Johan')).toBe("User doesn't exist!")
})
