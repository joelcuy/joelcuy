# Profile maintenance

The public profile is `README.md`. Its content was refreshed in October 2026 from Joel's supplied CV and current application and infrastructure work.

## Content decisions

- Keep the profile concise and personal, highlighting a business perspective, a founder's mindset, and an interest in startup environments.
- Combine engineering work into three highlights: workflow automation, shared business logic across apps, and cloud infrastructure with Terraform. Describe the UK logistics platform without naming the employer or products.
- Discuss cloud benefits broadly. Keep private company initiatives and financial figures out of the repository.
- Current package manifests and architecture informed the stack. Kysely is the runtime SQL query layer; Prisma owns the shared schema and generates Kysely types.
- The CV supports education, certification, and personal details. Retain AWS Solutions Architect certification and Professional preparation; omit the earlier-work and peer-mentoring section.
- Removed older badge claims including Koa, Sequelize, Angular, Next.js, Apollo/GraphQL, MongoDB/Mongoose, Firebase, machine-learning libraries, and hardware/mobile tooling.
- Contact links use the existing LinkedIn URL and the CV's email. The CV's phone number and internal infrastructure details are omitted.
- Avoid em dashes throughout the profile, artwork, and supporting files.

## Artwork

```sh
node scripts/generate-assets.mjs
```

Commit all four generated SVGs when changing the artwork. The README uses GitHub's `<picture>` pattern to select light or dark artwork. CSS animations are decorative; every frame has readable content, and `prefers-reduced-motion` disables motion. The custom artwork has no external fonts, JavaScript in the SVGs, scheduled workflows, or hosted image APIs.

The My Stats section uses the original live GitHub Streak Stats card, with the username corrected to `joelcuy`. Its contribution and streak counts are fetched by the image service rather than written into the README.

## Design research

These were inspiration references, rather than copied templates or assets:

- [Creative Profile README](https://github.com/coderjojo/creative-profile-readme): examples of profiles with a distinct visual identity.
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme): animated, themed, and minimal approaches.
- [Awesome GitHub Profile](https://github.com/beydemirfurkan/awesome-github-profile): self-contained SVG artwork and deliberate use of motion.
- [Anthony Fu's profile](https://github.com/antfu/antfu): a compact, useful navigation row.

The route illustration refers to Joel's logistics work; it is not a diagram of private infrastructure. The table-tennis footer adds a personal detail from the CV.
