const moment = require('moment')
let seconds
let intervalID

module.exports = {
    helper__convertSecondsInHour(seconds)
    {
        return moment().startOf('day').seconds(seconds).format('HH:mm:ss')
    },
    start(element)
    {
        let time = moment.duration(element.textContent)
        clearInterval(intervalID)
        seconds = time.asSeconds()
        intervalID = setInterval(() => {
            seconds++
            element.textContent = this.helper__convertSecondsInHour(seconds)
        }, 1000)
    },
    stop()
    {
        clearInterval(intervalID)
    },
    pause()
    {

    },
    reset()
    {

    }
}
