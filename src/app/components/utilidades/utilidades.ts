export function toBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    }) 
}

export function parsearErroresAPI(response: any): string[] {
    const resultado: string[] = [];

    if (response.error) {
        if (typeof response.error === 'string') {
            resultado.push(response.error)
        } else {
            // en caso contrario, viene en forma de Map, donde cada campo tiene un conjunto de errores.
            const mapaErrores = response.error.errors;  // En .errors está el  mapa de errores.
            const entradas = Object.entries(mapaErrores) // Para transformar nuestro objeto en un array.

            entradas.forEach((arreglo: any[]) => {
                const campo = arreglo[0];
                arreglo[1].forEach((mensajeError:any) => {
                    resultado.push(`${campo}: ${mensajeError}`)
                });
            })
            
        }

    }   

    return resultado;
}