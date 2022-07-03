module.exports = {

   auth:(ctx) => {
      console.log('Se está ejecutando auth')
    if(!ctx.req.isAuthenticated()) {
      return ctx.res.redirect("/login")
  }

  ctx.next()
  }
}
