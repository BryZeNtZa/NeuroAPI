<p align="center">
  API side of the Neuro app, a psycho healthcare application
</p>

# Business context


## Tooling
Project tooling:

- Platform: NodeJS 16+
- Framework: [NestJS](https://docs.nestjs.com/)
- Testing: Jest
- Database: MongoDB
- Containeurization: Docker/Compose
- API: Swagger 3
- Logging: 


## Design

### Modules
The Neuro API code is organized around [feature modules](https://docs.nestjs.com/modules).
All the application's modules are found in the folder `./src/modules`.
To create a modules type the command: `nest g module modules/module-name`
Then manually create the module's folders hierarchy as follow:

|- module-name
|  |
|  |- domain
|  |  |
|  |  |- schemas
|  |  |  |
|  |  |  |- `{model-name}`.schema.ts
|  |  |  |- ...
|  |  |  
|  |  |- dto
|  |  |  |
|  |  |  |- `{transfer-operation-name}`.dto.ts
|  |  |  |- ...
|  |  |  
|  |- repository
|  |     |
|  |     |- `{repository-name}`.repository.ts
|  |     |
|  |- services
|  |
|
|   -controllers


Note: We use the `schema` approach instead of `entity` approach because we choosed MongoDB.

Project structure is as follows:

neuro-api
|
|- src
|  |
|  |- modules
|  |  |
|  |  |- `module 1`
|  |  |   {module 1 structure here: domain, repository, services, controllers}
|  |  |
|     |- `module 2`
|     |   {module 2 structure here: domain, repository, services, controllers}
|     |
|     |- `module n`
|   |
|
|  - core


## Tools integration

### MongoDB
We use [Mongoose](https://mongoosejs.com/) the most popular and mature MongoDB object modeling tool.
- Mongoose dependency installation
`npm i @nestjs/mongoose mongoose`

- [NestJs config](https://docs.nestjs.com/techniques/configuration) management lib 
Allowing to define app params as environment variables (.env) separated from the sources, as per the [3rd recommendation of 12 Factor App](https://12factor.net/config)



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support



## Stay in touch


## License

Nest is [MIT licensed](LICENSE).
