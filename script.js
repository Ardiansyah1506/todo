function addTask() {
    // Ambil nilai dari input
    var taskInput = document.getElementById("task");
    var dateinput = document.getElementById("date");
    var taskText = taskInput.value.trim();
    var datevalue = dateinput.value  

    // Jika input tidak kosong, tambahkan tugas ke daftar
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        // Buat elemen div task-item
        var newDiv = document.createElement("div");
        newDiv.className = "task-item";

        // Buat elemen div btn-icon
        var btnicon = document.createElement("div");
        btnicon.className = "btn-icon";

        var task = document.createElement("div");
        task.className = "task-input";
        // Buat elemen teks (p)
        var text = document.createElement("h3");
        text.textContent = taskText;

        var date = document.createElement("p")
        date.textContent = datevalue

        task.appendChild(text)
        task.appendChild(date)


        // Buat elemen tombol "check" dengan Font Awesome
        var checkbtn = document.createElement("button");
        checkbtn.innerHTML = "<i class='fa-solid fa-check'></i>";

        // Buat elemen tombol "delete" dengan Font Awesome
        var deletebtn = document.createElement("button");
        deletebtn.innerHTML = "<i class='fa-solid fa-trash'></i>";
        deletebtn.onclick = function() {
            removeTask(newDiv);
        };

        btnicon.appendChild(deletebtn);
        btnicon.appendChild(checkbtn);

        // Gabungkan elemen-elemen
        newDiv.appendChild(task);
        newDiv.appendChild(btnicon);

        // Tambahkan elemen ke dalam daftar
        taskList.appendChild(newDiv);

        // Reset input
        taskInput.value = "";
        dateinput.value = "";
    } else {
        alert("Silakan masukkan nilai");
    }
}

function moveTaskToDone(taskElement) {
    var TaskDone = document.getElementById("TaskDone");

    // Hapus tombol "delete" jika ada
    

    // Hapus elemen tombol "check" jika ada
    var checkButton = taskElement.querySelector(".fa-check");
    if (checkButton) {
        checkButton.remove();
    }

    // Pindahkan elemen task-item ke dalam TaskDone
    TaskDone.appendChild(taskElement);

    // Buat tombol "undo"
    var undoButton = document.createElement("button");
    undoButton.innerHTML = "<i class='fa-solid fa-undo'></i>";
    undoButton.onclick = function() {
        moveTaskBackToTaskList(taskElement);
    };



    // Perbarui elemen tombol "check" dengan tombol "undo"
    taskElement.querySelector(".btn-icon").appendChild(undoButton);

    // Tambahkan tombol "trash" ke elemen tombol "undo"
}

function moveTaskBackToTaskList(taskElement) {
    var taskList = document.getElementById("taskList");

    // Hapus tombol "undo" jika ada
    var undoButton = taskElement.querySelector(".fa-undo");
    if (undoButton) {
        undoButton.remove();
    }

    // Pindahkan elemen task-item kembali ke task-list
    taskList.appendChild(taskElement);

    // Buat tombol "check" di dalam task-item
    var checkButton = document.createElement("button");
    checkButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    checkButton.onclick = function() {
        moveTaskToDone(taskElement);
    };

    // Tambahkan tombol "check" ke elemen tombol "icon"
    taskElement.querySelector(".btn-icon").appendChild(checkButton);
}

// Tambahkan event listener untuk tombol "check" pada elemen task-item di task-list
var taskList = document.getElementById("taskList");
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("fa-check")) {
        moveTaskToDone(event.target.closest(".task-item"));
    }
});

// Tambahkan event listener untuk tombol "undo" pada elemen task-item di TaskDone
var TaskDone = document.getElementById("TaskDone");
TaskDone.addEventListener("click", function(event) {
    if (event.target.classList.contains("fa-undo")) {
        moveTaskBackToTaskList(event.target.closest(".task-item"));
    }
});

// Tambahkan event listener untuk tombol "trash" pada elemen task-item di task-list dan TaskDone
function removeTask(taskElement) {
    var taskList = document.getElementById("taskList");
    var TaskDone = document.getElementById("TaskDone");

    // Hapus elemen task-item dari task-list jika ada
    if (taskList.contains(taskElement)) {
        taskList.removeChild(taskElement);
    }

    // Hapus elemen task-item dari TaskDone jika ada
    if (TaskDone.contains(taskElement)) {
        TaskDone.removeChild(taskElement);
    }
}