document.addEventListener('DOMContentLoaded', function () {
    // Load JSON data
    fetch('javalanguage.json')
      .then(response => response.json())
      .then(data => {
        // Handle data to display images and texts
        const mathselected = document.getElementById('javamath');
        const mymathimage = document.getElementById('mathimage').querySelector('img');
        const mathresult = document.getElementById('resultval');

        const stringselected = document.getElementById('javastring');
        const mystringimage = document.getElementById('stringimage').querySelector('img');
        const stringresult = document.getElementById('stringresultval');
  
        // Handle form submission and conversion logic
        document.getElementById('learningjavalanguage').addEventListener('submit', function (e) {
          e.preventDefault();
  
          // Get user input
          const userinputx = parseFloat(document.getElementById('user-inputx').value);
          const userinputy = parseFloat(document.getElementById('user-inputy').value);
          const mathoperation = mathselected.value;
  
          // Perform the conversion based on the selected type
          let result;
          if (mathoperation === 'Add') {
            result = userinputx + userinputy;
          } else if (mathoperation === 'Multiply') {
            result = userinputx * userinputy;
          } else if (mathoperation === 'Subtract') {
            result = userinputx - userinputy;
          } 
  
          // Display the result
          mathresult.textContent = result;
  
          // Display the corresponding image and text based on the selected type
          const mathconverter = data.find(item => item.id === mathoperation);
          
          mymathimage.src = mathconverter.imagePath; // Set the image source
          mymathimage.alt = "Math Equation";
  
          // Display the corresponding text
          document.getElementById('mathver').textContent = mathconverter.text;
          document.getElementById('moremath').textContent = mathconverter.formula;
       // });






        //starting strings
     //   const stringselected = document.getElementById('javastring');
       // const mystringimage = document.getElementById('stringimage').querySelector('img');
        //const stringresult = document.getElementById('resultval');
  
        // Handle form submission and conversion logic
      //  document.getElementById('learningjavastring').addEventListener('submit', function (e) {
        //  e.preventDefault();
  
          // Get user input
          const userstringinputx = parseFloat(document.getElementById('user-stringinputx').value);
          const userstringinputy = parseFloat(document.getElementById('user-stringinputy').value);
          const stringoperation = stringselected.value;
  
          // Perform the conversion based on the selected type
          let stringresulter;
          if (stringoperation === 'concat') {
            stringresulter = userstringinputx.concat(userstringinputy);
          } else if (stringoperation === 'equals') {
                if(userstringinputx === userstringinputy){
                    stringresulter = "true";
                }
                else{
                    stringresulter = "false";
                }
          } else if (stringoperation === 'equalsIgnoreCase') {
                if(userstringinputx === userstringinputy){
                    stringresulter = "true";
                }
                else{
                    stringresulter = "false";
                }
          } 
  
          // Display the result
          stringresult.textContent = stringresulter;
  
          // Display the corresponding image and text based on the selected type
          const stringconverter = data.find(item => item.id === stringoperation);
          
          mystringimage.src = stringconverter.imagePath; // Set the image source
          mystringimage.alt = "Math Equation";
  
          // Display the corresponding text
          document.getElementById('stringver').textContent = stringconverter.text;
          document.getElementById('morestring').textContent = stringconverter.formula;
  
        });
      });
});