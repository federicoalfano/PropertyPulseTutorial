
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null
async function fetchProperties() {
    try {
        if(! apiDomain)
        {
            return [];
        }
      const res = await fetch(`${apiDomain}/properties`);
      if (!res.ok) {
        throw new Error("Failed to fetch properties");
      }
  
      return res.json();
    } catch (error) {
      
      console.log(error);
      return [];
    }
  }


  async function fetchProperty(id) {
    try {
      // Handle the case where the domain is not available yet
      if (!apiDomain) {
        console.error('API domain is not set');
        return null;
      }
      
      // Log the URL being fetched
      console.log(apiDomain)
      const url = `${apiDomain}/properties/${id}`;
      console.log(`Fetching property with URL: ${url}`);
      
      const res = await fetch(url);
      
      if (!res.ok) {
        // Log response status and statusText for better debugging
        console.error(`Failed to fetch property. Status: ${res.status}, StatusText: ${res.statusText}`);
        throw new Error('Failed to fetch data');
      }
      
      return res.json();
    } catch (error) {
      console.error('Error fetching property:', error);
      return null;
    }
  }
  export { fetchProperties, fetchProperty };
