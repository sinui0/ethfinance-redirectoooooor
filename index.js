var main = async function () {
  var params = window.location.search;
  var query = await fetch("https://api.reddit.com/user/ethfinance/submitted/.json?limit=3");
  query = await query.json();
  var submissions = query["data"]["children"].map(function(x) { return {url: x["data"]["url"], title:x["data"]["title"], date:x["data"]["created_utc"] }} );
  var dailies = submissions.filter(x => x["title"].includes("Daily General Discussion")).sort(x => x["created_utc"]);
  var url = dailies[0]["url"];
  url = params.includes("old") ? url.replace("www.reddit.com", "old.reddit.com") : url
  window.location.replace(url+params);
}

main();
