var number = 1;


document.addEventListener('DOMContentLoaded', function () {
    const API_URL  = 'http://127.0.0.1:5000/'
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const removeTask = document.getElementsByClassName('remove');

  
    const buildMylist = async () => {
        const data = await fetchMylist();

        const tableData = data.map(value => {
            return (
              `<tr data-value="${value.id}">
                 <td>${value.id}</td>
                 <td>${value.task}</td>
                 <td><span type="button" aria-hidden='true' class="remove">&times;</span</td>
              </tr>`
            );
          }).join('');
          
          const tableBody = document.querySelector("#myListBody");
          tableBody.innerHTML = tableData;
    }
    
    const fetchMylist = async () => {
        const url = API_URL + 'tasks'
        let response = await fetch(url, { method: "GET" });
        let data = await response.json();
        return data

    }
    buildMylist();

    const addMylist = async () => {
        const task = taskInput.value;
        const url = API_URL + 'task';
        const data = {'name':  task.trim()};
        let response = await fetch(url, { method: "POST", headers: {
            "Content-Type": "application/json",
          }, body: JSON.stringify(data)});

        let returndata = response.json();
        return returndata
    
    }
     

    addTaskBtn.addEventListener('click', async function () {
        const task = taskInput.value;
        if (task.trim() !== '') {
            const result = await addMylist();
            if (result) {
                buildMylist();
            }
        }
    });

    document.addEventListener("click", async function(e){
        const target = e.target.closest(".remove"); 
      
        if(target){
          const tr = target.closest('tr');
          if (tr) {
            const taskid = tr.dataset.value;
            const url = API_URL + 'task/' + taskid;
            let response = await fetch(url, { method: "DELETE", headers: {
                "Content-Type": "application/json",
            }});
            tr.remove();
          }
        }
      });

    
});
