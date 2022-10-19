#!/usr/bin/env groovy
pipeline {
  agent {
    // just to make a change
    label 'docker_agent'
  }
  options {
      disableConcurrentBuilds()
  }
  environment {
    VERSION = "1.0"
    REGISTRY = '907502626628.dkr.ecr.us-east-1.amazonaws.com'
    REGISTRYCREDS = 'ecr:us-east-1:450fb06d-0b63-4aaa-bd62-a4b51f407347'
    REGISTRYPATH = 'neuro-api'
    SHORTCOMMIT = ''
    DOCKER_ARGS = '-f Dockerfile .'
  }
  stages {
    stage('Publish docker image to ECR') {
        when { anyOf { branch 'master'; branch 'release/**'; branch 'develop'; branch 'feature/**' } }
        steps {
            withCredentials(
              bindings: [sshUserPrivateKey(credentialsId: 'abeb44e1-b0b9-4e8c-b48d-43de5fd4ab8c', keyFileVariable: 'key')]) {
                                        script {
                                          SHORTCOMMIT = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                                          sh 'cat $key > key'
                                          image = docker.build(REGISTRYPATH, DOCKER_ARGS)
                                          docker.withRegistry("https://${REGISTRY}", REGISTRYCREDS) {
                                            SHORTCOMMIT = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
                                            image.push(SHORTCOMMIT)
                                            image.push(env.BRANCH_NAME.replace("/", "-")+"-latest")
                                            image.push(env.BRANCH_NAME.replace("/", "-")+"-${VERSION}.${env.BUILD_NUMBER}")
                                          }
                                        }
                                  }
        }
    }

    }
}

