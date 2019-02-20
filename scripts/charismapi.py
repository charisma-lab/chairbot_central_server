#!/usr/bin/env python
import roslib
import rospy

from geometry_msgs.msg import Twist

import sys, select, termios, tty

from std_msgs.msg import String
from sensor_msgs.msg import LaserScan
from geometry_msgs.msg import Vector3

import time
from std_msgs.msg import UInt16
from sensor_msgs.msg import Joy

msg = """
Reading from the Dualshock4 controller ~!! And Publishing to neato!
---------------------------
Move around:
"""

def joy_handler(ps):
  pubjoy.publish(ps)

def listener():
	rospy.Subscriber("/joy", Joy , joy_handler)
	rospy.spin()

if __name__ == '__main__':
	print('Publishing joy messages over /joy/pi01')
	rospy.init_node('charismapi', anonymous=True)
	pubjoy = rospy.Publisher("/joy/pi01", Joy, queue_size=10)
	try:
		print msg
		listener()
	except rospy.ROSInterruptException:
		pass
