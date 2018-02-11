const searchProduct = (key) => {
    const url = `http://10.45.113.156:8080/app/app/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;