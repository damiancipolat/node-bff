<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# Node.js Backend for frontend
A microservices example created with node.js using **express-http-proxy**.

### Install
To install the project run this command:

```console
$npm install
```

### Configuration
To define the redirection endpoints follow this instructions.

```json
{
  "server": {
    "port": "8080"
  },
  "proxy": {
    "map": [
      {
        "target": "https://5f3a062e2300b100169a84f7.mockapi.io",
        "endpoint": "/movies",
        "routes": [
          {
            "method": "get",
            "path": "/movie"
          },
          {
            "method": "get",
            "path": "/movie/:id",
            "auth": true
          }
        ]
      }
    ]
  }
}
```
- In **proxy.map** section define the redirection hots.
- In **proxy.map.routes** define the endpoints to redirect and the methods is the auth is required add "auth:true".

### Example
To try the example run this command.

```sh
#Redirecto to https://5f3a062e2300b100169a84f7.mockapi.io/movies/movie
curl --GET 127.0.0.1:8080/movies/movie/

#Redirecto to https://5f3a062e2300b100169a84f7.mockapi.io/movies/movie/1
curl --GET 127.0.0.1:8080/movies/movie/1
```
