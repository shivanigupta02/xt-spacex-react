export default function updateFilterOnLoad(filtersObj) {
  const urlParams = new URLSearchParams(window.location.search);

  // eslint-disable-next-line array-callback-return
  return filtersObj.map((filter) => {
    let paramValue = urlParams.get(filter.name);
    if (paramValue) {
      paramValue = isNaN(paramValue) ? paramValue : parseInt(paramValue);
      filter.selectedIndex = filter.filters.indexOf(paramValue);
    }
    return filter;
  });
}
