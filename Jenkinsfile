pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Notifier Discord') {
      steps {
        script {
          def auteur = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
          def message = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()

          sh """
            curl -H "Content-Type: application/json" -X POST \
            -d '{"content": "📢 Nouveau *push* détecté sur la branche `dev` ! 🚀\\n👤 Auteur : ${auteur}\\n📝 Commit : ${message}"}' \
            https://discordapp.com/api/webhooks/1376518952251035732/hpnDjsP3RtENgxTzfci2O563UXgIjZm8gcSduDStkDgrlVY_k5WRerHu3i-E4MU5QUPT
          """
        }
      }
    }
  }
}
