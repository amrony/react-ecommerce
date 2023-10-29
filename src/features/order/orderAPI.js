export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
    });
    // console.log("response",response);
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function fetchAllOrders(pagination) {

  let queryString = '';

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  
  
  return new Promise(async(resolve) =>{
    //TODO: we will not hard-code server URL here
    // console.log("response",'http://localhost:8000/products?'+queryString);
      const response = await fetch('http://localhost:8000/orders?'+queryString);
      const data = await response.json();
      const totalOrders = await response.headers.get('X-Total-Count');
      resolve({data:{orders:data, totalOrders:+totalOrders}});
    }
  );
}
