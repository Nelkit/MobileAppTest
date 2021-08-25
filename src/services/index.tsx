import { fetchJSON } from './api';

export default {
    async postImaggaTag(image_base64: string) {
        const token = "YWNjXzQzZWEwYjkyNmMyMzA5YzoyMDRjYjZlNTJlOTMxNjFiOWFkZjAxOWJiYzkxNjhmOA==";

        var formData = new FormData();
        formData.append('image_base64', image_base64);
        
        const options = {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Basic ${token}`
          },
        };
    
        try {
          var response = await fetchJSON(`https://api.imagga.com/v2/tags/`, options)
          return response
        } catch (error) {
          throw error
        }
    },
    
}