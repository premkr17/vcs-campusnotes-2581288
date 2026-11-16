function addNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please enter title and notes!");
        return;
    }

    const note = document.createElement("div");
    note.className = "note";

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        note.remove();
    };

    note.appendChild(heading);
    note.appendChild(paragraph);
    note.appendChild(deleteButton);

    document.getElementById("notes").appendChild(note);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}
