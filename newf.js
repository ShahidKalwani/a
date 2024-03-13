fetch('192.168.100.1').then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
fetch('192.168.100.1/latest/user-data').then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});

fetch('https://192.168.100.1').then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
fetch('https://192.168.100.1/latest/user-data').then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});
