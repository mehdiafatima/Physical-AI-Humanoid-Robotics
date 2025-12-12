---
id: 0001
title: Initialize Project Constitution
stage: constitution
date: 2025-12-12
surface: agent
model: gemini-cli
feature: none
branch: master
user: Mehdia
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

/sp.constitution /sp.constitution

Project: Physical AI & Humanoid Robotics — A Full Docusaurus Book + Integrated RAG Chatbot

Core Purpose:
Create a rigorous, technically accurate, and production-ready educational book covering Physical AI, embodied intelligence, humanoid robotics, ROS 2, Gazebo, Unity, NVIDIA Isaac, and VLA robotics. The book must be clean, structured, simulation-first, and optimized for real-world robotic development workflows.

Project Requirements:
1. AI/Spec-Driven Book Creation  
   - Entire book must be generated using Spec-Kit Plus and Gemini CLI.  
   - Output format: Docusaurus project (TypeScript + MDX).  
   - Deployment target: GitHub Pages (static).  
   - All content must be internally consistent, technically correct, and produce a fully working Docusaurus site.

2. Integrated RAG Chatbot  
   - Build a Retrieval-Augmented Generation chatbot for the book.  
   - Stack: OpenAI Agents SDK, FastAPI backend, Qdrant Cloud (Free Tier).  
   - Functionality:  
     • Answer questions about the book  
     • Support “answer only from selected text” mode  
     • Embed directly inside the deployed Docusaurus site  
   - Chatbot implementation will be developed after book creation—constitution should acknowledge it, but later commands must focus entirely on the book first.

Core Standards:
- Technical accuracy (robotics, ROS 2, simulation, NVIDIA Isaac, VLA).  
- Clarity for engineering students, roboticists, and AI developers.  
- Progressive learning: theory → implementation → simulation → deployment.  
- Zero hallucinations: all robotics terms and workflows must follow real tooling standards.  
- Code samples must be valid, testable, and runnable.

Book Structure Requirements:
Use the following sidebar and page architecture:

1. Introduction to Physical AI & Humanoid Robotics  
2. Setup Guides  
   - Setup Guide: Digital Twin Workstation  
   - Setup Guide: Physical AI Edge Kit  
   - Setup Guide: Cloud-Native Development  
3. Module 1: ROS 2 (Weeks 3–5)  
   - Chapter 1: Introduction to ROS 2  
   - Chapter 2: ROS 2 Nodes and Topics  
   - Chapter 3: Services, Actions, and Parameters  
   - Chapter 4: URDF Robot Modeling  
   - Chapter 5: Launch Files and Package Management  
4. Module 2: Digital Twin (Weeks 6–7)  
5. Module 3: NVIDIA Isaac (Weeks 8–10)  
6. Module 4: VLA & Humanoid Robotics (Weeks 11–13)  
7. References

Content Rules:
- Write in a clear, explanatory, engineering-focused tone.  
- Use diagrams (Mermaid), tables, and structured examples.  
- Include code (Python, ROS 2, C++, YAML, Isaac scripts) where needed.  
- Ensure each module has:  
  • Overview  
  • Weekly breakdown  
  • Labs  
  • Assignments  
  • Evaluation criteria  
- Avoid overly academic language; prioritize practical robotics workflows.

Success Criteria:
- Docusaurus build succeeds with zero errors.  
- Sidebars generate correctly using the structure above.  
- All .mdx files created with correct paths and frontmatter.  
- Content loads successfully when user runs the site locally.  
- Chatbot integration placeholder added, with full implementation handled later.  
- Final book is deployable without modification.

Constraints:
- Follow all Spec-Kit Plus functions strictly.  
- File paths must match: `/physical-ai-book/docs/...`  
- Each module must be self-contained and internally coherent.  
- No duplicate pages, no empty placeholders, no broken links.

End Goal:
A fully generated Physical AI & Humanoid Robotics book that is production-ready, deployable, technically accurate, and extensible — serving as the foundation for the RAG-powered conversational learning system.

## Response snapshot

The project constitution for "Physical AI & Humanoid Robotics — A Full Docusaurus Book + Integrated RAG Chatbot" has been created and updated to version 1.0.0. This includes defining core principles, project scope, quality assurance, and governance rules. The update also incorporated a Sync Impact Report as an HTML comment.

## Outcome

- ✅ Impact: Created and updated the project constitution to version 1.0.0, aligning it with project requirements and standards.
- 🧪 Tests: none
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Review the created constitution and provide feedback.
- 🧠 Reflection: Successfully created the initial project constitution, including principles, scope, quality assurance, and governance. Ensured consistency with existing templates and processes.

## Evaluation notes (flywheel)

- Failure modes observed: Shell script (create-phr.sh) execution failed due to environment issues (bash not found).
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Investigate alternative methods for shell script execution on Windows or use native PowerShell for PHR creation in future versions.
