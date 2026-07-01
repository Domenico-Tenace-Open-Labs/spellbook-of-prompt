# SpellBook of prompt — Copilot Instructions

## Overview

SpellBook of prompt is a collection of tested prompts and templates to automate tasks across multiple LLM platforms. This document gives Copilot-focused guidance for contributors and maintainers. 

## Goals

- Provide clear, reusable prompt templates
- Keep examples model-agnostic when possible
- Document integration and testing patterns

## Repository Conventions

- Organize prompts by model and use case under `src/content`.
- Each prompt should include a short README/example and expected input/output.
- Keep metadata (compatibility, tags, difficulty) in the same folder as the prompt.

## Writing Prompts

- Keep prompts concise and deterministic: prefer explicit instructions and examples.
- Provide at least one example input and output for every prompt.
- Add a short troubleshooting section for common failure modes.

## Testing & Validation

- Validate prompts manually across at least two models if possible.
- Include edge cases and negative examples in tests/examples.

## Contribution Workflow

1. Search existing prompts to avoid duplicates.
2. Add or update a prompt in the appropriate model/category folder.
3. Include documentation, examples, and metadata.
4. Open a PR and request a review; include a short note about model(s) tested.

## Documentation Template (short)

Use the following minimum structure in prompt READMEs:

- **Title**: Short descriptive name
- **Compatibility**: Supported models or platforms
- **Use case**: One-line summary
- **Example**: Input and expected output
- **Notes**: Any constraints, token tips, or safety considerations

## Security & Privacy

- Never include real secrets or sensitive data in prompts or examples.
- Sanitize any user-provided content before storing or reusing it.

## Color Palette (brand)

The project's palette — include these when creating visuals, docs, or UI samples:

- Primario → _#FA892D_
- Secondario → _#1E1E2E_
- Terziario → _#737373_

## Helpful Links

- Project readme: README.md
- Content folder: `src/content`
