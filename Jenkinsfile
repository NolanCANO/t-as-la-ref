pipeline {
  agent any

  triggers {
    githubPush()
  }

  stages {
    stage('Notifier Discord') {
      steps {
        script {
          // Détection de la branche
          def branchName = env.BRANCH_NAME ?: env.GIT_BRANCH?.replaceFirst(/^origin\//, "") ?: "inconnue"

          // Récupération de l'auteur et du message du dernier commit de cette branche
          def auteur = sh(script: "git log -1 --pretty=format:'%an'", returnStdout: true).trim()
          def message = sh(script: "git log -1 --pretty=format:'%s'", returnStdout: true).trim()

          // Envoi du message Discord
          sh """
            curl -H "Content-Type: application/json" -X POST \\
            -d '{"content": "📢 Nouveau *push* détecté sur la branche \`${branchName}\` ! 🚀\\n👤 Auteur : ${auteur}\\n📝 Commit : ${message}"}' \\
            https://discordapp.com/api/webhooks/1376518952251035732/hpnDjsP3RtENgxTzfci2O563UXgIjZm8gcSduDStkDgrlVY_k5WRerHu3i-E4MU5QUPT
          """
        }
      }
    }
  }
}
