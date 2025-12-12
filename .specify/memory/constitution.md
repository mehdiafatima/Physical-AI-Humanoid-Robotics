<!--
Sync Impact Report:
- Version change: Unknown (initial) → 1.0.0
- List of modified principles: All principles are new.
    - I. AI/Spec-Driven Development
    - II. Technical Accuracy & Zero Hallucinations
    - III. Clear, Engineering-Focused Educational Content
    - IV. Structured Content & Media Usage
    - V. Docusaurus Build & Deployment Integrity
    - VI. Strict Adherence to Constraints
- Added sections:
    - Project Scope and Deliverables
    - Quality Assurance and Compliance
    - Governance (rules are new)
- Removed sections: None
- Templates requiring updates:
    - .specify/templates/plan-template.md: ✅ (Reviewed, no changes needed)
    - .specify/templates/spec-template.md: ✅ (Reviewed, no changes needed)
    - .specify/templates/tasks-template.md: ✅ (Reviewed, no changes needed)
    - Command files in .gemini/commands/: ✅ (Reviewed, no changes needed)
    - Runtime guidance docs (README.md, docs/quickstart.md): ⚠ (None found, no updates possible)
- Follow-up TODOs if any placeholders intentionally deferred: None.
-->
# Physical AI & Humanoid Robotics — A Full Docusaurus Book + Integrated RAG Chatbot Constitution

## Core Principles

### I. AI/Spec-Driven Development
All project content, especially the book, MUST be generated using Spec-Kit Plus and Gemini CLI. Output MUST be a Docusaurus project (TypeScript + MDX) deployable to GitHub Pages. All content MUST be internally consistent, technically correct, and produce a fully working Docusaurus site.

### II. Technical Accuracy & Zero Hallucinations
All technical content (robotics, ROS 2, simulation, NVIDIA Isaac, VLA) MUST be rigorously accurate. Zero hallucinations are tolerated; all robotics terms and workflows MUST adhere to real tooling standards. Code samples MUST be valid, testable, and runnable.

### III. Clear, Engineering-Focused Educational Content
Content MUST be written in a clear, explanatory, engineering-focused tone, prioritizing practical robotics workflows. It MUST cater to engineering students, roboticists, and AI developers, following a progressive learning path: theory → implementation → simulation → deployment. Overly academic language MUST be avoided.

### IV. Structured Content & Media Usage
Content MUST be highly structured, utilizing diagrams (Mermaid), tables, and structured examples. Code samples (Python, ROS 2, C++, YAML, Isaac scripts) MUST be included where necessary. Each module MUST include an overview, weekly breakdown, labs, assignments, and evaluation criteria.

### V. Docusaurus Build & Deployment Integrity
The Docusaurus build MUST succeed with zero errors. Sidebars MUST generate correctly according to the specified structure. All .mdx files MUST be created with correct paths and frontmatter. Content MUST load successfully locally, and the final book MUST be deployable without modification. Chatbot integration placeholders MUST be added.

### VI. Strict Adherence to Constraints
All Spec-Kit Plus functions MUST be followed strictly. File paths MUST conform to `/physical-ai-book/docs/...`. Each module MUST be self-contained and internally coherent. No duplicate pages, empty placeholders, or broken links are permitted.

## Project Scope and Deliverables

This project aims to deliver a production-ready educational book on Physical AI and Humanoid Robotics, integrated with a RAG chatbot. The primary deliverable is the Docusaurus book, with chatbot integration to follow.

## Quality Assurance and Compliance

All content and code samples MUST undergo rigorous technical review to ensure accuracy. Compliance with Spec-Kit Plus functions and specified structural requirements will be continuously verified. Automated checks for Docusaurus build integrity, link validation, and file path adherence MUST be implemented.

## Governance

This constitution is the foundational document guiding all project development. Any amendments require a formal proposal, documentation of rationale, and approval by project leads. All changes to this constitution MUST adhere to semantic versioning. All pull requests and code reviews MUST verify compliance with these stated principles. For runtime development guidance, refer to project-specific documentation and the Spec-Kit Plus guidelines.

**Version**: 1.0.0 | **Ratified**: 2025-12-12 | **Last Amended**: 2025-12-12