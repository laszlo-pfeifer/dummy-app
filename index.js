
const minNumberOfLines = parseInt(process.env.MIN_NUMBER_OF_LINES) || 10
const maxNumberOfLines = parseInt(process.env.MAX_NUMBER_OF_LINES) || 30
const sleepInterval = parseInt(process.env.SLEEP_INTERVAL_BETWEEN_LINES_IN_MS) || 500
const numberOfLines = minNumberOfLines + Math.floor(Math.random() * Math.floor(maxNumberOfLines- minNumberOfLines))

const logs = Array(numberOfLines).fill().map((_, i) => `${i + 1 }. line: ${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`)

print(logs)

async function print(logs) {
    for (const line of logs) {
        await sleep()
        console.log(line)
    }
}

async function sleep() {
    return new Promise((res, _) => {
        setTimeout(res, sleepInterval)
    })
}

  