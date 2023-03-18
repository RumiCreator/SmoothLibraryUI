// Smooth Library

const SmoothLibrary = function(){};

// Function definitions,

SmoothLibrary.createDialog = function(title, text, status){
  let promise = new Promise((resolve, reject) => {
    let div = document.createElement('div');
    div.innerHTML = (`
    <font size="20px" color="#e8e8e8"><center><span>${title}</span><center></font><br>
    <font size="4px" color="#cfcfcf"><span>${text}</span>
    `);
    
    div.style.backgroundColor = "#303030";
    div.style.width  = "30%";
    div.style.height = "20%";
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    document.body.appendChild(div);
    
    resolve(div);
  });
  
  return promise;
}
