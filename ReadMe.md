##Test for Android SockJS Cross Domain xhr_streaming/xhr_polling

This is a test for GALAXY S4(SC-04E) default browser with SockJS.
By default, GS4 support WebSocket, So it have no problem.
But if accidentaly `window.WebSocket = null;` SockJS fall back its protocol to xhr.
in that protocol, cross domain xhr_send request over https will be fail in GS4.


##Conclusion

This problem occur only Galaxy S4 (Android 4.3) 's Default browser.

It seems to be that browser cancel cross domain post request if http header was not set to XMLHTTPRequest object.


### Start Server

#### Use [sockjs-node](https://github.com/sockjs/sockjs-node)
	npm install sockjs
	node server

  #Browse index.html and connect sockUrl by tapping each button.

	open http://mydomain:8000/
	open https://mydomain:4430/


#### Or Use [Xitrum](https://github.com/ngocdaothanh/xitrum)
	cd xitrumserver
	sbt/sbt run

  #Browse index.html and connect sockUrl by tapping each button.

	open http://mydomain:8000/index.html
	open https://mydomain:4430/index.html

You should install self-sign ssl certificate by access https://crossdomain:4430 directory, before start test.

### Result (Node server)
_Number in Result column mean error code of close event._

Mac OSX 10.9.2 - Google Chrome 34.0.1847.116

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

Mac OSX 10.9.2 - FireFox 28.0

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |1002    |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |1002    |
|https://mydomain/    |https://crossdomain/echo |OK      |


GALAXY S4(SC-04E) Android 4.3 Default Browser

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |1006 (Sending error http status 0)   |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |1006 (Sending error http status 0)   |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |1006 (Sending error http status 0)   |


GALAXY S4(SC-04E) Android 4.3 Google Chrome 34.0.1847.114

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

### Result (Xitrum server)
_Number in Result column mean error code of close event._

Mac OSX 10.9.2 - Google Chrome 34.0.1847.116

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

Mac OSX 10.9.2 - FireFox 28.0

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |1002 (Can't connect to server)   |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |1002 (Can't connect to server)   |
|https://mydomain/    |https://crossdomain/echo |OK      |

iPhone4s - iOS7.1 mobile Safari

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |


GALAXY S4(SC-04E) Android 4.3 Default Browser

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |1006 (Sending error http status 0)   |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |1006 (Sending error http status 0)   |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |1006 (Sending error http status 0)   |


GALAXY S4(SC-04E) Android 4.3 Google Chrome 34.0.1847.114

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |https://mydomain/echo    |OK      |
|http://mydomain/     |http://crossdomain/echo  |OK      |
|http://mydomain/     |https://crossdomain/echo |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

