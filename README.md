# Notes

This repo uses GitHub Actions to automatically deploy documentation/notes created with MkDocs to GitHub Pages.


## Live Notes

The deployed version of this project is available at:
**[https://iam-jorge.github.io/Notes/](https://iam-jorge.github.io/Notes/)**


## Workflow 

The configuration file `.github/workflows/ci.yml` defines a workflow that is automatically triggered when pushing to the `master` or `main` branches.


## Configuration
The `mkdocs.yml` file in the root of the project specifies the project settings, themes, styles and more.


## Local Installation

To work locally, install `python` and the following dependencies:

```bash
pip install mkdocs
pip install mkdocs-material
```

## Local Usage

To view the documentation locally:

```bash
mkdocs serve
```

This will start a local server at http://127.0.0.1:8000/ to preview the documentation.

