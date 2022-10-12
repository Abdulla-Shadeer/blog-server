
# blog-server.
server side for MERN stack based blogging system <br/>
Copyright - 2022 Abdullah Shadeer


This is the server side program of the mern stack based blogging system I've created 
(available here: https://github.com/Abdulla-Shadeer/blog-demo).

Please add the below mentioned environment variables to the .env 
file in order to start the express server.</br>

1. MONGO = < url of your mongodb database > </br>
2. JWTADMIN = < Base64 32 bit string as a secret key for generating admin access token > <br/>
3. JWTDEMO = < Another Base64 32 bit string for demo users > <br/>

In Linux, use the following command to generate a base64 string: <br/>
"openssl rand -base64 32"
