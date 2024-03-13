const checkPort = (port) => {
    fetch(`http://localhost:${port}`, { mode: "no-cors" }).then(() => {
      console.log("port")
    });
}

for(let i=0; i<1000; i++) {
    checkPort(i);
}


  fetch('18.161.111.70', { mode: "no-cors" }).then((resp) => {
      console.log(resp)
    });
