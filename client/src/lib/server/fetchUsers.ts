const API = 'http://localhost:3001/'

export const getUserOrders = async ( token: string) =>{
    const response = await fetch(`${API}users/orders`, {
        headers: {
            'Authorization': `${token}`
        }
    });
    const data = await response.json();
    // console.log(data);
    
    return data;
}