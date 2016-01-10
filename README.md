# NodeClusteringExample

## Example 1 (output):

$ NODE_DEBUG=cluster node server.js

Forking CPU:0
Forking CPU:1
Forking CPU:2
Forking CPU:3
Forking CPU:4
Forking CPU:5
Forking CPU:6
Forking CPU:7
Forking CPU:8
Forking CPU:9

process 13646 says hello!

process 13646 says hello!

process 13648 says hello!

process 13648 says hello!

process 13646 says hello!

process 13648 says hello!

process 13646 says hello!

process 13648 says hello!
 
process 13646 says hello!

## Example 2 (output):
NODE_DEBUG=cluster node expressClusterExample2.js

Master cluster setting up 4 workers...

Worker 13779 is online

Worker 13776 is online

Worker 13777 is online

Worker 13778 is online

Process 13778 is listening to all incoming requests

Process 13779 is listening to all incoming requests

Process 13776 is listening to all incoming requests

Process 13777 is listening to all incoming requests
