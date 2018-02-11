const initData = () => (
    fetch('http://10.45.113.156:8080/app/app/')
    .then(res => res.json())
);
export default initData;