# @hallaco/ui

Reusable accessible UI primitives for Halla products.

The package contains Halla's visual tokens and reusable components while application-specific data and business rules stay in the consuming project.

## Components

- `Icon`
- `FilterChips`
- `Drawer` (built on Radix Dialog)

## Development

```bash
npm run build
npm pack --dry-run
```

## Releases

Releases are managed with [Changesets](https://github.com/changesets/changesets).
For every user-facing change, create a changeset:

```bash
npx changeset
git add .changeset
git commit -m "docs: add release changeset"
git push
```

The release workflow opens a pull request that updates the package version and
changelog. Merging that pull request publishes the package to npm and creates a
Git tag. npm Trusted Publishing must be enabled for this repository and package
with the `master` branch and `.github/workflows/release.yml` workflow.

Projects consuming this package can use Dependabot to receive update pull
requests. After reviewing and merging one:

```bash
npm install
```
