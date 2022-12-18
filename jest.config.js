module.exports = {
    projects: [
        {
            preset: 'ts-jest',
            displayName: 'cli testing',
            testEnvironment: 'node',
            testMatch: ['<rootDir>/src/__specs__/**.*.spec.ts']
        }
    ]
}
