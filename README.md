# The Project Title
    K-HOME
# The Project Description
- This website will help users find hostels quickly and conveniently by address, price, ...
- Chanllenges: Working time is quite short
# User Story
### Background
K-HOME is a website that helps users find accommodation. Here, we allow users to create accounts as tenants and lessors.Each User should provide a name, an email and a password to create an account.
The email address should not link to any account in the system. After joining MySpace, users can update their profile into like Avatar, Phone, , Job Title, Social Links and a short description about themselves.
Only lessors are allowed to create a post. Post must to have some required information

### Authentication
As a user I can sign in. with my email and password.
As a user, I can register for a new account, email, password.
As a user, I can stay signed in with refreshing page.

### Users
As a user, I can get my current profile info (stay isgned in after page refresh)
As a user, I can see the profile of a specific user given a user ID.
As a user, I can update my profile into like Avatar, Company, Job Title, Social Links and short description...
As a user, I can chat with another user > Realtime chat

### Posts
As a user, I can see a list of posts with pagination
As a user, I can create a new post with text content and an image.
As a user, I can edit my posts
As a user, I can delete my posts

### Bookmark
As a user, I can bookmark a post

# API endpoints
### Auth APIs
```sh
*  @route POST /auth/login
* @description Log in with username and password
* @body {email, passsword}
* @access Public
```

### Users APIs
```sh
* @route GET /users/me
* @description Get current user info
* @body
* @access Login required
```

```sh
* @route GET /users/:id
* @description Get user profile
* @body
* @access LOgin required
```

```sh
* @route POST /users
* @description Register new user
* @body {name, email, password}
* @access Public
```

```sh
* @route PUT /users/:id
* @description  Update user profile
* @body {name, avatarLink ,aboutMe, jobTitle, facebookLink, instagramLink}
* @access Login required
```

```sh
* @route DELETE /users/:id
* @description Delete a user
* @body 
* @access Public
```

### Post APIs

```sh
* @route GET /posts/:id
* @description Get a single post
* @body 
* @access Login required
```

```sh
* @route POST /posts
* @description Create a new post
* @body {content, image}
* @access  Login reuqired
```
```sh
* @route GET /posts page=1&limit=10
* @description Get all posts an user can see with pagination 
* @body
* @access Login required
```

```sh
* @route PUT /posts/:id
* @description Update a post
* @body {Title, Address, Price, Bedroom, Bathroom, Square, image}
* @access Login required
```

```sh
* @route DELETE /posts/:id
* @description  Delete a post
* @body 
* @access Login required
```
### Bookmark
```sh
* @route POST /bookmark
* @description Bookmark a post
* @body 
* @access  Login required
```


# Diagram Relation
![image](https://user-images.githubusercontent.com/110405220/207801283-fb8c0ade-6b15-498c-a399-0f7afc73025b.png)








