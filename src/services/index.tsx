import { fetchJSON } from './api';
const apiBaseUrl = "https://api.imagga.com/v2/";
const token = "YWNjXzQzZWEwYjkyNmMyMzA5YzoyMDRjYjZlNTJlOTMxNjFiOWFkZjAxOWJiYzkxNjhmOA==";

export default {
    async postImaggaTag(image_base64: string) {
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
          	var response = await fetchJSON(`${apiBaseUrl}tags/`, options)
          	return response
        } catch (error) {
          	throw error
        }
    },
}