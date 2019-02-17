var chairTwist01 = new ROSLIB.Topic({
	ros : ros,
	name : '/twist01',
	messageType : 'geometry_msgs/Twist'
});
var chairTwist02 = new ROSLIB.Topic({
	ros : ros,
	name : '/twist02',
	messageType : 'geometry_msgs/Twist'
});
var chairTwist03 = new ROSLIB.Topic({
	ros : ros,
	name : '/twist03',
	messageType : 'geometry_msgs/Twist'
});
var chairTwist04 = new ROSLIB.Topic({
	ros : ros,
	name : '/twist04',
	messageType : 'geometry_msgs/Twist'
});

var requestMotion03 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestMotion03',
	messageType : 'std_msgs/String' 
});

var requestStop03 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop03',
	messageType : 'std_msgs/String' 
});

// Abrar: I'm using numbers 1= FORWARD, 3= BACKWARD, 2= RIGHT, 4= LEFT and 0=Stop

const FORWARD = 'FORWARD'
const BACKWARD = 'BACKWARD'
const RIGHT = 'RIGHT'
const LEFT=  'LEFT'
const STOP = 'STOP'

const ROTATE90POSITIVE = [
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];

function askToRunSequence(motion) {
	console.log("The requested motion is:" + motion);
	//encode the packet to make it processesable by ROS

	if (motion == STOP) { //this is the STOP command
		requestStopPacket = new ROSLIB.Message({data: motion})
		console.log("Stop Packet is " + requestStopPacket)
		//send it to the right chair's topic
		requestStop03.publish(requestStopPacket)
	}
	else { //this is one of the MOTION commands
		requestMotionPacket = new ROSLIB.Message({data: motion})
		console.log("Motion Packet is " + requestMotionPacket)
		//send it to the right chair's topic
		requestMotion03.publish(requestMotionPacket);
	}
}

function printData(message) {
	console.log("Received msg which said " + message.data);
}

requestMotion03.subscribe(printData)
requestStop03.subscribe(printData)

function forward() {
	askToRunSequence(FORWARD);
}
function backward() {
	askToRunSequence(BACKWARD);
}
function stop() {
	askToRunSequence(STOP);
}
function turnRight() {
	askToRunSequence(RIGHT);
}
function turnLeft() {
	askToRunSequence(LEFT);
}
function rotate90right() {
	runSequence(ROTATE90POSITIVE);
}
