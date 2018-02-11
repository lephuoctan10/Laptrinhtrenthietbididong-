const sendOrder = (token, arrayDetail) => {
    const data = { token, arrayDetail };
    console.log(data);
    return fetch('http://10.45.113.156:8080/app/app/cart.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
};

module.exports = sendOrder;