# lerna-yarn-test

### What's in the repo
The repo uses Lerna with Yarn workspace. It includes 2 Serverless services and 1 shared package in the following structure
```
/packages
  /logger
/services
  /users
  /posts
```
The `users` service has the `logger` package as a dependency, where as the `posts` service does not.


### Expected behavior
- If a change is made in `posts`, only `posts` service will be deployed on git push. The `users` service will be skipped.
- If a change is made in `users`, only `users` service will be deployed on git push. The `posts` service will be skipped.
- If a change is made in `logger`, only `users` service will be deployed on git push. The `posts` service will be skipped.

### Steps to try
1. Fork the repo and add it to your Seed account
2. Successfully deploy it once
3. Make a change
