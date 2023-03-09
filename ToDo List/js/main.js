document.querySelector('#push').onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0){
    alert("Adicione uma tarefa!")
    } 
        else {
            document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            `;

        var currentTask = document.querySelectorAll(".delete");
        for (var i=0; i<currentTask.length; i++) {
            currentTask[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}