document.addEventListener('DOMContentLoaded', function () {
    fetch('python.json')
      .then(response => response.json())
      .then(data => {
    // Math operations
    const mathOperations = [
        { label: 'Add', value: 'Add' },
        { label: 'Multiply', value: 'Multiply' },
        { label: 'Subtract', value: 'Subtract' }
    ];
  
    const mathDropdown = document.getElementById('pythonmath');
    mathOperations.forEach(operation => {
        const option = document.createElement('option');
        option.textContent = operation.label;
        option.value = operation.value;
        mathDropdown.appendChild(option);
    });
    const mymathimage = document.getElementById('mathimage').querySelector('img');
        //const mathresult = document.getElementById('resultval');
  
    // String operations
    const stringOperations = [
        { label: 'upper', value: 'upper' },
        { label: 'len', value: 'len' },
        { label: 'lower', value: 'lower' }
    ];
  
    const stringDropdown = document.getElementById('pythonstring');
    stringOperations.forEach(operation => {
        const option = document.createElement('option');
        option.textContent = operation.label;
        option.value = operation.value;
        stringDropdown.appendChild(option);
    });
    const mystringimage = document.getElementById('stringimage').querySelector('img');
  
    // Handle math form submission
    document.getElementById('math-form').addEventListener('submit', function (e) {
        e.preventDefault();
  
        const userinputx = parseFloat(document.getElementById('user-inputx').value);
        const userinputy = parseFloat(document.getElementById('user-inputy').value);
        const operation = document.getElementById('pythonmath').value;
  
        let result;
        if (operation === 'Add') {
            result = userinputx + userinputy;
        } else if (operation === 'Multiply') {
            result = userinputx * userinputy;
        } else if (operation === 'Subtract') {
            result = userinputx - userinputy;
        }
        document.getElementById('math-result-val').textContent = result;
        
          // Display the corresponding image and text based on the selected type
          const mathconverter = data.find(item => item.id === operation);
          
          mymathimage.src = mathconverter.imagePath; // Set the image source
          mymathimage.alt = "Math Equation";
  
          // Display the corresponding text
          document.getElementById('mathver').textContent = mathconverter.text;
          document.getElementById('moremath').textContent = mathconverter.formula;
  
    });
  
    // Handle string form submission
    document.getElementById('string-form').addEventListener('submit', function (e) {
        e.preventDefault();
  
        const inputX = document.getElementById('user-stringinputx').value;
        const operation = document.getElementById('pythonstring').value;
  
        let result;
        if (operation === 'upper') {
            result = inputX.toUpperCase();
        } else if (operation === 'len') {
            result = inputX.length;
        } else if (operation === 'lower') {
            result = inputX.toLowerCase();
        }
  
        document.getElementById('string-result-val').textContent = result;
  
        const stringconverter = data.find(item => item.id === operation);
          
          mystringimage.src = stringconverter.imagePath; // Set the image source
          mystringimage.alt = "String Equation";
  
          // Display the corresponding text
          document.getElementById('stringver').textContent = stringconverter.text;
          document.getElementById('morestring').textContent = stringconverter.formula;
    });
  });
  });