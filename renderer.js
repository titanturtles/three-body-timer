const TIMER = document.getElementById("timer")
var t = new Date()
t.setSeconds(t.getSeconds() + 1801*60*60)

setInterval(UpdateTimer, 100)

async function UpdateTimer() {
	var now = new Date().getTime()
	const timer = t - now
	var hour = Math.floor(timer/3600000)
	var minute = Math.floor(timer/60000 - hour * 60)
	var second = Math.floor(timer/1000 - hour * 60 * 60 - minute * 60)
	if (minute < 10) {
		minute = '0' + minute
	}
	if (second < 10) {
		second = '0' + second
	}
	TIMER.innerText = hour + ':' + minute + ':' +second
}