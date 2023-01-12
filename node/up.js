let robot = require("kbm-robot");

console.log("Start Jar");
robot.startJar();
console.log("Started Jar");

robot.
sleep(6000)
.press("up")
.sleep(1)
.release("up").go().then(() => {
	console.log("stopping");
	robot.stopJar();
	console.log("stopped");
});

