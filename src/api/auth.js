

export async function PostData(url, data) {
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( data )
            });
            if (!response.ok) {
                const error = await response.json();
                return error

            }else{
                const token = response.headers.get('x-access-token');
                if(token){
                    document.cookie = `x-access-token=${token}; path=/; secure; samesite=strict`;
                }
                const result = await response.json();
                return result;
        }

        }
        catch(error){
            if (error instanceof TypeError && error.message === "Failed to fetch") {
                console.error('Error de conexión:', error);
                return { error: 'Error de conexión. Por favor, verifica tu conexión a internet.' };
            } else {
                console.error('Error al procesar la solicitud:', error);
                return { error: 'Error al procesar la solicitud. Por favor, inténtalo de nuevo.' };
            }
        }
}