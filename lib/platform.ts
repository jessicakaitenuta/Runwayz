// Platform feature content. Two audiences (talent / partners), each a set of
// major-feature sections. Each section has a short description and 1-N expandable
// sub-features (H3 + description + image).
export type Feature = {
  id: string;
  title: string;
  body: string;
  comingSoon?: boolean;
  discuss?: boolean;
};
export type FeatureSectionData = {
  id: string;
  title: string;
  description: string;
  features: Feature[];
};
export type Audience = {
  key: "talent" | "partners";
  label: string;
  sections: FeatureSectionData[];
};

export const PLATFORM: Audience[] = [
  {
    key: "talent",
    label: "For Talent",
    sections: [
      {
        id: "career-exploration",
        title: "Career Exploration",
        description: "Find the paths worth pursuing, and see exactly where you stand against them.",
        features: [
          { id: "matchmaker", title: "Matchmaker", body: "Answer a few questions and get matched to career paths that fit your interests, strengths, and goals." },
          { id: "browse", title: "Browse career paths", body: "Explore real, in-demand career paths backed by O*NET occupational data." },
          { id: "favorite", title: "Favorite career paths", body: "Save the paths you're interested in to track, compare, and follow over time." },
          { id: "alerts", title: "Opportunity alerts", body: "Get alerted the moment a relevant opportunity opens in a path you care about." },
          { id: "alignment", title: "See your alignment", body: "See how your current profile measures up to the requirements of your favorited paths." },
        ],
      },
      {
        id: "profile-development",
        title: "Profile Development",
        description: "Build a profile that proves what you can do, and closes the gaps to your goals.",
        features: [
          { id: "guided", title: "Guided profile development", body: "Step-by-step guidance to build a profile that actually stands out to employers." },
          { id: "portfolio", title: "Project portfolio", body: "Showcase project-based work in a rich, visual portfolio." },
          { id: "close-gaps", title: "Close the gaps", body: "Pinpoint required and recommended certifications, skill gaps, and projects to align to your target paths." },
          { id: "wbl-tracker", title: "Work-based learning tracker", body: "Log work-based learning hours and get them verified and approved." },
        ],
      },
      {
        id: "connect",
        title: "Connect with Opportunities",
        description: "Get in front of employers, unions, and associations, early and often.",
        features: [
          { id: "apply", title: "Apply to open roles", body: "Apply directly to open positions from employers, unions, and associations." },
          { id: "tailored", title: "Tailored applications", comingSoon: true, body: "Build a custom profile for each application that surfaces your most relevant projects, experiences, and certifications." },
          { id: "talent-pools", title: "Join talent pools", body: "Express interest in upcoming opportunities before they're even posted." },
          { id: "requirements-early", title: "See requirements early", body: "Know the exact requirements ahead of time so you can check them off before the job opens." },
        ],
      },
      {
        id: "advance",
        title: "Keep Advancing",
        description: "Once you're in, keep climbing toward higher-paying, more senior work.",
        features: [
          { id: "earning", title: "Grow your earning potential", body: "Once you're in a role, see the next certifications and skills that move you into more senior, higher-paying work." },
          { id: "adjacent", title: "Explore adjacent paths", body: "Discover adjacent career paths or chart a deliberate career change." },
        ],
      },
    ],
  },
  {
    key: "partners",
    label: "For Recruiting Partners",
    sections: [
      {
        id: "search-source",
        title: "Search & Source Talent",
        description: "Find ready, verified talent, and dig into the details that matter.",
        features: [
          { id: "filter", title: "Filter & search", body: "Search and filter talent by skills, certifications, location, readiness, and more." },
          { id: "profiles", title: "See full profiles", body: "View rich candidate profiles with portfolios and verified work-based learning." },
          { id: "runwayz-score", title: "Runwayz score", comingSoon: true, body: "See a Runwayz score that summarizes a candidate's readiness at a glance." },
        ],
      },
      {
        id: "hire",
        title: "Hire Interested Talent",
        description: "Reach the people who already want to work with you.",
        features: [
          { id: "early-pool", title: "Early-applicant talent pools", body: "See who's interested in an upcoming opportunity before you open the role." },
          { id: "review-contact", title: "Review & contact applicants", body: "Review applicants to your open roles and reach out directly." },
        ],
      },
      {
        id: "approve-wbl",
        title: "Approve Work-Based Learning",
        description: "Verify the on-the-job hours your talent is putting in.",
        features: [
          { id: "approve-hours", title: "Approve hours", body: "Review and approve work-based learning hours for the talent you sponsor." },
        ],
      },
      {
        id: "ecosystem",
        title: "Connect to the Talent Ecosystem",
        description: "Plug into the local network of schools, programs, and partners.",
        features: [
          { id: "partner-network", title: "Partner network", discuss: true, body: "See your institutional and school partners, refer talent, and receive referred talent from local partners." },
        ],
      },
    ],
  },
];
