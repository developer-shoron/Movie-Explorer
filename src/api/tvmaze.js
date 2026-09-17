const BASE_URL = "https://api.tvmaze.com";

/**
 * Fetch a page of the full show catalog.
 * TVMaze paginates /shows at ~250 results per page.
 */
export async function fetchAllShows(page = 0) {
  const res = await fetch(`${BASE_URL}/shows?page=${page}`);
  if (!res.ok) {
    throw new Error(`Failed to load shows (${res.status})`);
  }
  return res.json();
}

/**
 * Search shows by title. Returns an array of { score, show }.
 * We flatten it to just the show objects for easier consumption.
 */
export async function searchShows(query) {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error(`Search failed (${res.status})`);
  }
  const data = await res.json();
  return data.map((entry) => entry.show);
}

/**
 * Fetch a single show with embedded cast, for the details modal.
 */
export async function fetchShowDetails(id) {
  const res = await fetch(`${BASE_URL}/shows/${id}?embed=cast`);
  if (!res.ok) {
    throw new Error(`Failed to load show details (${res.status})`);
  }
  return res.json();
}
