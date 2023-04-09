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
    - [Help](#help)
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

## Help

```
/help
```

Lists out commands.

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
