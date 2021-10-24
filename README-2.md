'# goit-js-hw-08'

    1 Fork parcel-project-template to my github account
    2 Create a new repo on Github and copy its link
    3 Create a new local repo on my laptop
    4 Add remote origin and paste copied link to it
    5 Clone from fork
    6 Push to remote
    7 Set Github pages to deploy your site from gh-pages branch
    8 gh-pages branch will be deployed if .github folder contains
    /workflows/deploy.yml

Project init:

    win + r
    cmd

cmd:

    d:
    cd projects
    mkdir goit-js-hw-08
    cd goit-js-hw-08
    code goit-js-hw-08
    start .

git bash:

    git init && echo '# goit-js-hw-08'
    git add . && git commit -m 'first commit'
    git remote add origin https://github.com/KostiantynO/goit-js-hw-08.git
    git push -u origin main

Cloning template:

    git clone https://github.com/KostiantynO/parcel-project-template

```json
"homepage": "https://KostiantynO.github.io/goit-js-hw-08",
"scripts": {
  "build": "parcel build src/*.html --public-url /goit-js-hw-08/"
},
```

Development:

    git add . && git commit -m "adds initial project files" && git push

    npm run dev
    npx browserslist@latest --update-db
    npm install simplelightbox

    git add . && git commit -m "adds 1st task solution" && git push
