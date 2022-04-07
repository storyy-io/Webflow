//<script type="text/javascript">
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
const clientCode = window.clientCode;

postData(`https://api.storyy.io/getStories?clientCode=${clientCode}`, {}).then(
  (data) => {
    data.forEach((element) => {
      //console.log(element);
      let layout = document.querySelector(".layout");
      let card = document.querySelector(".card");
      let newcard = card.cloneNode(true);
      newcard.style.display = "flex";
      newcard.href = element["redirectUrl"];
      let image = newcard.querySelector(".image");
      image.src = element["mediaUrl"];
      let title = newcard.querySelector(".title");
      title.innerHTML = element["title"];
      let subtitle = newcard.querySelector(".subtitle");
      subtitle.innerHTML = element["subtitle"];
      let details = newcard.querySelector(".details");
      details.innerHTML = element["body"];
      layout.appendChild(newcard);
    });
  }
);
//</script>
