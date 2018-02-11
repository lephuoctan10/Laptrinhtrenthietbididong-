const getListProduct = (idType, page) => {
    const  url = `http://10.45.113.156:8080/app/app/product_by_type.php?id_type=${idType}&page=${page}`;
   return fetch(url)
    .then(res => res.json());
};

export default getListProduct;