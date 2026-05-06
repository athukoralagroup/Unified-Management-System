import { Route } from "react-router-dom";
import DashboardLayoutP from '../pages/PackingSection/PackingDashbordLayout';
import PackingDashboard from '../pages/PackingSection/PackingDashboard';
import LocalRecordEntry from "./PackingSection/Local_Sales/LocalRecordEntry";
import ViewLocalSaleRecords from "./PackingSection/Local_Sales/ViewLocalSaleRecords";
import EditLocalRecord from "./PackingSection/Local_Sales/EditLocalRecord";
import TeaCenterRecordEntry from "./PackingSection/Tea_center/TeaCenterRecordEntry";
import ViewTeaCenterRecords from "./PackingSection/Tea_center/ViewTeaCenterRecord";
import TransIn from "./PackingSection/Trans_in/TransIn";
import ViewTransInRecords from "./PackingSection/Trans_in/ViewTransInRecords";
import EditTeaCenterRecord from "./PackingSection/Tea_center/EditTeaCenterRecord";
import TeaGradesReceivedEntry from "./PackingSection/Trans_In_Factory/TeaGradesReceivedEntry";
import EditTeaReceivedRecord from "./PackingSection/Trans_In_Factory/EditTeaReceivedRecord";
import ViewTeaGradesReceivedRecords from "./PackingSection/Trans_In_Factory/ViewTeaGradesReceivedRecords";
import ProductIssueSummary from "./PackingSection/Summary _Report/ProductIssueSummary";
import ViewPackingStock from "./PackingSection/Summary _Report/ViewPackingStock";
import TeaGradesReceivedOutEntry from "./PackingSection/Trans_In_other/TeaGradesReceivedOutEntry";
import ViewTeaGradesReceivedOutRecords from "./PackingSection/Trans_In_other/ViewTeaGradesReceivedOutRecords";
import RawMaterialInEntry from "./PackingSection/Trans_In_RawMaterial/RawMaterialInEntry";
import ViewRawMaterialInRecords from "./PackingSection/Trans_In_RawMaterial/ViewRawMaterialInRecords";
import EditTeaReceivedOutRecord from "./PackingSection/Trans_In_other/EditTeaReceivedOutRecord";
import EditRawMaterialIn from "./PackingSection/Trans_In_RawMaterial/EditRawMaterialIn";



export const PackingRoutes = () => (
  <Route path="/packing" element={<DashboardLayoutP />}>
    <Route index element={<PackingDashboard />} />
    <Route path="local-record-entry" element={<LocalRecordEntry />} />
    <Route path="local-record-view" element={<ViewLocalSaleRecords />} />
    <Route path="edit-local-sale" element={<EditLocalRecord />} />
    <Route path="tea-center-record-entry" element={<TeaCenterRecordEntry />} />
    <Route path="tea-center-record-view" element={<ViewTeaCenterRecords />} />
    <Route path="edit-tea-center-issue" element={<EditTeaCenterRecord />} />
    <Route path="trans-in-factory-entry" element={<TeaGradesReceivedEntry />} />
    <Route path="trans-in-factory-view" element={<ViewTeaGradesReceivedRecords />} />
    <Route path="edit-received-record" element={<EditTeaReceivedRecord />} />
    <Route path="trans-in-entry" element={<TransIn />} />
    <Route path="trans-in-view" element={<ViewTransInRecords />} />
    <Route path="product-issue-summary" element={<ProductIssueSummary />} />    
    <Route path="summary-reports" element={<ViewPackingStock />} />

    //Trans in other
    <Route path="trans-in-other" element={<TeaGradesReceivedOutEntry />} />
    <Route path="trans-in-view-other" element={<ViewTeaGradesReceivedOutRecords />} />
    <Route path="edit-received-out-record" element={<EditTeaReceivedOutRecord />} />

    //Raw Material
    <Route path="trans-in-raw-material" element={<RawMaterialInEntry />} />
    <Route path="trans-in-view-raw-material" element={<ViewRawMaterialInRecords />} />
    <Route path="edit-raw-material-in" element={<EditRawMaterialIn />} />
  </Route>
);