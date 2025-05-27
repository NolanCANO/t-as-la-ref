pipeline {
  agent any

  triggers {
    githubPush()
  }

  environment {
    SONAR_SCANNER_HOME = tool 'SonarQube Scanner'
  }

  stages {
    stage('Notifier Discord') {
      steps {
        script {
          def branchName = env.BRANCH_NAME ?: env.GIT_BRANCH ?: "inconnue"
          def auteur = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
          def message = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()

          def payload = """{
            "content": "📢 Nouveau **push** détecté sur la branche `${branchName}` ! 🚀\\n👤 **Auteur** : ${auteur}\\n📝 **Commit** : ${message}"
          }"""

          sh """
            curl -H "Content-Type: application/json" -X POST \\
            -d '${payload}' \\
            https://discordapp.com/api/webhooks/1376518952251035732/hpnDjsP3RtENgxTzfci2O563UXgIjZm8gcSduDStkDgrlVY_k5WRerHu3i-E4MU5QUPT
          """
        }
      }
    }

    stage('Analyse SonarQube') {
      steps {
        withCredentials([string(credentialsId: 'sonar-token', variable: 'SONAR_TOKEN')]) {
          sh """
            sonar-scanner \\
              -Dsonar.projectKey=t-as-la-ref \\
              -Dsonar.sources=. \\
              -Dsonar.host.url=http://sonarqube:9000 \\
              -Dsonar.login=${SONAR_TOKEN}
          """
        }
      }
    }

    stage('Notifier Résultat SonarQube') {
      steps {
        script {
          def sonarUrl = "http://sonarqube:9000/dashboard?id=t-as-la-ref"
          def payload = """{
            "content": "🔍 **Analyse SonarQube terminée !**\\n📊 Voir le rapport ici : ${sonarUrl}"
          }"""

          sh """
            curl -H "Content-Type: application/json" -X POST \\
            -d '${payload}' \\
            https://discordapp.com/api/webhooks/1376812666072338482/2HNeqlGjycpjsdzpzNvsJHkVopgd9dPAUJ-CSy_0QvuPG4nrJ-xIulPUxryxuJtslz5D
          """
        }
      }
    }
  }
}
