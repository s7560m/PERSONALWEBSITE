// Deals with router pushing boilerplate
exports.routerPush = (link, isResume, router) => {
  if (link !== undefined) {
    if (isResume) {
      window.open(link);
    } else {
      console.log(link);
      // If it's not resume, it must be a router link
      // We'll scroll to top first, then go to the router link
      window.scrollTo(0, 0);
      router.push(link);
    }
  }
};
