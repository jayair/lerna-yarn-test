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


### Test 1
1. Fork the repo and add it to your Seed account
2. Successfully deploy it once
3. Make a change in `packages/logger/index.js` and git push
4. Check the `users` service is deployed
5. Check the `posts` service is skipped

### Test 2
1. Make a change in `services/posts/handler.js` and git push
2. Check the `users` service is skipped
3. Check the `posts` service is deployed

### Test 3
1. Make a change in `seed.yml` and git push
2. Check both `users` and `posts` services are deployed
