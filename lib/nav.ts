// Plain data module (NOT "use client") so it can be imported by both server
// components (the Who-we-serve hub, footer) and the client header. Single source
// of truth for the audience segments.
export const SERVE_GROUPS = [
  {
    heading: "Public & Labor Sector",
    items: [
      {
        label: "Unions & Associations",
        href: "/unions-associations",
        desc: "Career mobility for your members",
      },
      {
        label: "Workforce Boards",
        href: "/workforce-boards",
        desc: "Hit your placement outcomes",
      },
    ],
  },
  {
    heading: "Private Sector",
    items: [
      {
        label: "Employers",
        href: "/employers",
        desc: "Build & retain skilled talent",
      },
    ],
  },
  {
    heading: "Education",
    items: [
      {
        label: "Institutions & Schools",
        href: "/education",
        desc: "Credential & place your learners",
      },
    ],
  },
];
