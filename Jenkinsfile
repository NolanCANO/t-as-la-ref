pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Notifier Discord') {
      steps {
        script {
          def branchName = env.BRANCH_NAME ?: env.GIT_BRANCH ?: "inconnue"
          def auteur = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
          def message = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()

          def payload = """{
            "content": "📢 Nouveau *push* détecté sur la branche '${branchName}' ! 🚀\\n👤 Auteur : ${auteur}\\n📝 Commit : ${message}"
          }"""

          sh """
            curl -H "Content-Type: application/json" -X POST \\
            -d '${payload}' \\
            https://discordapp.com/api/webhooks/1376518952251035732/hpnDjsP3RtENgxTzfci2O563UXgIjZm8gcSduDStkDgrlVY_k5WRerHu3i-E4MU5QUPT
          """
        }
      }
    }
  }
}

