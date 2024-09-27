# Proactive Past Life Experience Chatbot
## Project Overview
This is a Final Year Poject (FYP) from Aston University. The main concept of this chatbot is to proactively hold a conversation about their past life experiences. 
The user would pre-load images, videos and audio relating to the system past event they woud like to discuss with the the chatbot. 
Then, the chatbot would present those media types to the user and ask follow-up prompts to gain more information about that specific artifact. 
The bot was developed using the Botpress v12 framework. 

**IMPORTANT**: With the launch of Botpress Cloud, the documentation for Botpress v12 can now be found [here](https://v12.botpress.com/). 

## What is Botpress?

Botpress is the standard developer stack to build, run, and improve conversational AI applications. Powered by natural language understanding, a messaging API, and a fully featured studio, Botpress allows developers and conversation designers around the globe to build remarkable chatbots without compromise.

**Out of the box, Botpress v12 includes:**

- Administration panel to orchestrate and monitor your chatbots
- Conversation Studio to design a conversation, manage content, code custom integration
- Easy integration with messaging channels (Messenger, WhatsApp, Slack, Teams, Webchat, Telegram, SMS & more)
- Natural Language Understanding
- Complete list of features and specs [here](https://v12.botpress.com/overview/features)

## Getting Started

There are a few ways to get started with Botpress v12:

- Download the latest binary for your OS [here](https://v12.botpress.com/) and follow the [installation docs](https://v12.botpress.com/overview/quickstart/installation).
- Use the official [Docker image](https://hub.docker.com/r/botpress/server) and follow the [hosting docs](https://v12.botpress.com/going-to-production/deploy/docker-compose)
- Run from sources, follow [build docs](https://v12.botpress.com/going-to-production/deploy/)

## Prerequisites ##
1. Node.js: Ensure that Node.js is installed on your machine. You can download it from [Node.js] (https://nodejs.org/en)
2. npm: Make sure npm (Node Package Manager) is installed along with Node.js.
3. Botpress CLI: Install the Botpress CLI globally using the following command:
    `npm install -g botpress-cli`

**Installation:**

* Clone the repository to your local machine:
  * `git clone https://github.com/lucaforelli/FYPChatbot.git`
* Navigate to the Project Directory and install project dependencies using npm: `npm install`
* Extract the downloaded botpress.exe file from here: (https://v12.botpress.com/)
* run the 'bp' executable file
* From the command prompt, open the url (http://localhost:3000) in a browser.
* Enter login credentials, or create new account.
* In the administration panel, under the 'Create Botpress' dropdown, select 'Import Existing'
    * Choose the file .tgz file from this project.

## Documentation

- [Main Documentation](https://v12.botpress.com/)
- [SDK Reference](https://botpress.com/reference/)
- [Code Examples](https://github.com/botpress/botpress/tree/master/examples)
- [Video Tutorials](https://www.youtube.com/c/botpress)
