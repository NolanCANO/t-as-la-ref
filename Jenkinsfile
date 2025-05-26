pipeline {
  agent any

  stages {
    stage('Push détecté') {
      steps {
        sh '''
          curl -H "Content-Type: application/json" -X POST \
          -d '{"content": "📢 Nouveau *push* détecté sur la branche `dev` ! 🚀"}' \
          https://discordapp.com/api/webhooks/1376518952251035732/hpnDjsP3RtENgxTzfci2O563UXgIjZm8gcSduDStkDgrlVY_k5WRerHu3i-E4MU5QUPT
        '''
      }
    }
  }
}
