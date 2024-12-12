document.addEventListener("DOMContentLoaded", function (event) {
  const dosInstance = Dos(document.getElementById("dos"), {
    url: "https://doom-statiac.s3.eu-central-1.amazonaws.com/doom_jsbox_orig_s3.jsdos",
    background: "assets/bg/bg2.png",
    autolock: true,
    fullscreen: true
  });
});