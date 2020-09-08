# simpleChatApplication
Real time chat Application with Multiple user login

To run this application follow the Below steps.

1. Install Node Js
2. Clone the repository using 
   git clone https://github.com/Revenge-Rakesh/simpleChatApplication
   
3. After cloning install the required dependencies in node.
   i. Express -- Allows to dynamically render HTML Pages based on passing arguments to templates.
      npm install express --save
      
   ii. socket.io --  Web Socket is a protocol which provides a full duplex(multiway) communication i.e allows communication in both directions simultaneously.
        npm install socket.io --save
        
   iii. nodemon --   nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are        detected
        npm install nodemon --save
       
   iv.  multer  -- Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
        npm install multer --save
        
    v.  body-parser --- body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST reques.
        npm install body-parser --save
        
 4.  After installing the Dependencies. Run the below command to access the application.
     node .\index.js
     
 This will expose the application on port 5000
 
 To access the application hit the URL:    http://localhost:5000/
 
 Note :
    -- If you want to change the port, you need to change two files.
    
       1. index.js 
           below snippet 
           var server = app.listen(5000, function(){   ******    });
           
       2. chat.js 
          var socket = io.connect("http://localhost:5000");
          
          
