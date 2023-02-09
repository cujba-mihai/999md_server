characteristics:
announcementAuthor:
select
string,oneOf['person','dealer']
person,dealer
manufactureYear:
datetime
number,min[1900],max[2023]
none
steeringWheel:
select
string,oneOf['left', 'right']
left,right
seatingCapacity:
select
string,oneOf[1, 2, 3, 4, 5, 6, 7, 8, 9]
1,2,3,4,5,6,7,8,9
bodyType:
select
string,oneOf['suv', 'combi', 'sedan']
suv,combi,sedan
numberOfDoors:
select
string,oneOf[2, 3, 4, 5]
2,3,4,5
mileage:
number
number,min[0],max[10000000]
none
engineCapacity:
number
number,min[0]
none
enginePower:
number
number,min[0]
none
fuelType:
select
string,oneOf['gasoline', 'gas', 'eletric']
gasoline,gas,eletric
transmissionType:
select
string,oneOf['auto', 'manual', 'robo', 'variator']
auto,manual,robo,variator
tractionType:
select
string,oneOf['4x4', 'fwd', 'bwd']
4x4,fwd,bwd
color:
select
string,oneOf['red', 'green', 'blue', 'orange', 'white']
red,green,blue,orange,white
security:
securityOptions:
multiselect
array
antiLockBrakesSystem,curtainAirbags,tractionControlSystem,sideAirbags,parktronic,MonitoringSystem,passengerAirbag,stabilizationSystem,driverAirbag,headlightInjectors,lightSensor,immobilizer,summerTires,lightAlloyWheels,antiTheftAlarm,multiFunctionalSteeringWheel,stampedSteelWheels,winterTires,antiFogLights,allSeasonTires,xenonHeadlights,rainSensor,rearCamera
comfort:
comfortOptions:
multiselect
array
airConditioning,automaticClimateControl,powerSteering,steeringWheelHeightAdjustment,steeringWheelLengthAdjustment,sunroof,electricWindows,electricMirrors,electricDriverSeatAdjustment,electricPassengerSeatAdjustment,heatedSeats,heatedMirrors,centralLocking,cruiseControl,audioSystemWithBluetooth,leatherUpholstery,textileUpholstery,dashboardComputer,navigationSystemWithTVAndDVD,tintedWindows
