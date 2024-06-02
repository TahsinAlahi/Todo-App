const addBtn = document.getElementById("add-btn");
const addBox = document.querySelector(".adding-box input");

addBtn.addEventListener("click", function () {
  let newDiv = document.createElement("div");
  let checkMarkImg = document.createElement("img");
  let newTodo = document.createElement("li");
  let cross = document.createElement("i");

  // function for checking or unchecking todo

  function checkUncheckTodo() {
    if (checkMarkImg.classList.contains("unchecked")) {
      checkMarkImg.classList.replace("unchecked", "checked");
      checkMarkImg.src = "./images/checked.png";
      newTodo.style.textDecorationLine = "line-through";
      newTodo.style.textDecorationStyle = "solid";
    } else {
      checkMarkImg.classList.replace("checked", "unchecked");
      checkMarkImg.src = "./images/unchecked.png";
      newTodo.style.textDecorationLine = "none";
    }
  }

  // for empty values
  if (addBox.value === "") {
    alert("You must enter something...");
    addBox.value = "Empty Todo‼️";
  }

  //adding newDiv to container
  document.querySelector(".todos").appendChild(newDiv);
  newDiv.classList.add("todo");

  // image/checked button adding
  checkMarkImg.src = "./images/unchecked.png";
  checkMarkImg.classList.add("unchecked");
  newDiv.appendChild(checkMarkImg);

  // adding list/todo
  newDiv.appendChild(newTodo);
  newTodo.innerHTML = addBox.value;

  // adding removing button
  cross.classList.add("fa-solid", "fa-xmark");
  newDiv.appendChild(cross);

  // check/uncheck event
  checkMarkImg.addEventListener("click", checkUncheckTodo);
  newTodo.addEventListener("click", checkUncheckTodo);

  // removing Todo
  cross.addEventListener("click", () => {
    newDiv.remove();
  });

  addBox.value = "";
});
