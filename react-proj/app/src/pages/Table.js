import React from 'react'
import Table from '../components/Table';

export default function TablePage() {
    const tableData = [
        ['John Doe', 'john.doe@example.com', '+1234567890'],
        ['Jane Smith', 'jane.smith@example.com', '+9876543210'],
      ];
    
      const tableHeaders = ['Name', 'Email', 'Phone Number'];
  return (
    <div>
         <div>
      {/* Other content in your component */}
      <Table data={tableData} headers={tableHeaders} />
    </div>
    </div>
  )
}
