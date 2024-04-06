import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const Calendar = () => {
  return (
    <DefaultLayout>

      {/* <!-- ====== Calendar Section Start ====== --> */}
     <TableOne/>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </DefaultLayout>
  );
};

export default Calendar;
