import React from 'react';

// Sample data for the transactions table
const transactionsData = [
  {
    txnId: '123456',
    dateCreated: '2024-04-06',
    amount: '$150.00',
    type: 'Sale',
    source: 'Website',
    origin: 'Online',
    status: 'Completed',
    orderId: 'ORD123',
    txnType: 'Credit',
  },
  {
    txnId: '123456',
    dateCreated: '2024-04-06',
    amount: '$150.00',
    type: 'Sale',
    source: 'Website',
    origin: 'Online',
    status: 'Completed',
    orderId: 'ORD123',
    txnType: 'Credit',
  },
  {
    txnId: '123456',
    dateCreated: '2024-04-06',
    amount: '$150.00',
    type: 'Sale',
    source: 'Website',
    origin: 'Online',
    status: 'Completed',
    orderId: 'ORD123',
    txnType: 'Credit',
  },
  // ... more transactions
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
      التحويلات الاخيرة

      </h4>
      <div className="overflow-x-auto">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-stroke sm:rounded-sm">
            <table className="min-w-full divide-y divide-stroke">
              <thead>
                <tr>
                  <th className="text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                    Txn ID
                  </th>
                  <th className=" text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                  تاريخ الإنشاء

                  </th>
                  <th className="text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                  كمية

                  </th>
                  <th className="text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                    نوع التحويل
                  </th>
                  <th className="text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                    منطقة التحويل
                  </th>
                  <th className="text-center align-middle px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider">
                    الحالة
                  </th>
                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stroke dark:divide-strokedark dark:bg-boxdark">
                {transactionsData.map((transaction, idx) => (
                  <tr key={idx}>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.txnId}
                    </td>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.dateCreated}
                    </td>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.amount}
                    </td>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.type}
                    </td>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.source}
                    </td>
                    <td className="text-center align-middle px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white">
                      {transaction.origin}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOne;
