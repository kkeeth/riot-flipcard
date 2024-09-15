<img src="https://cdn.rawgit.com/crisward/riot-flipcard/master/riot-flipcard.svg" height="140" />

A small riot tag which flips the content in 3d using css transforms.

## Install

```
npm install @kkeeth/riot-flipcard
```

## Demo

https://kkeeth.github.io/riot-flipcard/

## Usage

You'll need too add `style="display:none"` to prevent the flash on content load.
You can also add `<style>flipcard{display:none}</style>` to the head of your document.

```html
<flipcard style="display:none">
  <div class="front">
    <p>Your Front Content</p>
    <button onclick="{toggle}">Flip</button>
  </div>
  <div class="back">
    <p>Your Back Content</p>
    <button onclick="{toggle}">Flip</button>
  </div>
</flipcard>
````

There are three methods you can call within the flipcard tag

|Methods   | Description          |
|-----     |------                |
|toggle    | swaps front to back  |
|front     | switches to front    |
|back      | switches to back     |


Front and back can be useful for hover effects ie.

```html
<flipcard>
  <div class="front" onmouseover="{back}">
    <p>Your Front Content</p>
  </div>
  <div class="back" onmouseleave="{front}">
    <p>Your Back Content</p>
  </div>
</flipcard>
````

### ▼ Render with a **CDN**

Please add the following in `HTML`.

```html
<app></app>

<script src="app.riot" type="riot"></script>
<script src="https://cdn.jsdelivr.net/npm/riot@9.4.0/riot+compiler.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@kkeeth/riot-flipcard@2.0.1/lib/flipcard.umd.js"></script>
<script>
  riot.compile().then(() => {
    riot.mount('app')
  })
</script>
```

### ▼Render with a **Bundler**

Please import this module in your main `.js` file.

```js
import "@kkeeth/riot-flipcard";
```


### Styling

You can style flipcard any way you like.

Either add a class

```html
<flipcard class="mycard">...</flipcard>
```
Or add an inline style

```html
<flipcard style="width:300px;height:300px;">...</flipcard>
```

### Direction

By default flipcard flips horizontally.

But it can also flip vertically

```html
<flipcard direction="y">...</flipcard>
```
Or Diagonally
```html
<flipcard direction="xy">...</flipcard>
```

## License

[The MIT License](./LICENSE)
