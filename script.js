let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      try{
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      
      }
      catch(err){
        throw new ValidationError("Invalid input.");
      }});

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    
    class ValidationError extends Error{
      constructor(message){
        super(message);
        this.name = "Validation Error.";
      }
    }


    // Start your code here
    // You may move this JS to another file if you wish

    //Step 2
    //console log demo


    //Step 2
    //console log demo
    errorBtns[0].addEventListener("click", () => {
      console.log("Console Log Button");
    })
    //console error demo
    errorBtns[1].addEventListener("click", () => {
      console.error("Console Error Button");
    })
    //console count demo
    errorBtns[2].addEventListener("click", () => {
      console.count("Console count button: ");
    })
    //console warn demo
    errorBtns[3].addEventListener("click", () => {
      console.log("Console Warn Demo");
      console.warn("Displaying warning message");
    })
    //console assert demo
     errorBtns[4].addEventListener("click", () => {
      console.log("Console Assert Demo");
      console.assert(4 < 2, "Assertion Failed: 4 is greater than 2");
    })
    //console clear demo
     errorBtns[5].addEventListener("click", () => {
      console.log("Console Clear Demo");
      console.clear();
    })
    //console dir demo
    errorBtns[6].addEventListener("click", () => {
     console.log("Console Dir Demo");
     console.dir(document.head);
    })
    //console dirxml demo
    errorBtns[7].addEventListener("click", () => {
     console.log("Console Dirxml Demo");
     console.dirxml(document.head);
    })
    //console group demo
    errorBtns[8].addEventListener("click", () => {
     console.log("Console Group Demo");
     console.log("Outside the group");
     console.group();
     console.log("Inside the group");
    })
    //console group end demo
     errorBtns[9].addEventListener("click", () => {
      console.groupEnd();
     })
    //console table demo
    errorBtns[10].addEventListener("click", () => {
      console.log("Console Table Demo");
      console.table(["Dog, Cat, Bunny, Fox"]);
    }) 
    //console timer demo
     errorBtns[11].addEventListener("click", () => {
      console.log("Console Timer Start Demo");
      console.time("Timer");
     })
    //console timer log demo
    errorBtns[12].addEventListener("click", () => {
      console.log("Console Timer End Demo");
      console.timeEnd("Timer");
    })
    //console trace demo     
    errorBtns[13].addEventListener("click", () => {
      function first(){
        second();
      }
      function second() {
        console.trace("Called from");
      }
      first();
     })
    //Step 3: Try, Catch and Finally
    errorBtns[14].addEventListener('click', function() {
      try{
        const output = document.querySelector('output');
        output.innerHTML = '<!--';
      }
      catch(error){
        console.error("Caught the following error: ", error);
      }
      finally{
        console.log("Finally execute this block");
      }
    }); 

    //Step 5: Global Error Handler
    errorBtns[14].addEventListener("click", () => {
      //custom function as shown in demo
      throw new Error(boom());
    });
    TrackJS.track("Testing TrackJS!");
