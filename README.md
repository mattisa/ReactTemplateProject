Yet another Boilerplate

### Features
- ES6 on client and server;
- CSSNext and modules;
- Hot module reloading;
- Build server bundle for production;

### To start
- `git clone github.com/mattisa/RMBoilerplate.git`
- `yarn install`
- `npm start` — development server on port 8080;

### Command list
- `npm run dev` — start in development mode;
- `npm run build:prod` — build prod env to www folder

### Structure
```
├── app
│   ├── modules # parts of an app
│   │   ├── Components # components that dont know anything about surroundings
│   │   │   ├── SomeComponent #
│   │   │   │   │   ├── index.js                        # React component
│   │   │   │   │   └── styles.js                       # component specific styles
│   │   │   │   └── componentStyles.css                 # shared component styles
│   │   │   └── ...
│   │   ├── Pages                                       # router enpoints / layouts
│   │   │   │   ├── SomePage                            # sample component
│   │   │   │   │   ├── index.js                        # React component
│   │   │   │   │   ├── store.js                        # stores single page ui state
│   │   │   │   │   └── styles.js                       # page specific styles
│   │   │   │   ├── AppStateStore.js                    # stores app state and actions
│   │   │   │   └── pageStyles.css                      # shared page styles
│   │   │   └── ...
│   │   ├── styles                                      # router enpoints / layouts
│   │   │   ├── sharedStyles.css                        # client level shared styles
│   │   │   └── mixins.css                              # client level shared style mixins
│   │   └── index.js                                    # gathering stores and passing it to component tree
│   │
│   ├── index.html                                      # app index file
│   ├── client.js                                       # entry point for client app
│   ├── colors.js                                       # define shared variables for css and js
│   └── routes.js                                       # client routes
│
├── server
│   ├── modules                                         # server modules
│   ├── config.js                                       # server side configurations
│   ├── index.js                                        # server index file
│   └── logger.js                                       # logger configurations

```

### TODO
- [ ] Server side rendering
- [ ] Test set for front-end
- [ ] Test set for back-end
