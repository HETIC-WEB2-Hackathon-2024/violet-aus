# Install

REST Client
v0.25.1
Huachao Mao
4,680,160
(356)
REST Client for Visual Studio Code

# Authentification

go in auth.http 

click on send request in auth.http
```http 
### 
send request
# @name auth
POST  https://adopte-un-stagiaire.eu.auth0.com/oauth/token
Content-Type: application/json

{
  "client_id": "{{client_id}}",
  "client_secret": "{{client_secret}}",
  "audience": "{{audience}}",
  "grant_type": "client_credentials"
}
```