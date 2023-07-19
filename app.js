(() => {
  const Link = ReactRouterDOM.Link;
  const Route = ReactRouterDOM.Route;

  const app = {
    view: () => (
      <ReactRouterDOM.HashRouter>
        <Route path="/" exact component={main.view} />
      </ReactRouterDOM.HashRouter>
    ),
  };
  document.title = "Pakuansoft";
  ReactDOM.render(<app.view />, document.getElementById("root"));

  var loadJS = function (url, location) {
    var scriptTag = document.createElement("script");
    scriptTag.src = url;

    // scriptTag.onload = implementationCode;
    // scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
  };
  // loadJS("theme/html5up-forty/assets/js/jquery.scrolly.min.js", document.body);
  // loadJS("theme/html5up-forty/assets/js/jquery.scrollex.min.js", document.body);
  // loadJS("theme/html5up-forty/assets/js/util.js", document.body);
  // loadJS("theme/html5up-forty/assets/js/main.js", document.body);
})();
