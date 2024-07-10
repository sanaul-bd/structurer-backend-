

if u listening from index file then dev should be index or listneing server file then dev should be server.js. 
<!-- ! if u use index and server file seperate into src folder -->
{  
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
}

<!-- !  if u using normally in root of index file  -->
{
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
    },
}