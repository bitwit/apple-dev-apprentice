#/bin/sh

echo "Starting Apple Dev Apprentice"
node_modules/.bin/webdriver-manager start &
driver_pid=$!
echo "Webdriver process ID #$driver_pid"
function killwebdriver {
	kill $driver_pid
}

if [ -z "$1" ]
then
	echo "Runing iTunesConnect"
	SITE=itunesconnect node_modules/.bin/protractor protractor.conf.js
else
	echo "Running iTunesConnect w/ provided email $1"
	SITE=itunesconnect EMAIL=$1 node_modules/.bin/protractor protractor.conf.js
fi

trap killwebdriver EXIT
