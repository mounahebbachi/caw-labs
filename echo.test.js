const { exf } = require('./echo');

describe('exf function', () => {
    test('should print the string n times', () => {
        console.log = jest.fn();  // Mock console.log
        exf("echo", 3);
        expect(console.log).toHaveBeenCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith("echo");
    });

    test('should not print anything when n is 0', () => {
        console.log = jest.fn();
        exf("test", 0);
        expect(console.log).not.toHaveBeenCalled();
    });
});
