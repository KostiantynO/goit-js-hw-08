'# goit-js-hw-08'

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
