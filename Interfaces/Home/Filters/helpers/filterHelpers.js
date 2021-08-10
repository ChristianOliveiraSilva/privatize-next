export const filterCompanies = () => {
    var input, filter, companies, companieName, grid, i, txtValue
    input = document.getElementById('inputFilter')
    filter = input.value.toUpperCase()
    grid = document.getElementById('companiesGrid')
    companies = grid.children
    for (i = 0; i < companies.length; i++) {
        companieName = companies[i].getElementsByClassName('companieName')[0]
        if (companieName) {
            txtValue = companieName.textContent || companieName.innerText
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                companies[i].style.display = ''
            } else {
                companies[i].style.display = 'none'
            }
        }
    }
}

export default filterCompanies
