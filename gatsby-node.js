exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  // fetch data from a collection which contains list of urls mapping for redirection
  const redirects = [
    { fromPath: "/dui", toPath: "/denver-dui-lawyer", isPermanent: true },
    { fromPath: "/municipal", toPath: "/municipal-attorney-denver", isPermanent: true },
    { fromPath: "/domestic-violence", toPath: "/denver-domestic-violence-lawyer", isPermanent: true },
    { fromPath: "/juvenile-offenses", toPath: "/denver-juvenile-attorney", isPermanent: true },
    { fromPath: "/state-felony-and-misdemeanor", toPath: "/denver-felony-defense-lawyer", isPermanent: true },
  ];

  redirects.forEach((redirect) => {
    console.log(redirect.fromPath);
    createRedirect({ fromPath: redirect.fromPath, toPath: redirect.toPath, isPermanent: redirect.isPermanent });

  });


  /*
 now iterate over data and create redirect for each url
*/
}
