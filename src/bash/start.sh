trap 'kill $(jobs -p)' SIGINT SIGTERM EXIT

node /home/pi/carpi/src/js/ui/index.js &
startx -- -nocursor
