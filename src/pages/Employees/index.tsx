import { Default } from "../../components/Default"
import { Table } from "../../components/Table"
import { categories } from "../../util/categories"
import { tables } from "../../util/tables"

const Employees = () => {
  return (
    <Default title='Funcionários' >
      <Table title={categories[2].subtitle} header={tables[1].header} />
    </Default>
  )
}

export default Employees
