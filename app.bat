if "%1" == "debug" (
    start cmd /k node-inspector --web-port=8000
    start node --debug app.js
) else (
     start node app.js

)
