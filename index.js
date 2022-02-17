var main = async function () {
  var params = window.location.search;
  var query = await fetch("https://api.reddit.com/user/ethfinance");
  query = await query.json();
  var submissions = query["data"]["children"].filter(x => x["kind"] == "t3").map(function(x) { return {url: x["data"]["url"], title:x["data"]["title"], date:x["data"]["created_utc"] }} );
  var dailies = submissions.filter(x => x["title"].includes("Daily General Discussion")).sort(x => x["created_utc"]);
  var url = dailies[0]["url"];
  url = params.includes("old") ? url.replace("www.reddit.com", "old.reddit.com") : url
  window.location.replace(url);
}

main();