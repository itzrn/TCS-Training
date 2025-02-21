/*
1. Synchronous Code
    A code which get executed at the same time flow of execution.

2. Asynchronous code
    A code which won't guarantee that it will get executed at the same time of flow of execution.
    To hadle Asynchronous code we use the concept of event loop




    Event Loop
        1. Call Stack -> code come into stack and get pop when executed
        2. Browser -> when a asynchronous code come then that code is hand over to browser to prevent blocking and call stack get continue with coming flow of exection
        3. Callback Queue -> as the asynchrnous function complete its calculation and come for execution this function is then send to Callback queue/task queue then
                            event loop make sure when the call stack get empty it sent the top task of callback queue to call stack for execution
*/