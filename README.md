# Send Bot

```
This repository is still in development!
```

This bot was specifically built for `managing weather windows` in the Oregon Willamette Valley where rain is common. It allows servers to subscribe to local crags and recieve regular updates on weather conditions.

Additional features are likely to include managing sends, leaderboards, gyms, and trips / planning.

**Planned features**:

- Subscribe to crag weather updates and forecasts.
- Plan trips during weather windows.
- Log sends and display leaderboards for outdoor and indoors.

**Data Retrieval**:

Data is retrieved from `web scrapping` Mountain Project, this means they'll need to be a `reoccuring update` of that information. Not sure if that'll be manual or automated / needed often.

There are only plans to maintain Oregon and Washington crags, as the library currently in use ([alexcrist/mountain-project-scraper](alexcrist/mountain-project-scraper)) scrapes literally all of Mountain Project's data, which I have no interest in maintaining.

Weather data is taken from the [OpenWeatherMap API](https://openweathermap.org/api). The free tier gives 1,000 calls a day, which is plenty for our usage so far as this is kept within smaller groups.

**Command References**:

Commands will use item `Mountain Project links` as identifiers in commands. This should give users a good way to reference to items given that some of the names are generic or lack good formatting, ie. `'The Garden'` as its called vs. `'The Garden Boulders\n            Climbing'`, it's name on Mountain Project.

While Mountain Project seem to have unique identifiers for every area, `105818219` for The Garden, this would be more pain for users.

**Design Decisions**:

Leaderboards are a planned feature, but for the interest of inclusivity they'll be monthly resetting. We already know who the strong climbers are, this will help reward active climbers over achomplished ones. It'll still include grades and difficulty.

# Table of Contents

- [Command List](#command-list)
  - [General Commands](#general-commands)
    - Sends
      - [Log a Send](#log-a-send)
      - [Remove a Send](#remove-a-send)
    - Forecasts
      - [View Forecast](#view-forecast)
    - Information
      - [View a Crag](#view-a-crag)
      - [View a Route](#view-a-route)
    - Users
      - [User Stats](#user-stats)
      - [Leaderboard](#leaderboard)
      - [Crag Leaderboard](#crag-leaderboard)
    - Trips
      - [Plan a Trip](#plan-a-trip)
      - [Join a Trip](#join-a-trip)
      - [Leave a Trip](#leave-a-trip)
      - [View a Trip](#view-a-trip)
  - [Admin Commands](#admin-commands)
    - Weather Subscriptions
      - [Subscribe to a Crag](#subscribe-to-a-crag)
      - [Unsubscribe to a Crag](#unsubscribe-to-a-crag)
- [Usage](#usage)
- [Development](#development)

# Command List

Commands are split into two categories, `general` commands and `admin` commands.

Admin commands are only accessable to server owners and allow them to configure the server to different locations.

Both sets of commands should have designated command channels as to not clutter general threads.

# General Commands

General commands are free to be run by anyone on the server or in DMs. While most commands will be locked to a designated command channel, some will be enabled for all channels.

Commands will be registered with Discord so that any user that types `/` will be given a full list of available commands.

## Log a Send

```
/sent add
```

Log a send of a route.

Triggers a series of messages that will figure out:

- The route climbed
- When it was climbed
- Whether it was flashed

## Remove a Send

```
/sent remove
```

Lists all sends to allow the user to delete any.

## View Forecast

```
/forecast <crag>
```

Displays full forecast for climbable days at a crag.

## View a Crag

```
/view crag <crag>
```

Shows details about a crag, including sends and weather.

## View a Route

```
/view route <route>
```

Shows details about a route, including sends and weather.

## User Stats

```
/user <user>
```

Displays a user's information, including sends.

## Leaderboard

```
/leaderboard
```

Displays a monthly rotating leaderboard.

## Crag Leaderboard

```
/leaderboard crag <crag>
```

Displays a monthly rotating leaderboard for a specific crag.

## Plan a Trip

```
/trip plan <month> <day> <crag>
```

Adds a new planned trip to a specific crag. Other users can `join` the trip and `add details` as far as needing rides and equipment.

There are no plans to limit these trips to anyone in the server from viewing or joining, so this should be used exclusively for trips with `open invites`, otherwise just plan separately.

Not exactly a feature I plan on using much, but a nice option for smaller servers.

Canceling a trip requires all members who have `joined` the trip `leave`.

## Join a Trip

```
/trip join <id>
```

Trips will be given an `ID` which can be used to join. The trip message should also have a `join and leave button`.

This will trigger a series of messages to figure out if the user:

- Can drive others / Wants to drive separately / Would like to carpool / Needs a ride to attend
- Has pads, ropes, harnesses or other equipment to contribute.

## Leave a Trip

```
/trip leave <id>
```

Trips will be given an `ID` which can be used to leave. The trip message should also have a `join and leave button`.

The creator of a trip automatically is joined, but if they and everyone else leave, the trip will be `canceled`.

## View a Trip

```
/trip view <id>
```

Displays trip information including attending members and equipment / rides.

# Admin Commands

Admin commands are meant only for server owners.

These commands are not registered with Discord, and require this documentation. There's no particular way to hide register commands from some users, so this prevents the command list for general users getting cluttered.

These commands will be locked to a designated admin command channel, which should be assigned as soon as possible.

## Subscribe to a Crag

```
/subscribe <crag>
```

Adds a crag to the list of tracked weather locations.

## Unsubscribe to a Crag

```
/unsubscribe <crag>
```

Adds removes a crag from the list of tracked weather locations.

# Usage

The bot will be built to be able to handle multiple servers, as I plan on making separate servers for different purposes.

With that being said, there will be no reason for multiple people to be running it, so it will just be invitable to servers!

# Development

Hey coders, this guide should help you get started making your own changes to the bot! Glad to have you here.

## Local Environment

This short tutorial should get you from cloning the repository to running the bot on your local machine.

Note all the code snippets should be run from command line in the repositories root directory.

FIrst install dependencies:

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

# Database

The bot requires a database for persistant data, such as member, hackathon and project details.

I can't be bothered writing SQL, so I opted for [MongoDB](https://www.mongodb.com/), a NoSQL database. We'll be using a free instance from [MongoDB's Atlas](https://www.mongodb.com/atlas). It's free, but not the fastest.

For testing purposes, I built out a psudo-database that's called the [cache database](https://github.com/andyruwruw/outdoor-climbing-discord-bot/tree/main/src/database). If you can't be bothered spinning up MongoDB on your local machine, the cache Database should be fine.

The cache database holds all data in memory, meaning as soon as you stop the script it will get whiped. It's particularly useful for tests that shouldn't actually change data.

You can pick between the two databases using the **.env** file described in the [Usage](#usage) section.

```
# In your .env

DATABASE_TYPE=mongodb
```

It can be set to `mongodb` or `cache`, but defaults to the cache database. So leaving it out works as well.

You shouldn't have to interact much with the database, as I already wrote [data access objects](https://github.com/andyruwruw/outdoor-climbing-discord-bot/blob/main/src/database/mongo/daos/dao.ts) for each object.

The data access objects act as a facade for any communication with the database.