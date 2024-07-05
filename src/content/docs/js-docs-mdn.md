---
title: "JS Docs MDN"
description: "Let's you quickly open MDN Web Docs for Javascript from neovim"
keywords: "web web-development simple easy pure-html html-only html doctype browser-internals deep dive into broswers"
heroImage: "https://raw.githubusercontent.com/anmol-fzr/js-docs-mdn.nvim/main/js-docs-mdn.png"
---

# js-docs-mdn.nvim

Quickly open JS Docs with the help of [mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP), including [telescope](https://github.com/nvim-telescope/telescope.nvim) and [fzf-lua](https://github.com/ibhagwan/fzf-lua) integrations.

<img src="https://raw.githubusercontent.com/anmol-fzr/js-docs-mdn.nvim/main/js-docs-mdn_search.png" style="width: 90%;margin-inline:auto; border-radius: 1rem;" >

## Installation

Install via your favorite package manager, like [lazy](https://github.com/folke/lazy.nvim):

```lua
require('lazy').setup({
    {
        'anmol-fzr/js-docs-mdn.nvim'
        config = true,
        -- or 'nvim-telescope/telescope.nvim'
        keys = { { '<leader>J', '<cmd>JSDocs<cr>' }}
    }
})
```

## [Configuration](https://github.com/anmol-fzr/js-docs-mdn.nvim/blob/main/doc/js-docs-mdn.txt)

`js-docs-mdn.nvim` uses telescope or fzf-lua (whichever you've installed), which can be manually overidden.

`js-docs-mdn.nvim` opens the Mozilla documentation URLs based on your operating system. This can be overidden.

| OS      | open_url      |
| ------- | ------------- |
| Windows | `start %s`    |
| OSX     | `open %s`     |
| UNIX    | `xdg-open %s` |

See [the docs](https://github.com/anmol-fzr/js-docs-mdn.nvim/blob/main/doc/js-docs-mdn.txt) for more information.

## Usage

Use the exposed command in vimscript:

```lua
:JSDocs
```

or in lua:

```lua
require('js-docs-mdn').js_docs_mdn()
```
