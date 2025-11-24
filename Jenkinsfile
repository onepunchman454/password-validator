pipeline {
    agent any

    stages {

        stage('Pull from GitHub') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-token1',
                    url: 'https://github.com/onepunchman454/password-validator.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t password-validator .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat '''
                docker ps -q --filter "name=password-validator-container" > tmp.txt
                if exist tmp.txt (
                    for /f %%i in (tmp.txt) do (
                        docker stop password-validator-container
                        docker rm password-validator-container
                    )
                    del tmp.txt
                )
                '''
            }
        }

        stage('Run New Container') {
            steps {
                bat 'docker run -d --name password-validator-container -p 8080:80 password-validator'
            }
        }
    }
}
