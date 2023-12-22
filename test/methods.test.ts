import { getSecrets } from '../src/methods';

// UTs for getSecrets should confirm that it fetches as secret from secretsmanager
// should be using aws sdk v3, so mocking should be easy
jest.mock('aws-sdk', () => ({
  SecretsManager: jest.fn().mockImplementation(() => ({
    getSecretValue: jest.fn().mockImplementation(() => ({
      promise: jest.fn().mockResolvedValue({ SecretString: 'secret' }),
    })),
  })),
}));
