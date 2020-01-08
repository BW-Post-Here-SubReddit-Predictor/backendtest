# backendtest

## Register Users

> Endpoint: /api/auth/register

### Expected Data

```
{
	"username": "Testing",
	"password": "Password123",
	"email": "Testing@email.com"
}
```

### Return Response

`"Testing has been successfully created."`

### Errors

> Username's **must** be unique to register a user.

```
{
  "messsage": "Invalid credentials for account creation.",
  "errors": [
    "Please include a username with at least 2 characters.",
    "Please include a password with at least 3 characters.",
    "Please include an email."
  ]
}
```
* * *

## Login Users

> Endpoint: /api/auth/login

### Expected Data

```
{
	"username": "Test",
	"password": "Testing"
}
```

### Return Response

```
{
  "message": "Welcome back Test!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbSIsImlhdCI6MTU3NDEwODE2MCwiZXhwIjoxNTc0MTM2OTYwfQ.NuVpPq9uQ4QqKrP6U4ZML63U7sjXyh4ytTzOmY-qLoU",
  "id": "5"
}
```

### Errors

```
{
  "message": "Invalid user credentials, unauthorized."
}
```

* * *

## User Endpoints

**All User Endpoints have authentication and are looking for the following header, token will be different for each user**

### Headers

**Expected headers**
```
Content-Type: application/json

Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRpbSIsImlhdCI6MTU3NDEwMTUwNiwiZXhwIjoxNTc0MTMwMzA2fQ.SfYjz_Lmto8wTAIyDnwxxSb6-lJyF1F3GuJJQwYB_tA
```

### **GET** all Posts

> Endpoint: /api/posts/

### Return Response

```
[
  {
    "id": 1,
    "title": "NA",
    "subreddit": "NA",
    "post": "If You Had The World’s Attention For 30 Seconds, What Would You Say?",
    "user_id": 1
  },
  {
    "id": 2,
    "title": "NA",
    "subreddit": "NA",
    "post": "If You Had To Work But Didn’t Need The Money, What Would You Choose To Do?",
    "user_id": 1
  },
  {
    "id": 3,
    "title": "NA",
    "subreddit": "NA",
    "post": "What Is In Your Fridge Right Now?",
    "user_id": 2
  },
  {
    "id": 4,
    "title": "NA",
    "subreddit": "NA",
    "post": "If You Were Home On A Rainy Sunday Afternoon, What Movie Would You Most Want To See On Television?",
    "user_id": 2
  },
]
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```

### **GET** specific Posts

> Endpoint: /api/posts/:id

### Return Response

```
{
  "id": 1,
  "post": "If You Had The World’s Attention For 30 Seconds, What Would You Say?",
  "title": "NA",
  "subreddit": "NA"
}
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find a post with the given id."
}
```
### **GET** posts for a **specific** user

> Endpoint: /api/posts/:id/user

### Return Response

```
[
  {
    "id": 1,
    "post": "If You Had The World’s Attention For 30 Seconds, What Would You Say?",
    "title": "NA",
    "subreddit": "NA",
    "user_id": 1,
    "username": "cory"
  },
  {
    "id": 2,
    "post": "If You Had To Work But Didn’t Need The Money, What Would You Choose To Do?",
    "title": "NA",
    "subreddit": "NA",
    "user_id": 1,
    "username": "cory"
  }
]
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find user post information for specified id."
}
```

### **GET** all Users

> Endpoint: /api/users/

### Return Response

```
[
  {
    "id": 1,
    "username": "cory",
    "email": "cory@email.com"
  },
  {
    "id": 2,
    "username": "robert",
    "email": "robert@email.com"
  },
  {
    "id": 3,
    "username": "eian",
    "email": "eian@email.com"
  },
  {
    "id": 4,
    "username": "asher",
    "email": "asher@email.com"
  },
  {
    "id": 5,
    "username": "thomas",
    "email": "thomas@email.com"
  }
]
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "User credentials were not provided."
}
```
### **GET** specific User

> Endpoint: /api/users/:id

### Return Response

```
{
  "id": 1,
  "username": "cory",
  "email": "cory@email.com"
}
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find a user with the given id."
}
```

* * *

### **POST** posts

> Endpoint: /api/posts/

### Expected Data

> **must** pass in a user_id pointing to the user you want to make the post for

```
{
	"post": "example",
	"title": "example",
  "subreddit":"example"
	"user_id": 2
}
```

### Return Response

```
{
  "message": "The post was successfully created."
}
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
* * *
### **PUT** update post information

> Endpoint: /api/posts/:id

### Expected Data

```
{
  "title": "example",
  "subreddit": "example",
  "post": "What Is In Your Fridge Right Now?",
}
```

### Return Response

```
{
  "message": "Post has been successfully updated.",
  "updatedPost": 1
}
```

### Errors

```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "User credentials were not provided."
}
```
```
{
  "message": "Could not find the post with that id."
}
```


* * *

### **DELETE** post

> Endpoint: /api/posts/:id

### Return Response

```
{
  "message": "The post was successfully deleted."
}
```

### Errors
```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find the post with the specified id."
}
```

### DELETE User

> Endpoint: /api/users/:id

### Return Response

```
{
  "message": "The user was successfully deleted."
}
```

### Errors
```
{
  "message": "Invalid user credentials."
}
```
```
{
  "message": "Could not find the user with the specified id."
}
```