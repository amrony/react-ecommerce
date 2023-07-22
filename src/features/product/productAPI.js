export function fetchAllProduct() {
  return new Promise(async(resolve) =>{
    //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8000/products');
      const data = await response.json();
      resolve({data});
    }
  );
}


export function fetchProductsByFilters(filter, sort) {

  
  // console.log('filterslice',filter);

  //filter = {"category": "smartphone"}

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
  
  
  return new Promise(async(resolve) =>{
    //TODO: we will not hard-code server URL here
    console.log("response",'http://localhost:8000/products?'+queryString);
      const response = await fetch('http://localhost:8000/products?'+queryString);

      const data = await response.json();
      resolve({data});
    }
  );
}





