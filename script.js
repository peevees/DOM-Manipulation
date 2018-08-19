(function () {
    let list = document.querySelector("#list");
    let input = document.querySelector("#entry");

    input.addEventListener("change", addEntry);

    function addEntry() {
        let li = document.createElement("li");
        //this refer to the element that triggered event
        li.innerText = this.value;
        list.appendChild(li);
        this.value = "";

        let button = document.createElement("button");
        button.innerText = "x";
        li.appendChild(button);

        button.addEventListener("click", removeEntry);
    }

    function removeEntry() {
        let li = this.parentElement;
        li.remove();
    }
})();