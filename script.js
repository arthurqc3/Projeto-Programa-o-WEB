document.getElementById("date").addEventListener("keydown", function (event) {
    event.preventDefault();
});

function addEvent() {
    const name = document.getElementById("name").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;

    if (name && time && date) {
        const table = document.getElementById("eventTable").getElementsByTagName("tbody")[0];
        const newRow = table.insertRow();

        addCellWithDelete(newRow, name);
        addCellWithDelete(newRow, time);
        addCellWithDelete(newRow, date);

        document.getElementById("eventForm").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function addCellWithDelete(row, value) {
    const cell = row.insertCell();
    const contentContainer = document.createElement("div");
    contentContainer.style.display = "flex";
    contentContainer.style.flexDirection = "column";
    contentContainer.style.alignItems = "center";

    const content = document.createElement("span");
    content.textContent = value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        content.remove();
        deleteButton.remove();
    };

    contentContainer.appendChild(content);
    contentContainer.appendChild(deleteButton);

    cell.appendChild(contentContainer);
}
