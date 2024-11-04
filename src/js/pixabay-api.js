function fetchPhoto(query) {
  const searchParams = new URLSearchParams({
    key: '46879011-f5a6ed2cfca5d42a53859b3a6',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchPhoto };
