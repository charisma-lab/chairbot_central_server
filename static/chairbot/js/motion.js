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
// Initialization: Stop all movments 
chairTwist01.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));
chairTwist02.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));
chairTwist03.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));

const FORWARD = [
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: -50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];
const BACKWARD = [
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 50.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];
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
const ROTATE180POSITIVE = [
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
const ROTATE270POSITIVE = [	
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
const ROTATE360POSITIVE = [	
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
const ROTATE90NEGATIVE = [
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];
const ROTATE180NEGATIVE = [
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];
const ROTATE270NEGATIVE = [	
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];
const ROTATE360NEGATIVE = [	
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
];

function runSequence(motion){
	var step = 0;
	var loopTimer;
	function pub() {
		console.log(motion[step]);//test
		chairTwist01.publish(new ROSLIB.Message(motion[step]));
		chairTwist02.publish(new ROSLIB.Message(motion[step]));
		chairTwist03.publish(new ROSLIB.Message(motion[step]));
		step += 1;
		if(step >= motion.length) {
			clearInterval(loopTimer);
		}
	}
	loopTimer = setInterval(pub, 200);
}

function rotate90right() {
	runSequence(ROTATE90POSITIVE);
}
function rotate180right() {
	runSequence(ROTATE180POSITIVE);
}
function rotate270right() {
	runSequence(ROTATE270POSITIVE);
}
function rotate360right() {
	runSequence(ROTATE360POSITIVE);
}
function rotate90left() {
	runSequence(ROTATE90NEGATIVE);
}
function rotate180left() {
	runSequence(ROTATE180NEGATIVE);
}
function rotate270left() {
	runSequence(ROTATE270NEGATIVE);
}
function rotate360left() {
	runSequence(ROTATE360NEGATIVE);
}
function forward() {
	runSequence(FORWARD);
}
function backword() {
	runSequence(BACKWARD);
}