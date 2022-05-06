const names = Array.from(document.querySelectorAll(".list-group-item"));



const filteredList = names.filter((n) =>

  n.textContent.concat("list-1").concat("list-2")
  
);

let ul = document.createElement("ul");

filteredList.forEach((element) => {
  ul.innerHTML += `<li class="list-group-item">${element.innerHTML}</li>`;
});

document.querySelector(".filtered-list").appendChild(ul);
