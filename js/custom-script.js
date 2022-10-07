// window.addEventListener('DOMContentLoaded', event => {

// Toggle the side navigation
const sidebarToggle = document.body.querySelector('#sidebarToggle');
if (sidebarToggle) {
  // Uncomment Below to persist sidebar toggle between refreshes
  if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    document.body.classList.toggle('sb-sidenav-toggled');
  }
  sidebarToggle.addEventListener('click', event => {
    event.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
  });
}

// Data Table Script
$(document).ready(function () {
  var table = $('#example').DataTable({
    rowReorder: {
      selector: 'td:nth-child(2)'
    },
    responsive: true
  });
});

// Delete Row Button
$('a[type="button"]').click(function(e){
  $(this).closest('tr').remove()
})
