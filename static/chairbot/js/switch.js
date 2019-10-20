// Connecting to ROS
// -----------------
// create a Ros node object to communicate with a rosbridge v2.0 server.
var ros_server = '192.168.1.196'
var ros_port = '9090'
var ros = new ROSLIB.Ros({
    url : 'ws://' + ros_server + ':' + ros_port
});
    console.log("Listening to " + ros_server + " on " + ros_port)

// add a listener for a connection event to the ros object.
ros.on('connection', function() {
  console.log('Connected to websocket server.');
});
ros.on('error', function(error) {
  console.log('Error connecting to websocket server: ', error);
});
ros.on('close', function() {
  console.log('Connection to websocket server closed.');
});
// Publishing a Topic for each chair
// ------------------
var chair01 = new ROSLIB.Topic({
  ros : ros,
  name : '/cbon01',
  messageType : 'std_msgs/Int8'
});
var chair02 = new ROSLIB.Topic({
  ros : ros,
  name : '/cbon02',
  messageType : 'std_msgs/Int8'
});
var chair03 = new ROSLIB.Topic({
  ros : ros,
  name : '/cbon03',
  messageType : 'std_msgs/Int8'
});
var chair04 = new ROSLIB.Topic({
  ros : ros,
  name : '/cbon04',
  messageType : 'std_msgs/Int8'
});

var chairOn = new ROSLIB.Message({
  data: 1
});
var chairOff = new ROSLIB.Message({
  data: 0
});

(function(){
  // Initialization: Set all chairs to be OFF
  chair01.publish(chairOff);
  //document.getElementById("Switch01").checked = false;
  chair02.publish(chairOff);
  //document.getElementById("Switch02").checked = false;
  chair03.publish(chairOff);
  //document.getElementById("Switch03").checked = false;
  chair04.publish(chairOff);
  //document.getElementById("Switch04").checked = false;
})();

function toggle_chair01(){
  var checkBox = document.getElementById("Switch01");
  var text = document.getElementById("Toggle01");
  if (checkBox.checked == true){
    chair01.publish(chairOn);
    text.innerHTML = "#1,";
      if (document.getElementById("Switch02").checked == true 
        &&
        document.getElementById("Switch03").checked == true
        &&
        document.getElementById("Switch04").checked == true)
        document.getElementById("SwitchAll").checked=true;
  } else {
    chair01.publish(chairOff);
     text.innerHTML = "";
    document.getElementById("SwitchAll").checked=false;
  }
}

function toggle_chair02(){
  var checkBox = document.getElementById("Switch02");
  var text = document.getElementById("Toggle02");
  if (checkBox.checked == true){
    chair02.publish(chairOn);
    text.innerHTML = " #2,";
      if (document.getElementById("Switch01").checked == true 
        &&
        document.getElementById("Switch03").checked == true
        &&
        document.getElementById("Switch04").checked == true)
        document.getElementById("SwitchAll").checked=true;
  } else {
    chair02.publish(chairOff);
    text.innerHTML = "";
    document.getElementById("SwitchAll").checked=false;
  }
}

function toggle_chair03(){
  var checkBox = document.getElementById("Switch03");
  var text = document.getElementById("Toggle03");
  if (checkBox.checked == true){
    chair03.publish(chairOn);
    text.innerHTML = " #3,";
      if (document.getElementById("Switch01").checked == true 
        &&
        document.getElementById("Switch02").checked == true
        &&
        document.getElementById("Switch04").checked == true)
        document.getElementById("SwitchAll").checked=true;
  } else {
    chair03.publish(chairOff);
    text.innerHTML = "";
    document.getElementById("SwitchAll").checked=false;
  }
}
function toggle_chair04(){
  var checkBox = document.getElementById("Switch04");
  var text = document.getElementById("Toggle04");
  if (checkBox.checked == true){
    chair04.publish(chairOn);
    text.innerHTML = " #4";
      if (document.getElementById("Switch01").checked == true 
        &&
        document.getElementById("Switch02").checked == true
        &&
        document.getElementById("Switch03").checked == true)
        document.getElementById("SwitchAll").checked=true;
  } else {
    chair04.publish(chairOff);
    text.innerHTML = "";
    document.getElementById("SwitchAll").checked=false;
  }
}
function toggle_all(){
    var checkBox = document.getElementById("SwitchAll");
  if (checkBox.checked == true){
    chair01.publish(chairOn);
    document.getElementById("Switch01").checked = true;
    toggle_chair01();
    chair02.publish(chairOn);
    document.getElementById("Switch02").checked = true;
    toggle_chair02();    
    chair03.publish(chairOn);
    document.getElementById("Switch03").checked = true;
    toggle_chair03();
    chair04.publish(chairOn);
    document.getElementById("Switch04").checked = true;
    toggle_chair04();
  } else {
    chair01.publish(chairOff);
    document.getElementById("Switch01").checked = false;
    toggle_chair01();
    chair02.publish(chairOff);
    document.getElementById("Switch02").checked = false;
    toggle_chair02();
    chair03.publish(chairOff);
    document.getElementById("Switch03").checked = false;
    toggle_chair03();
    chair04.publish(chairOff);
    document.getElementById("Switch04").checked = false;
    toggle_chair04();
  }
}
