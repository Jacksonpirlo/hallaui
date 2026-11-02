# @hallaco/ui

Reusable accessible UI primitives for Halla products.

The package contains Halla's visual tokens and reusable components while application-specific data and business rules stay in the consuming project.

## Components

- `AlertDialog`
- `Badge`
- `Button`
- `Card` and card primitives
- `Icon`
- `EmptyState`
- `FilterChips`
- `Drawer` (built on Radix Dialog)
- `Skeleton`
- `Tooltip` (built on Radix Tooltip)

## Usage

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  EmptyState,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@hallaco/ui";
```

```tsx
<Button variant="primary" size="md" loading={isSaving}>
  Save
</Button>

<Card>
  <CardHeader>
    <CardTitle>Example card</CardTitle>
  </CardHeader>
  <CardContent>Reusable content goes here.</CardContent>
</Card>

<Badge variant="success">Available</Badge>
<EmptyState title="Nothing here yet" description="Try another option." action={<Button>Continue</Button>} />
<Skeleton className="h-10 w-full" />
```

Interactive Radix primitives should be wrapped with their provider/root components:

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button aria-label="More information" variant="ghost">Info</Button>
    </TooltipTrigger>
    <TooltipContent>More information</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

```tsx
<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete item?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

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
