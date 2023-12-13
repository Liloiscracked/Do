const BORDER_SIZE = 14;
const panel = document.getElementById("right_panel");

let m_pos;
function resize(e){
  const dx = m_pos - e.x;
  m_pos = e.x;
  panel.style.width = (parseInt(getComputedStyle(panel, '').width) - dx) + "px";
}

panel.addEventListener("mousedown", function(e){
  if (e.offsetX < BORDER_SIZE) {
    m_pos = e.x;
    document.addEventListener("mousemove", resize, false);
  }
}, false);

document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resize, false);
}, false);

document.getElementById("newProject").addEventListener("click", function() {
    // Prompt the user for the new project name
    var projectName = prompt("Enter the name for the new project:");

    if (projectName !== null && projectName.trim() !== "") {
        // Create a new div element
        var projectId = "project" + (document.getElementById("ProjectList").childElementCount + 1);

        var newProjectDiv = document.createElement("div");
        newProjectDiv.textContent = projectName;
        newProjectDiv.className = "projectItem"; // Add a class for event delegation
        newProjectDiv.id = projectId; // Set the id attribute
        document.getElementById("ProjectList").appendChild(newProjectDiv);
    }
});

document.getElementById("newTask").addEventListener("click", function() {
    // Prompt the user for the new project name
    var projectName = prompt("Enter the name for the new task:");

    if (projectName !== null && projectName.trim() !== "") {
        var projectId = "task" + (document.getElementById("ProjectList").childElementCount + 1);

        var newProjectDiv = document.createElement("div");
        newProjectDiv.textContent = projectName;
        
        newProjectDiv.id = projectId; // Set the id attribute
        document.getElementById("TasksList").appendChild(newProjectDiv);
    }
});

document.getElementById("ProjectList").addEventListener("click", function(event) {
    // Check if the clicked element has the class "projectItem"

        var confirmRemove = confirm("Are you sure you want to remove this project?");
        
        if (confirmRemove) {
            // Remove the clicked div
            event.target.remove();
        }
   
});

document.getElementById("TasksList").addEventListener("click", function(event) {
    // Check if the clicked element has the class "projectItem"

        var confirmRemove = confirm("Are you sure you want to remove this project?");
        
        if (confirmRemove) {
            // Remove the clicked div
            event.target.remove();
        }
   
});