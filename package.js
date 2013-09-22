Package.describe({
  summary: "Instagram API Client"
});

Npm.depends({"instagram": "0.0.4"});

Package.on_use(function (api) {
  if(api.export) {
    api.export('Instagram');
  }
  api.add_files("main.js", "server");
});
