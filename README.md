# rouge-theme-preview

This tool is available to access online at https://spsarolkar.github.io/rouge-theme-preview/

This project is created to display the preview of all Rouge Syntax highlighting themmes. This site is generated using Jekyll. All the functionality is inside ```gh-pages``` branch, where Jekyll site is configured to read yaml file which contains all themes.

To generate the themes list for Rouge, its prerequisite to have ```rougify``` gem installed.

Just execute below script

```bash
./generateThemeYaml.sh
```

Once this script is executed it will generate number of css files under ```css/``` directory. Each css file belong to each theme supported.
