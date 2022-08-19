export default profile();
const form = document.querySelectorAll("[data-js=form]");
const data = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const myForm = event.target;
  const fields = myForm.elements;

  const formData = {
    name: fields.name.value,
    interessen: fields.interessen.value,
  };
  data.push(formData);
  logdata(data);
});
