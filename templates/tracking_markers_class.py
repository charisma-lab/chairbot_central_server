import cv2
import time
import math
# import socket 

# HOST = "127.0.0.1"
# PORT = "9600"

class TrackingCamera(object):
    def __init__(self):
        # USB-Connected Camera
    	self.cap = cv2.VideoCapture(0)

        # Fiducial Marker Dictionary
        self.dictionary = cv2.aruco.getPredefinedDictionary(cv2.aruco.DICT_4X4_50)

        # Constant file path
        self.filePath = '/home/charisma/catkin_ws/src/central_server/static/chairbot/py/'

        # Initialize files
        self.filename1 = (self.filePath + "CB01.txt")
        self.filename2 = (self.filePath + "CB02.txt")
        self.filename3 = (self.filePath + "CB03.txt")
        self.filename4 = (self.filePath + "CB04.txt")
        self.filename5 = (self.filePath + "CB05.txt")
        self.filename6 = (self.filePath + "CB06.txt")
        self.filename7 = (self.filePath + "CB07.txt")
        self.filename8 = (self.filePath + "CB08.txt")

        # Open and Write
        with open(self.filename1, 'w') as f:
            f.write(self.filename1)
            f.write('\n')
            f.write(self.filename1)
            f.write('\n')
        with open(self.filename2, 'w') as f:
            f.write(self.filename2)
            f.write('\n')
            f.write(self.filename2)
            f.write('\n')
        with open(self.filename3, 'w') as f:
            f.write(self.filename3)
            f.write('\n')
            f.write(self.filename3)
            f.write('\n')
        with open(self.filename4, 'w') as f:
            f.write(self.filename4)
            f.write('\n')
            f.write(self.filename4)
            f.write('\n')
        with open(self.filename5, 'w') as f:
            f.write(self.filename5)
            f.write('\n')
            f.write(self.filename5)
            f.write('\n')
        with open(self.filename6, 'w') as f:
            f.write(self.filename6)
            f.write('\n')
            f.write(self.filename6)
            f.write('\n')
        with open(self.filename7, 'w') as f:
            f.write(self.filename7)
            f.write('\n')
            f.write(self.filename7)
            f.write('\n')
        with open(self.filename8, 'w') as f:
            f.write(self.filename8)
            f.write('\n')
            f.write(self.filename8)
            f.write('\n')
        return;

    # Closing Process
    def __del__(self):
        self.cap.release()
        cv2.destroyAllWindows()
        import sys
        sys.exit()
        return;

    # Start a 
    # def socket_send(self, data):
    #     s = socket()
    #     s.bind((HOST, PORT))
    #     s.send("Hello ")
        #with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            # bind server to specific HOST and PORT 
         #   s.bind((HOST, PORT))
            # send the payload data to the client
          #  s.send(data)
    # Returns an modified video image with tracking id markers
    def process(self):

        ret, frame = self.cap.read()
        gray = frame
        res = cv2.aruco.detectMarkers(gray,self.dictionary)

        # Checks all fiducials in ditionary
        if len(res[0]) > 0:
            for (fids, index) in zip(res[0], res[1]):
                for pt in fids:
                    try:
                        if (int(index[0])==0):

                            # ll contains (x, y) coordinate of the middle of fiducial
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)

                            # average of the top two fiducial corners
                            top = (pt[0] + pt[3]) / 2

                            # average of the bottome two fiducial corners
                            bot = (pt[1] + pt[2]) / 2

                            # Difference between top and bottom
                            delta = top - bot

                            # Tangent of the y and the x
                            theta = math.atan2(delta[1], delta[0])

                            # Changes theta from radians to positive degrees (0 to 360 rotating counter-clockwise)
                            degree = theta * (180 / math.pi) + 180

                            #Circle on video stream to mark fiducial
                            cv2.circle(gray,(ll[0],ll[1]), 15, (0,0,255), -1)

                            #Append data onto corresponding file
                            with open(self.filename1, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==1):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (0,255,0), -1)
                            with open(self.filename2, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==2):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (255,0,0), -1)
                            with open(self.filename3, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==3):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (255,255,0), -1)
                            results = (ll[0], ll[1])
                            #render_template('index.html', results=results)
                            #x_y_data = {"x": ll[0], "y": ll[1]}
                           # self.socket_send(x_y_data)
                            with open(self.filename4, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==4):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (255,127,0), -1)
                            with open(self.filename5, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==5):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (255,255,255), -1)
                            with open(self.filename6, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==6):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (0,255,255), -1)
                            with open(self.filename7, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==7):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (128,0,128), -1)
                            with open(self.filename8, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                        elif (int(index[0])==8):
                            ll = ((pt[0] + pt[1] +pt[2] +pt[3])/4)
                            top = (pt[0] + pt[3]) / 2
                            bot = (pt[1] + pt[2]) / 2
                            delta = top - bot
                            theta = math.atan2(delta[1], delta[0])
                            degree = theta * (180 / math.pi) + 180
                            cv2.circle(gray,(ll[0],ll[1]), 15, (255,0,255), -1)
                            with open(self.filename9, 'a') as f:
                                f.write(str(ll[0]))
                                f.write('\t')
                                f.write(str(ll[1]))
                                f.write('\t')
                                f.write(str(degree))
                                f.write('\t')
                                f.write(str(time.time()))
                                f.write('\t\n')
                    except IndexError:
                        pass

        if len(res[0]) > 0:
            cv2.aruco.drawDetectedMarkers(gray,res[0],res[1])
            pass

        # Turns into image
        ret, jpeg = cv2.imencode('.jpg', frame)
        return jpeg.tobytes()