# Development

Hey coders, this guide should help you get started making your own changes to the bot! Glad to have you here.

Discord has an [API](https://discord.com/developers/docs/intro) to allow developers to interact with their server. This project utilizes [discord.js](https://discordjs.guide/#before-you-begin), an open source library that provides a simpler way to interact with Discord. This comes in the form of prebuilt classes, but it's still a lot of work.

The main goal of this repository is to keep this organized, and allow for further development of new features later down the line. This is done through abstraction and adherance to style guides.

Might be daunting but this should serve as a starting point for cool things. This guide should help you get started. Start here, and be sure you read through the items below. Past that there's documentation on other topics.

# Table of Contents

- [Local Environment](#local-environment)
- [Style Guide](#style-guide)
- [Documentation](#documentation)
- [Private Variables and Functions](#private-variables-and-functions)

# Other Topics

- [Database](./DATABASE.md)

## Local Environment

This short tutorial should get you from cloning the repository to running the bot on your local machine.

Note all the code snippets should be run from command line in the repositories root directory.

First install dependencies:

```
$ npm i
```

You'll need to create a file named `.env` in the root directory. This file is automatically ignored by git and is where we store information related to the running environment, or secrets we wouldn't post to Github.

There's an [example.env](https://github.com/andyruwruw/outdoor-climbing-discord-bot/blob/main/example.env) to help you know what properties you'll need. For specific values, contact *Andrew Young*.

Start the bot with the following command:

```
$ npm run start
```

This automatically builds the server from typescript to javascript and runs it using [nodemon](https://www.npmjs.com/package/nodemon), which will restart the server if any changes are saved.

The repository follows a style guide and has support for tests once we get the time to write them. It's best to keep up with linting errors before submitting a pull request.

The following command will show you any linting errors:

```
$ npm run lint
```

Many errors are small and can be handled by [eslint](https://www.npmjs.com/package/eslint). To fix small errors and just be shown errors that require a bit more intervention, run:

```
$ npm run lint:fix
```

All pull requests and pushes to main will be checked for linting and tests by Github using [Github Actions](https://github.com/andyruwruw/outdoor-climbing-discord-bot/actions).

## Style Guide

I love good looking code, and follow [Airbnb's Javascript Style Guide](https://airbnb.io/javascript/) for almost all my javascript projects. There are a few rules that can get tedious, but usually result in clean readable code.

We have a dependency called [eslint](https://eslint.org/), which checks the repository for any errors using Airbnb's style guide.

Anytime you make a pull request, [Github Actions](https://github.com/andyruwruw/outdoor-climbing-discord-bot/actions) will check your code for linting errors (style guide violations) and prevent the merge until their dealt with!

You can use eslint locally using:

```
$ npm run lint:fix
```

Best to do this as you code, so you don't have to deal with tons of errors at the end.

*I wouldn't bother using `npm run lint`, but opt for `npm run lint:fix` just to take out any violations that the script can fix itself.*

I follow a few other rules in my own coding.

## Documentation

Document every class, class variable and function! I use [JSDoc](https://jsdoc.app/about-getting-started.html). It should be pretty explanitory if you look at some of the other documentation. I don't really bother with comments within functions unless things get complicated.

```
/**
 * Finds a subcommand by name.
 *
 * @param {string} name Name of the subcommand.
 * @returns {Command | null} Subcommand if found, null otherwise.
 */
getSubCommand(name: string): Command | null {
```

## Private Variables and Functions

I try to encapsulate most of my work in classes. Allows me to stay organized, inherit, and pass less parameters.

Any class variables or functions that I don't plan on being called externally, I name with an **underscore** at the start.

I try to use `get` and `set` functions as much as possible.

```
class Channel {
  _id: string;

  _privateFunction(): void {

  }

  getId(): string {
    return this._id;
  }
}
```

Javascript itself doesn't actually have private variables or functions, so it's up to us to avoid using anything we've declared private.
