import { lettersArray, specialArray, numbersArray } from './arrays';

export const passwordFunction = ({lang, letters, numbers, special, counts}) => {
	let collection = [];
  if(letters) {
    Array.from(lettersArray).forEach(el => collection.push(el));
    Array.from(lettersArray).forEach(el => collection.push(el.toUpperCase()));
  }
  if(numbers) Array.from(numbersArray).forEach(el => collection.push(el));
  if(special) Array.from(specialArray).forEach(el => collection.push(el));
  
  let password = '';
  for(let i = 1; i <= counts; i++){
    const random = Math.floor(Math.random() * collection.length);

    let name;
    if(lang === "pl") name = "Brak danych ";
    else name = "No data ";
    if(collection[random] === undefined){
      password += name;
      break;
    }
    else password += collection[random];
  }

  return password
}




export const changingCounts = (currentTarget, typ, {counts, limit}) => {
  switch(typ){
    case "up":
      /* changing value of text input */
      if(limit.max > counts) counts++;
      
      /* turning on / off buttons */
      if(limit.max === counts){
        currentTarget.className += ' disable';
      }
      currentTarget.previousSibling.previousSibling.className = 'changingValue';

      break;

    case "down":
      /* changing value of text input */
      if(limit.min < counts) counts--;

      /* turning on / off buttons */
      if(limit.min === counts){
        currentTarget.className += ' disable';
      }
      currentTarget.nextSibling.nextSibling.className = 'changingValue';
      break;

    default:
      switch(currentTarget.type){
        case 'text':
          const value = currentTarget.value;

          /* changing length of password */
          if((value >= limit.min) && (value <= limit.max)) counts = value;
          else if( value < limit.min ) counts = limit.min;
          else if( value > limit.max ) counts = limit.max;


          /* turning on / off buttons */
          
          currentTarget.previousSibling.className = 'changingValue';
          currentTarget.nextSibling.className = 'changingValue';

          if(Number(counts) === Number(limit.min)){
            currentTarget.previousSibling.className += ' disable';
          }
          else if(Number(counts) === Number(limit.max)){
            currentTarget.nextSibling.className += ' disable';
          }
          
          break;

        default:
          

          break;
      }
      break;
  }

  return counts
}




export const clipboard = ({currentTarget}, lang) => {
    let children = currentTarget.parentNode.children,
        textarea = Array.from(children).filter(el => el.type === 'textarea'),
        pass;
        Array.from(textarea).forEach(el => {
          pass = el.value;
          el.select();
          document.execCommand('copy');
        });


    const tooltip = document.createElement('div');
          tooltip.className = 'tooltip';
          if(lang === 'pl') tooltip.innerHTML = `Skopiono do schowka: ${pass}`;
          else tooltip.innerHTML = `Copied to clipboard: ${pass}`;
          setTimeout(() => tooltip.style.opacity = 1, 10);
          setTimeout(() => {
            tooltip.style.opacity = 0;
            setTimeout(() => tooltip.remove(), 500);
          }, 3000);

    currentTarget.appendChild(tooltip)
  }