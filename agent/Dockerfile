FROM jenkins/inbound-agent:latest-jdk17

USER root

# Install tools
RUN apt-get update && apt-get install -y \
    docker.io \
    git \
    curl \
    nodejs \
    npm \
    unzip \
    openjdk-17-jdk \
 && apt-get clean

# Set Java 17 as default
RUN update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-17-openjdk-amd64/bin/java 1 \
 && update-alternatives --set java /usr/lib/jvm/java-17-openjdk-amd64/bin/java

# Install SonarScanner manually
RUN curl -Lo /tmp/sonar-scanner.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.8.0.2856.zip \
 && unzip /tmp/sonar-scanner.zip -d /opt \
 && mv /opt/sonar-scanner-* /opt/sonar-scanner \
 && ln -s /opt/sonar-scanner/bin/sonar-scanner /usr/bin/sonar-scanner

USER jenkins
