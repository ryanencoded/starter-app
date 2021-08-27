# Instructions

## Install AWS Amplify and Ionic globally on your command line

```npm install -g @aws-amplify/cli```

```npm install -g @ionic/cli```

## Create AWS User using amplify cli

```amplify configure```

Docs: [Installation](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/#sign-up-for-an-aws-account)

After you setup amplify and create a user in AWS IAM with programatic access.

## Initialize the project

First, you need to remove the .gitignore for amplify where it says `TODO: remove this line when ready for amplify init`

Once you do that, init your project to build out basic amplify resources.

```amplify init```