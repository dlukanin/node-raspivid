module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: '../coverage/',
    coverageReporters: ['lcov'],
    rootDir: 'test/',
    moduleFileExtensions: ['ts', 'js'],
};
