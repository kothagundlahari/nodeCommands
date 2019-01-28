# nodeCommands

This repo illustrates the functionality of few node commands:
 
    1. diff
    2. ls
    3. find
    4. sed

### Installation
1. Clone or Download the repo. 
2. Run the following commands
    
        npm install babel-cli -g 
        npm install 

### diff 

    babel-node testDiffCommands.js file.txt file1.txt 

    
### ls

     babel-node ls.js 
     
           
### find

      babel-node find.js 
      
### sed
       babel-node sed.js 


### Note:
Using babel-node is not the recommended approach to use in production. For production purposes one should transpile the code into a specific folder and then use those file to serve into the node environment.

