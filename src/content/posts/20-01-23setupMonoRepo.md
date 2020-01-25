---
title: Setting up the MonoRepo
date: 2020-01-23
published: true
tags: ['MonoRepo', 'Setup', 'Vue Components']
series: false
canonical_url: false
description: "As an alternative to bit.dev (open source), I set up a MonoRepo designed to be the dev environment for all my Vue components."
---

### Setting up the MonoRepo

The new MonoRepo is intended to be the development environment for all my Vue single-file-components: each component's use will be demonstrated on a separate page; each will have a version number; the .vue file will be copied into new projects.

1. Created a new GitHub repo "monorepo".
2. Created a new VueCLI project with my new preset "monorepopreset" (babel, eslint, router, node-sass, unit-jest).  Router allows each page to demonstrate the use of one component.
3. Initial local commit (required `git add` of each file).
4. Add local repo to GitHub: git remote add origin https://github.com/bruml2/monorepo.git
5. Push local to GitHub: git push -u origin master
6. Add LICENSE file to local.
7. Add ruml favicon.

**ToDo**: add eslint rules to package.json

1. Read about using router!