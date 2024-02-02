## :memo: Descrição

Projeto feito em Node utilizando postgresSQL e docker para criar um container de toda a aplicação.

## :books: Funcionalidades

- <b>Cadastrar usuário no banco</b>
- <b>Deletar usuário</b>
- <b>Buscar todos os usuário</b>
- <b>Reordernar os usuário</b>
- <b>Calculo para gerenciamento de rotas por coordenada de usuário cadastrado</b>

## :wrench: Tecnologias

- node 18.16.0;
- express 4.18.2;
- pg 8.8.0;
- nodemon 2.0.20;
- cors 2.8.5
- Docker

## :rocket: Rodando o projeto

para ligar o container

```
docker compose up -d
```

Para rodar no banco via bash

```
docker exec -it pgdata bash
```

para logar no banco de dados via bash

```
psql -U root cleanerdb

```

copie e cole as instruções SQL dentro da CLI

```
CREATE DATABASE cleanerdb;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
name VARCHAR NOT NULL,
email VARCHAR UNIQUE,
phone VARCHAR,
coordinateX VARCHAR,
coordinateY VARCHAR
);
```

para instalar as dependências:

```
npm install

```

Para iniciar o projeto:

```
npm run dev
```
