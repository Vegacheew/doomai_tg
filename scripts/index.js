document.addEventListener("DOMContentLoaded", function (event) {
  const dosInstance = Dos(document.getElementById("dos"), {
    url: "https://doom-statiac.s3.eu-central-1.amazonaws.com/doom_jsbox_orig_s3.jsdos",
    background: "assets/bg/bg2.png",
  });
});

document.addEventListener("DOMContentLoaded", function (event) {
  let timeout;
  document.getElementById("contract_to_copy").addEventListener("click", () => {
    clearTimeout(timeout);
    // <!-- TODO: change token -->
    window.clipboardCopy("HaxYaDbXxD4LReAQei1SaoAW8BjEXUVt9VXW5E4Ypump");
    document
      .getElementById("contract_to_copy_success")
      .classList.add("ca_success_showed");
    timeout = setTimeout(() => {
      document
        .getElementById("contract_to_copy_success")
        .classList.remove("ca_success_showed");
    }, 2000);
  });
});
