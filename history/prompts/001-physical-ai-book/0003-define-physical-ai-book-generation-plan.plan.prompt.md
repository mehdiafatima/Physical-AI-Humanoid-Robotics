---
id: 0003
title: Define Physical AI Book Generation Plan
stage: plan
date: 2025-12-12
surface: agent
model: gemini-cli
feature: 001-physical-ai-book
branch: 001-physical-ai-book
user: Mehdia
command: /sp.plan
labels: ["planning", "docusaurus", "book-generation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-book/plan.md
tests:
  - none
---

## Prompt

/sp.plan ## Goal
Define the complete directory layout, MDX page scaffolding, and content structure for the book **Physical AI & Humanoid Robotics**, following `/sp.constitution` and `/sp.specify`.

This plan prepares everything for `/sp.tasks`, which will then generate the content **inside the user-created Docusaurus project** at: physical-ai-book/


The plan must be deterministic, with zero extra assumptions.

---

# 1. Docs Folder Structure (to be generated inside your existing project)

Inside `/physical-ai-book/docs/`, these folders must be created:

/introduction
/setup
/setup/digital-twin-workstation
/setup/physical-ai-edge-kit
/setup/cloud-native-dev
/module-1-ros2
/module-2-digital-twin
/module-3-isaac
/module-4-vla-humanoids
/references
/chatbot

---

# 2. Page Generation Plan (Exact Order)

## Introduction
- `introduction/overview.mdx`

## Setup Guides
- `setup/digital-twin-workstation/index.mdx`
- `setup/physical-ai-edge-kit/index.mdx`
- `setup/cloud-native-dev/index.mdx`

## Module 1 — ROS 2
- `module-1-ros2/intro.mdx`
- `module-1-ros2/nodes-topics.mdx`
- `module-1-ros2/services-actions-params.mdx`
- `module-1-ros2/urdf-modeling.mdx`
- `module-1-ros2/launch-files.mdx`

## Module 2 — Digital Twin
- `module-2-digital-twin/overview.mdx`
- `module-2-digital-twin/labs.mdx`

## Module 3 — NVIDIA Isaac
- `module-3-isaac/overview.mdx`
- `module-3-isaac/isaac-sim-basics.mdx`
- `module-3-isaac/perception-controls.mdx`

## Module 4 — VLA & Humanoids
- `module-4-vla-humanoids/overview.mdx`
- `module-4-vla-humanoids/humanoid-control.mdx`
- `module-4-vla-humanoids/assignments.mdx`

## References
- `references/index.mdx`

## Chatbot Placeholder
- `chatbot/integration.mdx`

---

# 3. Content Requirements for Each Page

Each MDX file must include:

- Frontmatter
- Clear title & description
- Engineering-focused explanations
- Diagrams (Mermaid)
- Technical details and workflows
- Valid code examples (Python, C++, ROS 2, YAML, Isaac)
- Labs / Assignments (for modules)
- Evaluation criteria
- Correct internal linking
- No placeholders or empty pages

---

# 4. Sidebar Structure (to be written to sidebar file later)

Required categories:

Introduction
Setup Guides
Module 1: ROS 2
Module 2: Digital Twin
Module 3: NVIDIA Isaac
Module 4: VLA & Humanoid Robotics
References
Chatbot Integration


Each category maps directly to the folders and pages above.

---

# 5. Validation Rules (for AI during content generation)

Before finalizing:

- All MDX files must be syntactically correct.
- All internal links must match file paths.
- All code blocks must be valid.
- Folder paths must match exactly.
- No duplicate or missing pages.

*No project build checks are required here.*
The user will handle Docusaurus initialization separately.

---

# 6. Output of `/sp.plan`

This plan must produce:

- Folder creation instructions
- MDX file creation instructions (empty scaffolds)
- Sidebar category mapping blueprint
- Content rules for `/sp.tasks`
- A deterministic plan so `/sp.tasks` can write content directly into the existing `physical-ai-book` project

## Response snapshot

The implementation plan for the "Physical AI & Humanoid Robotics Book Generation" has been created and written to `specs/001-physical-ai-book/plan.md`. This plan details the Docusaurus project structure, content requirements, and sidebar configuration, aligning with both the project constitution and the feature specification.

## Outcome

- ✅ Impact: Created the implementation plan for the Physical AI & Humanoid Robotics book generation, detailing the Docusaurus project structure, content requirements, and sidebar configuration.
- 🧪 Tests: none
- 📁 Files: Created specs/001-physical-ai-book/plan.md
- 🔁 Next prompts: Run /sp.tasks to generate detailed implementation tasks based on the plan.
- 🧠 Reflection: Successfully structured the user's detailed plan into the plan.md template, aligning it with both the constitution and feature specification. The plan provides a deterministic blueprint for subsequent task generation.

## Evaluation notes (flywheel)

- Failure modes observed: None during this step, as prior setup issues were resolved or worked around.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): None. Focus on implementing the next phase: task generation.
