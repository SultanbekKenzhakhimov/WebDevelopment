const vvv = prompt('Who is there?');

if (vvv == 'Admin') {
  const p = prompt('Password?');

  if (p == 'Cancel') 
  {
    alert('Canceled')
  } 
  else if (p == 'TheMaster') 
  {
    alert('Welcome!')
  } 
  else 
  {
    alert('Wrong password')
  }
} 
else if (vvv == 'Cancel') 
{
  alert('Canceled')
} 
else 
{
  alert('I do not know you')
}