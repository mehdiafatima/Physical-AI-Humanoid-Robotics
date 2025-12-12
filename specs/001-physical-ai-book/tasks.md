# Tasks: Physical AI & Humanoid Robotics Book Generation

**Input**: Design documents from `specs/001-physical-ai-book/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- All paths refer to content within the `physical-ai-book/` directory.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Cleaning existing Docusaurus docs and creating the new structured hierarchy.

- [ ] T001 Clean the `physical-ai-book/docs` directory (recursively delete contents, keep directory).
- [ ] T002 Create base directories under `physical-ai-book/docs/` with numeric prefixes.
    - `physical-ai-book/docs/01-introduction/`
    - `physical-ai-book/docs/02-setup-guides/`
    - `physical-ai-book/docs/03-module-1-ros2/`
    - `physical-ai-book/docs/04-module-2-digital-twin/`
    - `physical-ai-book/docs/05-module-3-nvidia-isaac/`
    - `physical-ai-book/docs/06-module-4-vla-humanoids/`
    - `physical-ai-book/docs/07-references/`
    - `physical-ai-book/docs/08-chatbot/`
- [ ] T003 [P] Create `_category_.json` files for top-level directories in `physical-ai-book/docs/`.
    - `physical-ai-book/docs/01-introduction/_category_.json` (label: "Introduction")
    - `physical-ai-book/docs/02-setup-guides/_category_.json` (label: "Setup Guides")
    - `physical-ai-book/docs/03-module-1-ros2/_category_.json` (label: "Module 1: ROS 2")
    - `physical-ai-book/docs/04-module-2-digital-twin/_category_.json` (label: "Module 2: Digital Twin")
    - `physical-ai-book/docs/05-module-3-nvidia-isaac/_category_.json` (label: "Module 3: NVIDIA Isaac")
    - `physical-ai-book/docs/06-module-4-vla-humanoids/_category_.json` (label: "Module 4: VLA & Humanoid Robotics")
    - `physical-ai-book/docs/07-references/_category_.json` (label: "References")
    - `physical-ai-book/docs/08-chatbot/_category_.json` (label: "Chatbot Integration")
- [ ] T004 [P] Create `_category_.json` for `physical-ai-book/docs/02-setup-guides/01-digital-twin-workstation/` (label: "Digital Twin Workstation")
- [ ] T005 [P] Create `_category_.json` for `physical-ai-book/docs/02-setup-guides/02-physical-ai-edge-kit/` (label: "Physical AI Edge Kit")
- [ ] T006 [P] Create `_category_.json` for `physical-ai-book/docs/02-setup-guides/03-cloud-native-dev/` (label: "Cloud-Native Development")

---

## Phase 3: User Story 1 - Generate Complete Docusaurus Book (Priority: P1) 🎯 MVP

**Goal**: Generate all MDX files with frontmatter and initial content according to the plan.

**Independent Test**: The Docusaurus project can be built locally (`npm install && npm run build`) and served (`npm run serve`), with all pages, content, and navigation rendering correctly.

### Implementation for User Story 1

#### Introduction
- [ ] T007 [US1] Create `physical-ai-book/docs/01-introduction/overview.mdx` with frontmatter, title, description, and initial content.

#### Setup Guides
- [ ] T008 [P] [US1] Create `physical-ai-book/docs/02-setup-guides/01-digital-twin-workstation/index.mdx` with frontmatter and content.
- [ ] T009 [P] [US1] Create `physical-ai-book/docs/02-setup-guides/02-physical-ai-edge-kit/index.mdx` with frontmatter and content.
- [ ] T010 [P] [US1] Create `physical-ai-book/docs/02-setup-guides/03-cloud-native-dev/index.mdx` with frontmatter and content.

#### Module 1 — ROS 2
- [ ] T011 [P] [US1] Create `physical-ai-book/docs/03-module-1-ros2/01-intro.mdx` with frontmatter and content.
- [ ] T012 [P] [US1] Create `physical-ai-book/docs/03-module-1-ros2/02-nodes-topics.mdx` with frontmatter and content.
- [ ] T013 [P] [US1] Create `physical-ai-book/docs/03-module-1-ros2/03-services-actions-params.mdx` with frontmatter and content.
- [ ] T014 [P] [US1] Create `physical-ai-book/docs/03-module-1-ros2/04-urdf-modeling.mdx` with frontmatter and content.
- [ ] T015 [P] [US1] Create `physical-ai-book/docs/03-module-1-ros2/05-launch-files.mdx` with frontmatter and content.

#### Module 2 — Digital Twin
- [ ] T016 [P] [US1] Create `physical-ai-book/docs/04-module-2-digital-twin/overview.mdx` with frontmatter and content.
- [ ] T017 [P] [US1] Create `physical-ai-book/docs/04-module-2-digital-twin/labs.mdx` with frontmatter and content.

#### Module 3 — NVIDIA Isaac
- [ ] T018 [P] [US1] Create `physical-ai-book/docs/05-module-3-nvidia-isaac/overview.mdx` with frontmatter and content.
- [ ] T019 [P] [US1] Create `physical-ai-book/docs/05-module-3-nvidia-isaac/isaac-sim-basics.mdx` with frontmatter and content.
- [ ] T020 [P] [US1] Create `physical-ai-book/docs/05-module-3-nvidia-isaac/perception-controls.mdx` with frontmatter and content.

#### Module 4 — VLA & Humanoids
- [ ] T021 [P] [US1] Create `physical-ai-book/docs/06-module-4-vla-humanoids/overview.mdx` with frontmatter and content.
- [ ] T022 [P] [US1] Create `physical-ai-book/docs/06-module-4-vla-humanoids/humanoid-control.mdx` with frontmatter and content.
- [ ] T023 [P] [US1] Create `physical-ai-book/docs/06-module-4-vla-humanoids/assignments.mdx` with frontmatter and content.

#### References
- [ ] T024 [P] [US1] Create `physical-ai-book/docs/07-references/index.mdx` with frontmatter and content.

#### Chatbot Placeholder
- [ ] T025 [P] [US1] Create `physical-ai-book/docs/08-chatbot/integration.mdx` with frontmatter and content (as per `FR-005` in `spec.md`).

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Ensure quality and adherence to specifications after initial content generation.

- [ ] T026 Validate all generated MDX files for syntactic correctness.
- [ ] T027 Validate all internal links to match file paths.
- [ ] T028 Validate all code blocks for correctness (syntax, ROS 2, Isaac Sim).
- [ ] T029 Ensure folder paths match exactly as specified.
- [ ] T030 Confirm no duplicate or missing pages.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **User Story 1 (Phase 3)**: Depends on Setup completion.
- **Polish (Phase N)**: Depends on User Story 1 completion.

### User Story Dependencies

- User Story 1 (P1): Can start after Foundational (Phase 1). No dependencies on other stories.

### Within Each User Story

- Tasks within Phase 1 should be completed sequentially where necessary (T001 then T002), then T003-T006 can be parallel.
- All parallel tasks [P] within Phase 3 (User Story 1) can be executed in parallel after their respective directory structures are in place.
- Polish tasks (Phase N) can begin once all content generation tasks are marked complete.

### Parallel Opportunities

- Tasks T003 to T006 are parallel for creating `_category_.json` files.
- All content creation tasks (T007 to T025) are parallelizable once their respective directories are created.
- Polish tasks (T026 to T030) can be executed in parallel.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup.
2. Complete Phase 3: User Story 1 (all content generation tasks).
3. Complete Phase N: Polish & Cross-Cutting Concerns.
4. **STOP and VALIDATE**: Verify the generated Docusaurus project builds and serves correctly.
5. Deploy/demo if ready.

### Incremental Delivery

- All tasks directly contribute to the MVP of the book generation.

### Parallel Team Strategy

With multiple developers:
1. One developer completes Phase 1 (Setup).
2. Multiple developers can work in parallel on the content generation tasks in Phase 3 (User Story 1).
3. One or more developers can then complete Phase N (Polish & Cross-Cutting Concerns).

---

## Notes

- [P] tasks = different files, no dependencies
- [US1] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests (validations in Polish phase) before considering complete
- Commit after each task or logical group
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
