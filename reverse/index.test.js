const reverse = require('./index');

test('string is reversed', () => {
    expect(reverse('hello')).toBe('olleh');
})