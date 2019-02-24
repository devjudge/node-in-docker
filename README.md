README.md

1. This is a sample dockerized node.js application.
2. To run the sample code, do the following:
	a. Go to the directory which contains the Dockerfile
	b. Run thw following commands in the terminal/command line
		i. docker build -t hello-world .
		ii. docker run -p 8081:8081 hello-world
	c. Go to http://localhost:8081/ in your browser to view it.