const changeInfo = (token,name,phone,address) => (
    fetch('http://10.45.113.156:8080/app/app//change_info.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token,name,phone,address })
    })
    .then(res => res.json())
);
    
module.exports = changeInfo;