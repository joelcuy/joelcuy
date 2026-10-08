# Profile maintenance

The public profile is `README.md`. Its content was refreshed in October 2026 from Joel's supplied CV, `wineflow-platform`, and `terraform-infra-shared`.

## Content decisions

- The CV is the source for business outcomes, career history, education, certification, and personal details. The 76% hosting-cost reduction is a **target on migration completion**, not a completed saving.
- Lead with Joel's transferable engineering achievements and measurable outcomes. Employer and product names are omitted from the public profile; the repositories provide evidence for the work and current stack.
- Current package manifests and architecture informed the stack. Kysely is the runtime SQL query layer; Prisma owns the shared schema and generates Kysely types.
- The six-service figure describes the original monorepo consolidation, not today's application count. Unreleased products are not presented as delivered achievements.
- Removed older badge claims including Koa, Sequelize, Angular, Next.js, Apollo/GraphQL, MongoDB/Mongoose, Firebase, machine-learning libraries, and hardware/mobile tooling. Svelte and R remain in the earlier-work section because the CV supports them.
- Contact links use the existing LinkedIn URL and the CV's email. The CV's phone number and internal infrastructure details are omitted.

## Artwork

```sh
node scripts/generate-assets.mjs
```

Commit all four generated SVGs when changing the artwork. The README uses GitHub's `<picture>` pattern to select light or dark artwork. CSS animations are decorative; every frame has readable content, and `prefers-reduced-motion` disables motion. There are no external fonts, JavaScript in the SVGs, scheduled workflows, or hosted image APIs.

## Design research

These were inspiration references, rather than copied templates or assets:

- [Creative Profile README](https://github.com/coderjojo/creative-profile-readme): examples of profiles with a distinct visual identity.
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme): animated, themed, and minimal approaches.
- [Awesome GitHub Profile](https://github.com/beydemirfurkan/awesome-github-profile): self-contained SVG artwork and deliberate use of motion.
- [Anthony Fu's profile](https://github.com/antfu/antfu): a compact, useful navigation row.

The route illustration refers to Joel's logistics work; it is not a diagram of private infrastructure. The table-tennis footer adds a personal detail from the CV.
