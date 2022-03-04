const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
  
    document.getElementById("heading").innerHTML = `Advice #${data.slip.id}`;
    document.querySelector("#text").innerHTML = `"${data.slip.advice}"`;
  
    console.log(data);
  };
  
  fetchAdvice();