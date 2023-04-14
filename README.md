# 🦜️🔗 LangChain.js

⚡ Building applications with LLMs through composability ⚡

[![CI](https://github.com/hwchase17/langchainjs/actions/workflows/ci.yml/badge.svg)](https://github.com/hwchase17/langchainjs/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/langchainai.svg?style=social&label=Follow%20%40LangChainAI)](https://twitter.com/langchainai) [![](https://dcbadge.vercel.app/api/server/6adMQxSpJS?compact=true&style=flat)](https://discord.gg/6adMQxSpJS)

**Production Support:** As you move your LangChains into production, we'd love to offer more comprehensive support.
Please fill out [this form](https://forms.gle/57d8AmXBYp8PP8tZA) and we'll set up a dedicated support Slack channel.

## ~ START HERE ETH TOKYO TEAM ~

This is forked from [langchainjs] (https://github.com/hwchase17/langchainjs).
This repo uses `Turbo` which is a monorepo package manager. This means we have multiple "workspaces" in a single repo.

1.

`yarn add langchain`

2.

We will use the workspace `test-exports-vercel`
`package.json` scripts have been updated to only run the workspace we want.

```typescript
import { OpenAI } from "langchain/llms/openai";
```

## 🤔 What is this?

Large language models (LLMs) are emerging as a transformative technology, enabling
developers to build applications that they previously could not.
But using these LLMs in isolation is often not enough to
create a truly powerful app - the real power comes when you can combine them with other sources of computation or knowledge.

This library is aimed at assisting in the development of those types of applications.

## 📖 Full Documentation

For full documentation of prompts, chains, agents and more, please see [here](https://js.langchain.com/docs/).

## Relationship with Python LangChain

This is built to integrate as seamlessly as possible with the [LangChain Python package](https://github.com/hwchase17/langchain). Specifically, this means all objects (prompts, LLMs, chains, etc) are designed in a way where they can be serialized and shared between languages.

The [LangChainHub](https://github.com/hwchase17/langchain-hub) is a central place for the serialized versions of these prompts, chains, and agents.

## 💁 Contributing

As an open source project in a rapidly developing field, we are extremely open to contributions, whether it be in the form of a new feature, improved infra, or better documentation.

Check out [our contributing guidelines](CONTRIBUTING.md) for instructions on how to contribute.
