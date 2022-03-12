# text-editor-webapp
## 👨‍💻 Mission
Build a text editor that runs in the browser to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.
## 🌐 Application
<a href="https://dc-texteditorapp.herokuapp.com/">Link to the App</a>

## 💻 User Experience
When the user loads the page they will be presented with the text editor default header under the title bar that includes an Install button. When the user enters text into the application, it will be saved into storage, so that when they exit and/or reload the page the content will appear again, right where the user left it. When the user clicks on the Install button, they will be able to download the application to their PC.
## 🏁 Challenge Criteria
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```
## 🎨 Preview
<img src="./media/fullwalkthrough.gif">
