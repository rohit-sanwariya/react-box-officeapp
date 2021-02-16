const API_BASE_URL = "https://api.tvmaze.com/";

const apiGet= async (queryString) =>{
      // https://api.tvmaze.com/search/shows?q=girls
      console.log(queryString);
      const response = await (await fetch(`${API_BASE_URL}${queryString}}`)).json();
      return response;
}
export default apiGet;
