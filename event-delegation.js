document.querySelector("#category").addEventListener('click', (e)=> {
  console.log("CLICKED", e.target)
  window.location.href = window.location + "/" + e.target.id
})