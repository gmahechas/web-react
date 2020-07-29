import React from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function TableShared(props: any) {
  return (
    <div>
      <DataTable value={props.items}>
        <Column field="id" header="Id" />
        <Column field="countryName" header="Name" />
        <Column field="countryCode" header="Code" />
      </DataTable>
    </div>
  )
}

export default TableShared;
