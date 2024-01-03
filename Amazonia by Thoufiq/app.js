//Sidebar of Home Page

function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  let cross = document.querySelector("#x");
  cross.addEventListener("click", () => {
    sidebar.style.width = "0";
  });

  if (sidebar.style.width === "0px" || sidebar.style.width === "") {
    sidebar.style.width = "280px";
  }
}
