import { monitor } from '../src/construct.handler';

// Silence log output
(['log', 'error'] as jest.FunctionPropertyNames<Required<Console>>[]).forEach((func) =>
  jest.spyOn(console, func).mockImplementation(() => {}),
);

// mock all methods imported from the methods.ts file
jest.mock('../src/methods', () => ({
  wait: jest.fn(() => Promise.resolve()),
}));

/** EnvVar validation test cases */
interface EnvVarTestCase {
  /** The name of the environment variable that is required. */
  name: string;
  /** The error message that is expected to be thrown when the environment variable is not set. */
  expectedError: string;
}

const defaultEnvVars: Record<string, any> = {
  'REDIS_ADDR': 'fakeAddr',
  'REDIS_PORT': '12345',
  'QUEUES': JSON.stringify(['fakeQueue']),
  'REDIS_SECRET_ARN': 'fakeArn',
  'REDIS_SECRET_PASSWORD_PATH': 'fakePasswordPath',
  'REDIS_SECRET_USERNAME_PATH': 'fakeUsernamePath',
};

describe('environment variable testing', () => {
  let env: NodeJS.ProcessEnv;

  // cleanup all defaultEnvVars
  function cleanEnv() {
    Object.keys(defaultEnvVars).forEach((key) => delete env[key]);
  }

  beforeAll(()=> {env = process.env});
  beforeEach(cleanEnv);
  afterAll(() => {
    cleanEnv();
    process.env = env; // restore original env vars
  });

  it.each<EnvVarTestCase>([{
      name: 'REDIS_ADDR',
      expectedError: 'REDIS_ADDR environment variable not set',
  }])('monitor errors when required environment variable', ({name, expectedError}) => {
    // Mock in ALL the defaultEnvVars EXCEPT the one being tested
    Object.keys(defaultEnvVars).forEach((key) => {
      if (key === name) {
        return;
      }
      process.env[key] = defaultEnvVars[key];
    });

    expect(monitor()).rejects.toThrow(expectedError);
  });
});

it.todo('');
