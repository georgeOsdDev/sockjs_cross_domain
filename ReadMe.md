#Test for Android SockJS Cross Domain xhr_streaming/xhr_polling

### Start Server

#### Use [sockjs-node](https://github.com/sockjs/sockjs-node)
	npm install
	node server

  #Browse index.html and connect sockUrl by tapping each button.
	open http://mydomain/
	open https://mydomain/


#### Or Use [Xitrum](https://github.com/ngocdaothanh/xitrum)
	cd xitrumserver
	sbt/sbt run

  #Browse index.html and connect sockUrl by tapping each button.
	open http://mydomain/
	open https://mydomain/



### Result
_Number in Result column mean error code of close event._

Mac OSX 10.9.2 - Google Chrome 34.0.1847.116

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

Mac OSX 10.9.2 - FireFox 28.0

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |1002    |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |1002    |
|https://mydomain/    |https://crossdomain/echo |OK      |


GALAXY S4(SC-04E) Android 4.3 Default Browser

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |1006    |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |1006    |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |1006    |


GALAXY S4(SC-04E) Android 4.3 Google Chrome 34.0.1847.114

|WebUrl(index.html)   | SockUrl                 | Result |
|:--------------------|:------------------------|:------:|
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|http://mydomain/     |http://mydomain/echo     |OK      |
|---------------------|-------------------------|--------|
|https://mydomain/    |http://mydomain/echo     |OK      |
|https://mydomain/    |https://mydomain/echo    |OK      |
|https://mydomain/    |http://crossdomain/echo  |OK      |
|https://mydomain/    |https://crossdomain/echo |OK      |

