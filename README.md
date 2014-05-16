# isit

## Install

```sh
$ npm i --save express-isit
```

## Usage:

```js
app.use(require('express-isit')())

app.get('/', function(req, res){
  if(req.isit.facebook){
    res.json('Hello, FaceBook')
  }else{
    if(req.itis)
      res.json("This is: "+req.itis)
    else
      res.json("Unknown user agent")
  }
})
```

## Supported User-agents

- vk.com
- facebook
- odnoklassniki.ru
