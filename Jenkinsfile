pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {

    stage('Notifier Discord') {
      steps {
        withCredentials([string(credentialsId: 'discord-webhook-git', variable: 'DISCORD_WEBHOOK_GIT')]) {
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
              $DISCORD_WEBHOOK_GIT
            """
          }
        }
      }
    }

    stage('Analyse SonarQube') {
      steps {
        withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
          sh '''
            sonar-scanner \
              -Dsonar.projectKey=t-as-la-ref \
              -Dsonar.sources=. \
              -Dsonar.host.url=http://212.83.130.69:9000 \
              -Dsonar.token=$SONAR_TOKEN
          '''
        }
      }
    }

    stage('Notification Analyse') {
      steps {
        withCredentials([string(credentialsId: 'discord-webhook-sonar', variable: 'DISCORD_WEBHOOK_SONAR')]) {
          script {
            def payload = """{
              "content": "✅ **Analyse SonarQube terminée avec succès !** 🔍\\n📊 Dashboard : http://212.83.130.69:9000/dashboard?id=t-as-la-ref"
            }"""

            sh """
              curl -H "Content-Type: application/json" -X POST \\
              -d '${payload}' \\
              $DISCORD_WEBHOOK_SONAR
            """
          }
        }
      }
    }
  }
}
