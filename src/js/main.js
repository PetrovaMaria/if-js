const form = document.getElementById('form');

form.addEventListener('submit', async event=> {
  event.preventDefault();
  const body = new FormData (form);

  const name = body.get('name');

  const json = JSON.stringify({name});

  const blob = new Blob (
    [json],
    {type: 'application/json'},
  );

  console.log(blob);
  console.log(body.get('json'));

  const fetchOptions = {
    method: 'POST',
    body,
  };

  const res= await fetch(' https://if-student-api.onrender.com/api/file', fetchOptions)
    .then(response=> {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(result => result)
    .catch(error => console.log(error.message));

  console.log(res);
});