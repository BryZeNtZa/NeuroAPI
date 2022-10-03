<p align="center">
  <strong>API side of the Neuro app, a psycho healthcare application</strong>
</p>

## Business context
Problem: healthcare centers having issues with neuro ...
Solution: propose a mobile and application that will ...

## Project tooling

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

<pre>
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
|  |     |
|  |     |- `{transfer-operation-name}`.dto.ts
|  |     |- ...
|  |   
|  |- repository
|  |  |
|  |  |- `{repository-name}`.repository.ts
|  |  |- ...
|  |
|  |- services
|  |  |
|  |  |- `{service-name}`.service.ts
|  |  |- ...
|  |  
|  |-controllers
|  |  |
|  |  |- `{controller-name}`.controller.ts
|  |  |
|  |
|  |- app.module-name.module.ts (module bo)
|     (module bootstrap for aggregating all the module's artifacts)
</pre>


<strong>Note:</strong> We use the `schema` approach instead of `entity` approach because we choosed MongoDB.

Project structure is as follows:

<pre>
neuro-api
|
|- config
|   |- all configs files
|
|- src
|  |
|  |- modules
|  |  |
|  |  |- `module 1`
|  |  |   {module 1 structure here: domain, repository, services, controllers + module bootstap}
|  |  |
|  |  |- `module 2`
|  |  |   {module 2 structure here: domain, repository, services, controllers + module bootstap}
|  |  |
|  |  |- `module n`
|  |
|  |
|  |- core
|  |  |
|  |  |- app non business components: routing, guards, interception, session, loca-storage, etc.
|  |
|  |
|  |- app.module.ts
|  |   (Aggregating all the app ressources: module bootstraps, configs, core components)
|  |
|  |- main.ts
|      (bootstrap the application and launch the server)
|
|
|- test
|  (all the tests)
|  
|- all app utility files: .envs, git files, docker files, npm files (package*.json), ts files, etc.
|
</pre>

### Important design patterns used
Here we are going to describe all the design patterns and how they implemented in the project

#### Architecture design
- [Modular structure](https://docs.nestjs.com/modules)
- microservices

#### App level design
- [12 factor app](https://12factor)

#### Data level pattern
- Domain driven design
- Event-driven design
- Data validation
  `npm install class-validator --save`
  `npm install class-transformer --save`

## Tools integration

### MongoDB
We use [Mongoose](https://mongoosejs.com/) the most popular and mature MongoDB object modeling tool.
- Mongoose dependency installation
`npm i @nestjs/mongoose mongoose`

- [NestJs config](https://docs.nestjs.com/techniques/configuration) management lib 
Allowing to define app params as environment variables (.env) separated from the sources, as per the [3rd recommendation of 12 Factor App](https://12factor.net/config)

## Security
- Auth: Nest auth with [Passport lib](https://docs.nestjs.com/security/authentication)

## Coding practices
We use 
- [Clean Coding standars](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882) well implemented by NestJS;
which is a very opinionated framework, offering code inspection tools out-of-box: `prettier`, `eslint`.

- [Sonar](https://www.sonarqube.org/)

# Testing

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
