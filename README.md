# ChadGPT UI

This is forked from [langchainjs](https://github.com/hwchase17/langchainjs).
[Backend](https://github.com/kevin-fruitful/chadgpt-backend)

ChadGPT UI is the frontend code for the ETH Tokyo 2023 Hackathon ChadGPT project.

[ETH Global ChadGPT showcase](https://ethglobal.com/showcase/chadgpt-kikng)

Thank you to [Filecoin FVM](https://fvm.filecoin.io/) for awarding us with a prize!

## Getting Started

This repo uses `Turbo` which is a monorepo package manager. This means we have multiple "workspaces" in a single repo.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository.

Install `langchain`

```zsh
yarn add langchain
```

We will use the workspace `test-exports-vercel`
`package.json` scripts have been updated to only run the workspace we want.

If there's no `.env` file:

```zsh
touch .env
```

Assign an OpenAI API key to the env var `NEXT_PUBLIC_OPENAI_API_KEY`
We list all necessary env vars we have to set for this project in `.env.example`. DON'T SET THE API KEY in `.env.example`! Set it in `.env`.

```zsh
yarn build
```

```zsh
yarn dev
```

Starts the server on `http://localhost:3000`

## Built With

- [next.js](https://github.com/vercel/next.js/)
- [langchainjs](https://github.com/hwchase17/langchainjs)

## ETH Tokyo ChadGPT Team

- [Kevin Park](https://github.com/kevin-fruitful) [@kevin-fruitful](https://github.com/kevin-fruitful)
- [Ariel Chen](https://github.com/Arielpopcorn) [@Arielpopcorn](https://github.com/Arielpopcorn)
- [Caitlin Zhang](https://github.com/caitlinthebest) [@caitlinthebest](https://github.com/caitlinthebest)
- [Tesa Ho](https://github.com/tesaho) [@tesaho](https://github.com/tesaho)
- [Tim Cox](https://github.com/timncox) [@timncox](https://github.com/timncox)

## Acknowledgments

- The ETH Tokyo Hackathon organizers and sponsors for providing the opportunity to build this project.
- The amazing mentors and fellow participants at ETH Tokyo for their support and collaboration.
-- Special shoutout to [Cole Perkins](https://twitter.com/coleperkins_)
-- Special shoutout to [Jeff Lau](https://github.com/jefflau) [@jefflau](https://github.com/jefflau)
- Everyone who has contributed to the open-source tools and libraries used in this project.
