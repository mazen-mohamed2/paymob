import React from 'react'
import TableOne from '../../components/Tables/TableOne'
import DefaultLayout from '../../layout/DefaultLayout'
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'

const Transactions = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="التحويلات الاخيرة"  />

        <TableOne/>
    </DefaultLayout>
  )
}

export default Transactions