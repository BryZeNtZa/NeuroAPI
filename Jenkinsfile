#!/usr/bin/env groovy
pipeline {
  agent {
    label 'dockerbuilder'
  }
  options {
      disableConcurrentBuilds()
  }
  environment {
    //907502626628.dkr.ecr.us-east-1.amazonaws.com/neuro-api
    VERSION = "1.0"
    REGISTRY = '907502626628.dkr.ecr.us-east-1.amazonaws.com'
    REGISTRYCREDS = 'ecr:eu-central-1:20972e13-6cf8-4f5b-b1b0-821905b30bf7'
    REGISTRYPATH = 'neuro'
    SHORTCOMMIT = ''
    DOCKER_ARGS = '-f Dockerfile .'
  }
  stages {
    stage('Publish docker image to ECR') {
        when { anyOf { branch 'master'; branch 'release/**'; branch 'develop'; branch 'feature/**' } }
        steps {
            withCredentials(
              bindings: [sshUserPrivateKey(credentialsId: 'jenkins', keyFileVariable: 'key')]) {
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

