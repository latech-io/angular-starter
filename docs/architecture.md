# Architecture

```

src
|
|___ app
|   |
|   |___ core
|   |                        _
|   |___ Feature modules ___|_
|   |                       |_
|   |  
|   |___ shared
|       |
|       |___ components
|
|___ assets
|
|___ environments
|
|
|___ styles
    |
    |___ global


```

## 1. Core module `src/app/core`

Contains:
 - All services which have to be used one and only one instance per application like user service, authentication service.
 - Components that will be loaded only one time like: login page, side/top bar.

 ## 2. Feature modules

We have multiple feature modules for every independant feature of our application.

in this example we have two featured modules: herosModule and  homeModule.

PS: We should lazy load our feature modules whenever possible for better results.

## 3. Shared module `src/app/shared`

Any component, service, pipe etc... implemented in shared module doesn't have any dependency to the rest of our application.

### 3.1. Components `src/app/shared/components`

All the dumb/reusable components should be implemented here. They should receive all data through attributes in the template of the component using them.

## 4. Assets

The assets folder is only for images and fonts for example.
Dont put any global style here !

## 5. Evironments

Contains specific configuration for each env (dev, prod...).

## 6. Styles `src/app/styles`

Folder for global styles `src/app/styles/global`.

The underscore in front of each filename is to define a partial that will be used to main styles (styles.scss or components styles).