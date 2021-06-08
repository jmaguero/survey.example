//post the form data via Fetch method.
async function submitFetch(payload) {
  const post = await fetch(' https://crudcrud.com/api/b5b1c71a26564f71834877e8f17fb56a/formsubmit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: `${payload}`
  });
}

function handleSubmit(event) {
  event.preventDefault();
  //Get all the data from the event
  const data = new FormData(event.target);
  //adding all the form entries to formEntries variable
  const formEntries = Object.fromEntries(data.entries());
  //get all checkboxes values
  formEntries.prefer = data.getAll("prefer");
  //conver formEntries to JSON format
  const formJson = JSON.stringify(formEntries, null, 2);
  //post function
  submitFetch(formJson);


  console.log(formJson);
}
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);