
# Database

The bot requires a database for persistant data.

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
