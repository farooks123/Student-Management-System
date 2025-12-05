import React from 'react'
import "../components/Table.css"

const Table = () => {
  return (
  <>
  <div>STUDENT TABLE</div>
    <div className='table'>
      <table>
        <thead>
            <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Chandan</td>
                <td>25</td>
                <td></td>
            </tr>
            <tr>
                <td>Manya</td>
                <td>20</td>
                <td></td>
            </tr>
            <tr>
                <td>Sandeep</td>
                <td>22</td>
                <td></td>
            </tr>
            <tr>
                <td>Farooq</td>
                <td>24</td>
                <td></td>
            </tr>
            <tr>
                <td>Manish</td>
                <td>23</td>
                <td></td>
            </tr>
        </tbody>
      </table>
    </div>
    <div><button>Edit</button></div>
    </>
  )
}

export default Table