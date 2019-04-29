# Git Conventions

**One feature/enhancment/fix per commit.**

## Commit message
- Should be descriptive and specific.
- Follow the structure: `Section - Description`
  - _Section:_ as described below
  - _Description:_ should answer the question "If I apply this commit it will..."

## Sections

Should be one of the following.

Since every section contains sub-sections, SHOULD declare the sub-section name in the description.

- Core
- Name of feature module (example: Heros: Description)
- Shared
- Services (services belongs to core module but it's better to treat it as a separate section)
- Styles (when modify global style or style.scss)
- Packages: In case of add a new package or upgrade version.
- Docs: Modify Doc
- Global: RARELY used! only when we have too light modifications.

### Important !

The last commit at the end of task should be a packages commit contains the new version number.

Example: Packages: Upgrade version to vx.x.x

=> Upgrade version with + 0.0.1 at the end of every task unless it's a breacking change task (like creation of new feature module...) (upgrage +0.1.0).

=> With every new version please create new [Tag](https://gitlab.com/cloudspectator/forecast-V2/tags)  in gitlab repository with same commit logic.
