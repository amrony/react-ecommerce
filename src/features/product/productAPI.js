export function fetchAllProduct() {
  return new Promise(async(resolve) =>{
    //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();
      resolve({data});
    }
  );
}


export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/'+id) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function createProduct(product) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8000/products/',{
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type' : 'application/json' }
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function updateProduct(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8000/products/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    // console.log("response",response);
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}



export function fetchProductsByFilters(filter, sort, pagination) {
  //filter = {"category": "smartphone"}
  // TODO : Server will filter deleted products in case of non-admin
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }

  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  }

  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }
  
  
  return new Promise(async(resolve) =>{
    //TODO: we will not hard-code server URL here
    // console.log("response",'http://localhost:8000/products?'+queryString);
      const response = await fetch('http://localhost:8000/products?'+queryString);
      const data = await response.json();
      const totalItems = await response.headers.get('X-Total-Count');
      resolve({data:{products:data, totalItems:+totalItems}});
    }
  );
}


export function fetchCategories() {
  return new Promise(async(resolve) =>{
      const response = await fetch('http://localhost:8000/categories');
      const data = await response.json();
      resolve({data});
    }
  );
}

export function fetchBrands() {
  return new Promise(async(resolve) =>{
      const response = await fetch('http://localhost:8000/brands');
      const data = await response.json();
      resolve({data});
    }
  );
}




