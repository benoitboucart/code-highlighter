{
  const $jsCode = document.querySelector('.js-code'),
        data = Bind({
    me: {
      code: `<!doctype html>
<html>
  <head><!--...--></head>
  <body>
    <!--...-->
    <script src="js/script.js"></script>
  </body>
</html>`,
    },
  }, {
    me: {
      callback: function () {
        hljs.highlightBlock($jsCode);
        //document.querySelector('.output').innerHTML = escape(JSON.stringify(this.__export(), '', 2));
      },
    },
    'me.code': '.code',
  });

  // helper to dump the object in a <pre>
  function escape(s) {
    return (s||'').replace(/[<>]/g, function (m) {
      return {
        '<': '&lt;',
        '>': '&gt;',
      }[m]
    })
  }


}
