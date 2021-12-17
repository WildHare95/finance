
# React Test Task

Solution to display price tickers data on the UI in realtime.

Possibilities:
- application connect to the locally running service
- application render price changes for tickers in real time
- application builds a graph in real time by the selected ticker
- animated positive and negative ticker changes



## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm test```

# Price Service Usage

URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.
