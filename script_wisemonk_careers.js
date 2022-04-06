//<script type="text/javascript">
var myHeaders = new Headers();

var raw = "";

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://jobs.wisemonk.co/recruit/v2/public/Job_Openings?pagename=Wisemonk-Core&source=CareerSite",
  requestOptions
)
  .then((response) => response.json())
  .then((result) =>
    result["data"].forEach((element) => {
      let layout = document.querySelector(".layout2");
      let job = document.querySelector(".jobs");
      let newjob = job.cloneNode(true);
      newjob.style.display = "flex";
      newjob.querySelector(".job_title").innerHTML =
        element["Job_Opening_Name"];
      newjob.href = element["$url"];
      layout.appendChild(newjob);
      //console.log(element);
    })
  )
  .catch((error) => console.log("error", error));
//</script>
