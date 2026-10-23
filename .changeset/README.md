# Changesets

Add a changeset for every user-facing change:

```bash
npx changeset
```

Choose `patch`, `minor`, or `major`, describe the change, and commit the
generated markdown file. The release workflow will open a version update pull
request. Merging that pull request publishes the package to npm.
