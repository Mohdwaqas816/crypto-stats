# Project Title

**Crypto Stats** Latest crypto updates and trends (API changes reflect after every 2 hrs)

#### API routes Include

- Health
- Stats
- Deviation

## Author

- Mohd Waqas [Github Link](https://github.com/Mohdwaqas816)

## Tech Stack

**Backend:** Nodejs, Expressjs <br>
**Database:** MongoDB

## Pre-requisites

<details open>
<summary>Nodejs</summary>
<br>

- [NodeJS Download](https://nodejs.org/en/download/package-manager)

</details>
<details open>
<summary>Code Editor (Preferred)</summary>
<br>

- [VS Code Download](https://code.visualstudio.com/download)
</details>

<details open>
<summary>Docker Desktop Download (Optional)</summary>
<br>

- [Docker Desktop Download](https://www.docker.com/products/docker-desktop/)
</details>

## Running project Locally

Clone the project

```bash
  git clone https://github.com/Mohdwaqas816/crypto-stats.git
```

Go to the project directory

```bash
  cd crypto-stats
```

Download the required packages and libraries

```bash
  npm install
```

Local Folder Structure looks like

```bash
/crypto-stats
├── /config
│   └── db.js
├── /controllers
│   ├── /v1
│       ├── statsController.js
│       └── deviationController.js
│
├── /jobs
│   └── fetchCryptoDataJob.js
├── /models
│   └── cryptoData.js
├── /routes
│   ├── /v1
│       └── statsDeviationRoutes.js
│
├── /services
│   ├── /v1
│       ├── cryptoService.js
│       └── coinGeckoService.js
│
├── /utils
│   └── calculateDeviation.js
├── server.js
├── .env
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── Readme.md


-- Note:  Remember required files and place accordingly [env file], don't forget to add environment variable like database URI in .env file.

```

Start the server

```bash
  npm run dev
```

Confirm by pasting this url in browser

```bash
  http://localhost:5000/api/health
```

## Running project using Docker

Before running the project in Docker, ensure that you have Docker installed on your machine.
<br>

Build the docker image

```bash
  docker build -t crypto-stats-app
```

Run docker container

```bash
  docker run -p 5000:5000 -d crypto-stats-app
```

Check if the container is Running

```bash
  docker ps
```

## Woyila! congrats 🎊🎊🎉

# API Reference

## 1. Crypto latest trend:

#### health

```http
  GET /api/health
```

For checking whether the service is up or not

#### stats

```http
  GET /api/v1/stats?coin=bitcoin
```

| Parameter | Type         | Description                                                                          |
| :-------- | :----------- | :----------------------------------------------------------------------------------- |
| `coin`    | `characters` | **Required**. Example - bitcoin, ethereum, matic-network (3 coins allowed as of now) |

#### Deviation

```http
  GET /api/v1/deviation?coin=ethereum
```

| Parameter | Type         | Description                                                                          |
| :-------- | :----------- | :----------------------------------------------------------------------------------- |
| `coin`    | `characters` | **Required**. Example - bitcoin, ethereum, matic-network (3 coins allowed as of now) |

## Rest documentation coming 🔜
