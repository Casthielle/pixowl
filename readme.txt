Used libraries:

  vuejs         :           for make the solution
  AOS           :           for animate html sections
  vue-typed-js  :           for animate some text
  eslint        :           for lint and clean js code
  sass          :           for styling
  vue-cli       :           for build, serve and lint vue project

Files:

    /src  : source code
    /dist : compiled code (for production)

Run Project:
  
  run the following commands:

    - npm install (to install required packages)
    - npm run serve (to run project in dev enviroment)
    - npm run build (to compile for production)

* notes:
- I usually use vue-class-component with vuejs,
but due to the new paradigm that will take vuejs in its
next version, I decided to use objects and export them
in separate files.

- Do not use Gulp to compile the code, instead use the vue
tool itself (vue-cli). however I have experience with gulp
(not as much as I would like) and with webpack.

- Each component is organized in a folder with four well-defined
files: .vue, .js, .scss and .html.
