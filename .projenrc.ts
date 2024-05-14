import { clickupCdk } from '@time-loop/clickup-projen';
import { javascript } from 'projen';

const name = 'cdk-redis-queue-depth-metric-publisher';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  author: 'Andrew Hammond',
  authorAddress: 'ahammond@clickup.com',
  cdkVersion: '2.87.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@types/aws-lambda', '@time-loop/clickup-projen', '@aws-cdk/integ-tests-alpha'],
  name,
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '9',
  repositoryUrl: `https://github.com/time-loop/${name}.git`,
  gitignore: ['.vscode/**'],
  bundledDeps: [
    '@aws-lambda-powertools/metrics',
    '@aws-lambda-powertools/parameters',
    '@aws-sdk/client-secrets-manager',
    'ioredis',
  ],
  peerDeps: ['multi-convention-namer'],
});

project.npmrc.addConfig('node-linker', 'hoisted'); // PNPM support for bundledDeps https://pnpm.io/npmrc#node-linker

project.synth();
