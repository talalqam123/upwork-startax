$(function () {
    // $("#example1").DataTable();
    const tableRows = document.querySelectorAll('#example1 tbody tr');
    const clientRelId = document.getElementById('delete-client-id');   
    tableRows.forEach(row => {
        row.addEventListener('click', function () {
            const clientId = this.getAttribute('data-id');
            clientRelId.value = clientId;
        });
    });
});