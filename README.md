# dummy-app

## How to use?

You can run the dummy app with the following command:
```
node index.js
```

You can customize the number of lines and the sleep interval with the following environment variables:
```
MIN_NUMBER_OF_LINES=1 MAX_NUMBER_OF_LINES=4 node index.js
```

The default values are:
* MIN_NUMBER_OF_LINES = 10
MAX_NUMBER_OF_LINES = 30
SLEEP_INTERVAL_BETWEEN_LINES_IN_MS = 500