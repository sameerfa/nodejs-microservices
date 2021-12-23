## Node.js Microservices + React.js Frontend
------------------------------------------------------------------------

The API Gateway running on port 5000, handles requests from the frontend and directs it to the relevant endpoints (Login:3000, Users:3001).

#### To start backend services

```
cd backend/gateway && yarn install && yarn start
cd backend/login && yarn install && yarn start
cd backend/user && yarn install && yarn start
```

#### To start frontend

```
cd frontend && yarn install && yarn start
```
