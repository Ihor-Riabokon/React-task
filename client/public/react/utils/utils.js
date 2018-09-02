function convertToStr(val) {
  return `${val}`;
}

export function sortBy(items, field) {
  return items.sort((a, b) => {
    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1;
    } else if (typeof a[field] === 'number' && typeof b[field] === 'number') {
      return a[field] - b[field];
    }
  })
}

export function searchBy(items, input, field) {
  const searchResult = [];
  if (!input || input.length === 0) {
    return items;
  }
  items.forEach((item) => {
    const indexOfSearchQuery = convertToStr(item[field]).toLowerCase().indexOf(input.trim().toLowerCase());
    if (indexOfSearchQuery !== -1) {
      searchResult.push(item);
    }
  });
  return searchResult;
}
