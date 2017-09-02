# Node.js the study repo!!

## Environment Setup

Installation on UNIX/Linux/Mac OS X and SunOS

```sh
$ cd /tmp
$ wget http://nodejs.org/dist/v6.3.1/node-v6.3.1-linux-x64.tar.gz
$ tar xvfz node-v6.3.1-linux-x64.tar.gz
$ mkdir -p /usr/local/nodejs
$ mv node-v6.3.1-linux-x64/* /usr/local/nodejs
```

Add /usr/local/nodejs/bin to the PATH environment variable.

```sh
$ export PATH=$PATH:/usr/local/nodejs/bin
```

More information on the [TutorialsPoint](https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm).

Installing some modules to use in a node.js project

First initialize the npm in the repo:

```sh
$ npm init
```

Then

```sh
$ npm install ejs --save
$ npm install express --save
$ npm install mysql
$ npm consign --save
```

Bodyparse

```sh
$ npm install body-parser --save
```

Express validator
	- Used to validate the data resquest.

```sh
$ npm install express-validator --save 
```

## Server MySQL on ubuntu (used in some part of the study)

Installing:

```sh
$ sudo apt-get install mysql-server
```

Firts acess:

```sh
$ mysql -u root -p
```

Configuration of user:

```sh
CREATE USER 'nomeusuario'@'IP' IDENTIFIED BY 'senha';
CREATE USER 'luizotavio'@'%' IDENTIFIED BY 'senha';
GRANT ALL PRIVILEGES ON *.* TO 'luizotavio'@'%' WITH GRANT OPTION;
```

Change the line blind-address, "drop 127.0.0.1." and put "*", using the nano editor.
```sh
$ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

To start and stop the service:
```sh
$ sudo /etc/init.d/mysql "restart/start/stop"
$ service mysql "start/restart/stop"
```