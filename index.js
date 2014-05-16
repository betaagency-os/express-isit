module.exports = function(){
  return function(req, res, next){
    var ua = req.headers['user-agent']
    var known = {
      'facebook': /facebook/,
      'odnoklassniki': /odnoklassniki/,
      'vk': /vk\.com/
    }
    var isit = {}
    var itis 
    for(var i in known){
      var check = known[i].test(ua)
      isit[i] = check
      if(check)
        itis = i
    }
    req.isit = res.locals.isit = isit
    req.itis = res.locals.itis = itis
    next()
  }
}
