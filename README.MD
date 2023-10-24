on revolt paste this into your console

xhr = new XMLHttpRequest()
xhr.open("GET", "https://codeberg.org/waitthisisnt2015/UWUIFYREVOLTPLUGIN/raw/branch/main/script.js")
xhr.send("")
xhr.onload = function() {
  state.plugins.add({
      format: 1,
      version: "1.0.0",
      namespace: "waitthisisnt2015",
      id: "uwuify",
      entrypoint: xhr.response
  })
  window.location.reload()
};