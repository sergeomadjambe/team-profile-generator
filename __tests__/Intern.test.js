const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern ('Will', 124, 'w.york63@gmail.com', 'VT');
    expect(intern.name).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Will', 124, 'w.york63@gmail.com', 'VT');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern ('Will', 124, 'w.york63@gmail.com', 'VT');
    expect(intern.getRole()).toEqual("Intern");
});