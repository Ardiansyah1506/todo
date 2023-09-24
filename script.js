function addTask() {
    // Ambil nilai dari input
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    // Jika input tidak kosong, tambahkan tugas ke daftar
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        // Buat elemen div
        var newDiv = document.createElement("div");
        newDiv.className = "task-item";

        // Buat elemen teks
        var text = document.createElement("span");
        text.textContent = taskText;

        // Buat elemen tombol "check" dengan Font Awesome
        var checkbtn = document.createElement("button");
        checkbtn.innerHTML = "<i class='fa-solid fa-check fa-fade'></i>";
        checkbtn.onclick = function() {
            moveTask(newDiv);
        };

        // Buat elemen tombol "delete" dengan Font Awesome
        var deletebtn = document.createElement("button");
        deletebtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        deletebtn.onclick = function() {
            removeTask(newDiv);
        };

        // Gabungkan elemen-elemen
        newDiv.appendChild(text);
        newDiv.appendChild(checkbtn);
        newDiv.appendChild(deletebtn);

        // Tambahkan elemen ke dalam daftar
        taskList.appendChild(newDiv);

        // Reset input
        taskInput.value = "";
    } else {
        alert("Silakan masukkan nilai");
    }
}

function removeTask(taskElement) {
    var taskList = document.getElementById("taskList");
    // Hapus elemen tugas dari daftar
    taskList.removeChild(taskElement);
}

function moveTask(taskElement) {
    var TaskDone = document.getElementById("TaskDone");
    
    // Hapus tombol "check" dan "delete"
    taskElement.removeChild(taskElement.childNodes[1]); // Hapus tombol "check"
    taskElement.removeChild(taskElement.childNodes[1]); // Hapus tombol "delete"

    // Pindahkan elemen tugas ke dalam container tugas yang sudah selesai
    TaskDone.appendChild(taskElement);
}