var requestMotion01 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestMotion01',
	messageType : 'std_msgs/String'
});
var requestMotion02 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestMotion02',
	messageType : 'std_msgs/String'
});
var requestMotion03 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestMotion03',
	messageType : 'std_msgs/String'
});
var requestMotion04 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestMotion04',
	messageType : 'std_msgs/String'
});

var requestStop01 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop01',
	messageType : 'std_msgs/String'
});
var requestStop02 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop02',
	messageType : 'std_msgs/String'
});
var requestStop03 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop03',
	messageType : 'std_msgs/String'
});
var requestStop04 = new ROSLIB.Topic({
	ros : ros,
	name: '/requestStop04',
	messageType : 'std_msgs/String'
});

/* These are the constants recognized by our python ros api including the packet replicator */
const FORWARD = 'FORWARD'
const BACKWARD = 'BACKWARD'
const RIGHT = 'RIGHT'
const LEFT=  'LEFT'
const STOP = 'STOP'


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
