const gender = prompt('ваш пол')
const age =prompt('сколько вам лет?')
if (Number(age) >= 60 && gender ==='м')
{ console.log('вы дедушка')}
 else if (Number(age) >= 20 && age <= 59 && gender === 'м') 
    {console.log('вы мужчина')}
  else  if (Number(age) >= 12 && age <= 19 && gender === 'м') 
    {console.log('вы юноша')}
  else if(Number(age) < 12 && gender === 'м'){
        console.log('вы мальчик');
    }
    if (Number(age) >= 60 && gender ==='ж') {
        console.log('вы бабушка');
    }
    else if (Number(age) >= 20 && age <= 59 && gender === 'ж') 
    {console.log('вы женщина')}
  else  if (Number(age) >= 12 && age <= 19 && gender === 'ж') 
    {console.log('вы девушка')}
  else if(Number(age) < 12 && gender === 'ж'){
        console.log('вы девочка');
    }

    
 




