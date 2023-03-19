const SmoothLibrary = function(){};

// Function definitions,

SmoothLibrary.createDialog = function(title, text, status){
  let promise = new Promise((resolve, reject) => {
    let div = document.createElement('div');
    div.innerHTML = (`
    <font size="20px" color="#e8e8e8"><center><span>${title}</span><center></font><br>
    <font size="4px" color="#cfcfcf"><span>${text}</span>
    `);
    
    centerDiv = (() => {
      div.style.marginLeft = window.innerWidth/2 - div.clientWidth/2 + "px";
      div.style.marginTop = window.innerHeight/2 - div.clientHeight/2 + "px";
    });
    
    centerDiv();
    
    div.style.backgroundColor = "#303030";
    div.style.width  = "30%";
    div.style.height = "20%";
    div.style.position = "fixed";
    div.style.borderRadius = "5px";
    document.body.appendChild(div);
    
    window.addEventListener('resize', centerDiv);
    
    resolve(div);
  });
  
  return promise;
};

SmoothLibrary.createWindow = function(title){
  const window_functions = function(){};
  
  let promise = new Promise((resolve, reject) => {
    let div = document.createElement('div');
    div.style.height = "20%";
    div.style.width = "25%";
    div.style.borderRadius = "5px";
    div.style.backgroundColor = "#303030";
    div.style.textAlign = "top";
    
    Reposition = (() => {
      if (SmoothLibrary.WindowAmounts && SmoothLibrary.WindowAmounts >= 1) {
        div.style.top = (SmoothLibrary.WindowAmounts * 8) + "px";
        div.style.left = (SmoothLibrary.WindowAmounts / 2) + "px";
      } else if (SmoothLibrary.WindowAmounts == null) {
        SmoothLibrary.WindowAmounts;
        // Defines Windows
        SmoothLibrary.WindowAmounts += 1
        Reposition();
      };
    });
    
    Reposition();
    div.style.position = "fixed";
    document.body.appendChild(div);
  });
  
  
};
