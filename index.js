const taskinput = document.getElementById("inputText");
const taskaddbotton = document.getElementById("buttonaddid");
const taskcontainer = document.getElementById("taskarea");
taskaddbotton.addEventListener("click",
    function () {
        const tasktext = taskinput.value.trim();
        if (tasktext === "")
            return;
        const taskdiv = document.createElement("div");
        const checkboxj = document.createElement("input");
        const textspan = document.createElement("span");
        textspan.classList.add("spantextcss");
        const deletetask = document.createElement("button");
        deletetask.classList.add("deletetaskcss");
        deletetask.textContent = "🗑️";
        checkboxj.type = "checkbox";
        textspan.textContent = tasktext;
        taskdiv.appendChild(checkboxj);
        taskdiv.appendChild(textspan);
        taskdiv.appendChild(deletetask);
        taskcontainer.appendChild(taskdiv);
        deletetask.addEventListener("click", function () {
            taskcontainer.removeChild(taskdiv);
        });
        inputText.value = "";
    })
