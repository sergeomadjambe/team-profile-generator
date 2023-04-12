const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Will', 24, 'w.york63@gmail.com', 'wyork63');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Will', 24, 'w.york63@gmail.com', 'wyork63');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Will', 24, 'w.york63@gmail.com', 'wyork63');
    expect(engineer.getRole()).toEqual("Engineer");
}); 