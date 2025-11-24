pipeline {
    agent any

    stages {

        stage('Pull from GitHub') {
            steps {
                git 'https://github.com/onepunchman454/password-validator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t password-validator .'
            }
        }

        stage('Stop Old Container') {
            steps {
                script {
                    // If container exists, stop & remove it
                    sh '''
                    if [ $(docker ps -aq -f name=password-validator-container) ]; then
                        docker stop password-validator-container || true
                        docker rm password-validator-container || true
                    fi
                    '''
                }
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name password-validator-container -p 8080:80 password-validator'
            }
        }
    }
}
