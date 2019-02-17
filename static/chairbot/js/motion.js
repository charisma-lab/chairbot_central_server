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
	messageType : 'std_msgs/Int8' 
});

var requestStop03 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop03',
	messageType : 'std_msgs/Int8' 
});

// Abrar: I'm using numbers 1= FORWARD, 3= BACKWARD, 2= RIGHT, 4= LEFT and 0=Stop
const FORWARD = 1;
const BACKWARD = 3;
const RIGHT = 2;
const LEFT= 4;
const STOP = 0;

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

	if (motion == 0) { //this is the STOP command
		requestStopPacket = new ROSLIB.Message(motion)
		console.log(requestStopPacket)
		//send it to the right chair's topic
		requestStop03.publish(requestStopPacket)
		console.log("Stop Packet is " + requestStopPacket)
	}
	else if (motion > 0) { //this is one of the MOTION commands
		requestMotionPacket = new ROSLIB.Message(motion)
		console.log("Motion Packet is " + requestMotionPacket)
		//send it to the right chair's topic
		requestMotion03.publish(requestMotionPacket);
	}
}


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
