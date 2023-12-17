export const makeApiUrl = (path: string) => {
  const apiKey = process.env.API_KEY;
  const baseUrl = process.env.MOVIE;
  return `${baseUrl}${path}?api_key=${apiKey}`;
}