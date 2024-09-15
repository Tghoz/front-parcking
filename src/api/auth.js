export async function PostData(url, data) {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( data )
            });

            if (!response.ok) {
                const error = await response.json();
                return error

            }else{

            const result = await response.json();
            return result;
        }

        }
        catch(error){
            console.error('Error logging in:', error);
            throw error;
        }
}