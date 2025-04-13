export function buildGitUrl(rawUrl, branch = 'main') {
  const url = new URL(rawUrl);
  if (url.hostname.includes('github')) {
    url.hostname = 'raw.githubusercontent.com';
  }
  url.pathname = url.pathname.replace('/blob/', '/refs/heads/');
  url.pathname = url.pathname.replace('/refs/heads/main/', `/refs/heads/${branch}/`)
  return url.toString();
};


export function getDateRange(startDate, endDate) {
  const dates = [];
  const current = new Date(startDate);

  // Normalize time to midnight to avoid issues with DST or time differences
  current.setHours(0, 0, 0, 0);
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}
