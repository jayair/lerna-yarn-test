# lerna-yarn-test

### What's in the repo

The repo uses Lerna with Yarn Workspaces. It includes **2 Serverless services** and **1 shared package** in the following structure:

```
/packages
  /logger
/services
  /users
  /posts
```

The `users` service has the `logger` package as a dependency, whereas the `posts` service does not.


### Expected behavior

- If a change is made in `posts`, only the `posts` service will be deployed on git push. The `users` service will be skipped.
- If a change is made in `users`, only the `users` service will be deployed on git push. The `posts` service will be skipped.
- If a change is made in `logger`, only the `users` service will be deployed on git push. The `posts` service will be skipped.


### Test

Start by forking the repo and adding it to your Seed account.

#### Case 1

1. Successfully deploy it once
2. Make a change in `packages/logger/index.js` and git push
3. Check that the `users` service is deployed
4. Check that the `posts` service is skipped

#### Case 2
1. Make a change in `services/posts/handler.js` and git push
2. Check that the `users` service is skipped
3. Check that the `posts` service is deployed

#### Case 3
1. Make a change in `seed.yml` and git push
2. Check that both the `users` and `posts` services are deployed
