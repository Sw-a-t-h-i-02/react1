const TableComponent=()=>{


    return(
        <>
        <div className="container mt-3">
  <h2>Table</h2>
  
  <table className="table table-dark table-hover" style={{width:"50%"}}>
    <thead>
      <tr>
        <th style={{color:"green"}}>Firstname</th>
        <th  style={{color:"green"}}>Lastname</th>
        <th  style={{color:"green"}}>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Kummari</td>
        <td>Swathi</td>
        <td>swathi@gmail.com</td>
      </tr>
      <tr>
        <td>kummari</td>
        <td>Bharath</td>
        <td>bharath@gmail.com</td>
      </tr>
      <tr>
        <td>kummari</td>
        <td>Lakshmi</td>
        <td>Lakshmi@gmail.com</td>
      </tr>
    </tbody>
  </table>
</div>
        </>
    )
}
export default TableComponent
