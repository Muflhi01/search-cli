# Search CLI

Search in the internet in the console

### Installation

```sh
# npm
$ npm i -g @wonoly/search-cli

# yarn
$ yarn global add @wonoly/search-cli
```

## Usage

When you install this CLI there will be 2 new commands available (`wonoly` and `search`).

### help

```
Usage: search [options] <query>

Arguments:
query                The query for the search

Options:
    -u, --only-urls      output urls only
    -v, --verbose        output extra debugging
    -f, --file <string>  output file in json format
    -n, --no-output      no output (good if -o is activated)
    -h, --help           display help for command
```