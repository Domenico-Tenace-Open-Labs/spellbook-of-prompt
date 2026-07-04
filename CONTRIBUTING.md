# Contributing to SpellBook of prompt

Thank you for your interest in contributing to this project. The goal of SpellBook of prompt is to collect useful, clear, and testable prompts, organized in a simple and easy-to-browse structure.

## How to contribute a new prompt

### 1. Check whether the prompt already exists

Before adding a new one, make sure the topic is not already covered in the documentation to avoid duplicates or overly similar content.

### 2. Choose the right category

Add the new prompt to one of the folders under src/content/docs, for example:

- Start Here
- Content Creation

If the prompt belongs to a new area, you can create a new folder with a clear and descriptive name.

### 3. Create an MDX file for the prompt

Each prompt should be saved as an .mdx file in the most appropriate folder. A sample structure is:

```mdx
---
title: Prompt title
description: A short description of what the prompt does.
---

## Description

A description of the prompt's intended use case.

## Prompt

Prompt text...

## Output Example

Example of the expected result.

## Explanation

### Key Features

- Key point 1
- Key point 2

### Best Use Cases

- Use case 1
- Use case 2

### Tips to Get the Best Results

- Tip 1
- Tip 2
```

### 4. Follow these guidelines

To keep the collection consistent, each new prompt should:

- have a clear and descriptive title;
- explain when and why to use it;
- include an input/output example;
- be concise and deterministic;
- use clear placeholders such as [topic], [language], or [platform] when needed;
- avoid including sensitive data or real secrets.

### 5. Verify the result locally

Before opening a pull request, run:

```bash
npm install
npm run build
```

This ensures that the documentation and MDX files are generated correctly.

### 6. Open a pull request

When the prompt is ready:

1. create a dedicated branch;
2. add the file or requested changes;
3. clearly describe what you added;
4. open a pull request with an explanatory title.

## Quick checklist

Before submitting your contribution, make sure you have:

- [ ] checked that the prompt does not already exist;
- [ ] placed the file in the right folder;
- [ ] written a title, description, and example;
- [ ] verified that the project builds without errors.

Thank you for helping make SpellBook of prompt even more useful for the community.
