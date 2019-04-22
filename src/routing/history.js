// listener.js
export function startListener(history, store) {
  store.dispatch(
    locationChange({
      //dispatch to account for initial entry into application
      pathname: history.location.pathname,
      search: history.location.search,
      hash: history.location.hash
    })
  );
  history.listen(location => {
    store.dispatch(
      locationChange({
        pathname: location.pathname,
        search: location.search,
        hash: location.hash
      })
    );
  });
}
