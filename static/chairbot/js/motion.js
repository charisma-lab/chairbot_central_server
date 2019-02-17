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
	messageType : 'std_msgs/Int8' //either  Backward, Forward, Left, Right 
});

// Initialization: Stop all movments 
// chairTwist01.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));
// chairTwist02.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));
// chairTwist03.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));
// chairTwist04.publish(new ROSLIB.Message({linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}}));

// Abrar: I'm using numbers 1= FORWARD, 3= BACKWARD, 2= RIGHT, 4= LEFT and 0=Stop
const FORWARD = 1;
const BACKWARD = 3;
const RIGHT = 2;
const LEFT= 4;
const STOP = 0;

// const FORWARD = [
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: -150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
/* const BACKWARD = [
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 150.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
]; */

// const ROTATE10POSITIVE =[
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
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
// const ROTATE180POSITIVE = [
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE270POSITIVE = [	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE360POSITIVE = [	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE10NEGATIVE = [
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE90NEGATIVE = [
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE180NEGATIVE = [
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE270NEGATIVE = [	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];
// const ROTATE360NEGATIVE = [	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},	
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:-50.0}},
// 	{linear: {x: 0.0, y:0.0, z:0.0}, angular: {x: 0.0, y:0.0, z:0.0}},
// ];

function runSequence(motion){
	var step = 0;
	var loopTimer;
	function pub() {
		console.log(motion[step]);//test
		chairTwist01.publish(new ROSLIB.Message(motion[step]));
		chairTwist02.publish(new ROSLIB.Message(motion[step]));
		chairTwist03.publish(new ROSLIB.Message(motion[step]));
		chairTwist04.publish(new ROSLIB.Message(motion[step]));
		step += 1;
		if(step >= motion.length) {
			clearInterval(loopTimer);
		}
	}
	loopTimer = setInterval(pub, 200);
}

function askToRunSequence(motion) {
	console.log("The requested motion is:" + motion);
	//send the motion to the neato
	requestMotion03.publish(new ROSLIB.Message(motion));
}
function rotate90right() {
	runSequence(ROTATE90POSITIVE);
}
// function rotate180right() {
// 	runSequence(ROTATE180POSITIVE);
// }
// function rotate270right() {
// 	runSequence(ROTATE270POSITIVE);
// }
// function rotate360right() {
// 	runSequence(ROTATE360POSITIVE);
// }
// function rotate90left() {
// 	runSequence(ROTATE90NEGATIVE);
// }
// function rotate180left() {
// 	runSequence(ROTATE180NEGATIVE);
// }
// function rotate270left() {
// 	runSequence(ROTATE270NEGATIVE);
// }
// function rotate360left() {
// 	runSequence(ROTATE360NEGATIVE);
// }
function forward() {
	askToRunSequence(FORWARD);
}
function backword() {
	askToRunSequence(BACKWARD);
}
function stop() {
	askToRunSequence(STOP);
}
function turnRight()
{
	askToRunSequence(RIGHT);
}
function turnLeft() {
	askToRunSequence(LEFT);
}
// n=0
// function backword_encapsulator(button) {
// 	// Encapsulates calls to backword() 

// 	alert("Inside the backword_encapsulator")
// 	n=2
// 	//while mouse is still over the backword button, keep calling backword
// 	//TODO: have a central function to manage setting button_pressed and make sure no two buttons have the class set at the same time.
// 	//while (button.classList.contains('button_pressed')) 
// 	while(n>=0)
// 	{
// 		backword()
// 		alert("Inside the backword_encapsulator")
// 		n-=1
// 	}
// }