const s = "12:05:45PM";

function timeConversion(s) {

  let ampm = s.slice(-2);
 
  let sArray = s.split(/[:\D]+/);
  sArray.pop();

  if (ampm === 'AM') {

    if (sArray[0] === '12') {
   
      sArray[0] = '00';

    }
    
  } else {

      if (sArray[0] !== '12') {

        sArray[0] = parseInt(sArray[0]) + 12;

      }
    }

    let timeConverted = sArray.join(':');

    return timeConverted;
}

timeConversion(s);