import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ClientDetails from "./components/ClientDetails";
import Dashboard from "./components/Dashboard";
import RemunerationForm from "./components/Business/AddBusiness/BSPL/remuneration";
import IncomeUnder44AD from "./components/Business/incmeunder44ad";
import BSPLIncomeForm from "./components/Business/AddBusiness/BSPL/bspl_income";
import NoBooksOfAccountIncome from "./components/Business/AddBusiness/no.ofbook_accounts";
import SpeculativeIncomeForm from "./components/Business/AddBusiness/speculativeincomeform";
import GSTDetailsForm from "./components/Business/Financial Staements & Schedules/gst";
import BusinessIncomeForm from "./components/Business/Financial Staements & Schedules/schedule_bp";
import ScheduleOI from "./components/Business/Financial Staements & Schedules/schedule_oi";
import AuditorDetailsForm from "./components/Business/Audit Details/auditordetails";
import Form3CA3CB from "./components/Business/Audit Details/3ca_3cb_3_cd";
import DetailsOfTradingConcern from "./components/Business/Quantitave Details/trading_concern";
import ESRDetailsForm from "./components/Business/AddBusiness/BSPL/bspl_esrdetails";
import DepreciationForm from "./components/Business/AddBusiness/BSPL/bspl_depreciationForm";
import BSPLBalanceSheet from "./components/Business/AddBusiness/BSPL/temp_balancesheet";
import ScheduleICDSForm from "./components/Business/AddBusiness/BSPL/bspl_scheduleicds";
import ShareDebenturesForm from "./components/Business/Capital Gains/share_debentures";
import CapitalGainsForm from "./components/Business/Capital Gains/vda_income";
import MutualFunds from "./components/Business/Capital Gains/mutual_funds";
import StockOptionsForm from "./components/Business/Capital Gains/stock_rsu";
import LandOrBuildingForm from "./components/Business/Capital Gains/landorbuilding_form";
import OtherAssetForm from "./components/Business/Capital Gains/any_other_asset";
import DeemedCapitalGainsForm from "./components/Business/Capital Gains/deemed_capital_gain";
import NonSalaryTDS from "./components/TDS/TDS-TCS/non_salary_tds";
import TdsOnProperty from "./components/TDS/TDS-TCS/tds_property";
import TCSForm from "./components/TDS/TDS-TCS/tcs_form";
import DeferredTaxESOPs from "./components/TDS/TDS-TCS/deferred_info";
import AddClientInfo from "./components/add_clientdetails";
import ResidentialStatus from "./components/Final/More Info/resedential";
import UnlistedShares from "./components/Final/More Info/unlistedshare";
import DirectorshipDetails from "./components/Final/More Info/directorship";
import ForeignAssetsIncomes from "./components/Final/More Info/Advanced Info/Foreign Assets/Foreignassets";
import ScheduleSPI from "./components/Final/More Info/schedule_spi";
import PropertyDetails from "./components/Final/More Info/schedule_al";
import ExpenditureOnForeignTravel from "./components/Final/More Info/expenditure_on_foreign";
import ExpenditureOnElectricityConsumption from "./components/Final/More Info/expenditure_on_elec";
import ClauseIVSeventhProviso from "./components/Final/More Info/clause.iv";
import TrpInfoForm from "./components/Final/More Info/trpinfo";
import RepresentativeAssesseeForm from "./components/Final/More Info/Representative_assesse";
import ForeignCustodialAccount from "./components/Final/More Info/Advanced Info/Foreign Assets/foreign_custodial";
import ForeignCashValueInsurance from "./components/Final/More Info/Advanced Info/Foreign Assets/foreign_casvalue";
import FinancialInterestForm from "./components/Final/More Info/Advanced Info/Foreign Assets/foreign_interest";
import ImmovablePropertyForm from "./components/Final/More Info/Advanced Info/Foreign Assets/immovable_prop";
import OtherAssets from "./components/Final/More Info/Advanced Info/Foreign Assets/other_assets";
import AccountsHavingSigningAuthority from "./components/Final/More Info/Advanced Info/Foreign Assets/signing_authority";
import TrustOutsideIndiaTrustee from "./components/Final/More Info/Advanced Info/Foreign Assets/trust_outside_india";
import ForeignEquityDebtInterest from "./components/Final/More Info/Advanced Info/Foreign Assets/foreign_equity";
// import TdsImportComponent from "./components/Tds/tds_import";
// import NonSalaryTdsComponent from "./components/Tds/non_salary_tds";
// import PropertyTdsComponent from "./components/Tds/property_tds";
// import TcsComponent from "./components/Tds/tcs";
// import EsopsComponent from "./components/Tds/esops";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}>
                <Route index element={<Home />} />
                <Route path="client" element={<ClientDetails />} />
                <Route path="/basic_details/add_client" element={<AddClientInfo />} />

                {/* Business routes */}
                <Route path="client/business">
                    <Route path="44ad" element={<IncomeUnder44AD />} />
                    <Route path="remuneration" element={<RemunerationForm />} />
                    <Route path="BSPL">
                        <Route index element={<BSPLIncomeForm />} />
                        <Route path="fill-bspl" element={<BSPLBalanceSheet />} />
                        <Route path="depreciation" element={<DepreciationForm />} />
                        <Route path="icds" element={<ScheduleICDSForm />} />
                        <Route path="esr" element={<ESRDetailsForm />} />
                    </Route>
                    <Route path="business_no_book" element={<NoBooksOfAccountIncome />} />
                    <Route path="business_speculative" element={<SpeculativeIncomeForm />} />
                    <Route path="business_gst" element={<GSTDetailsForm />} />
                    <Route path="schedule_bp" element={<BusinessIncomeForm />} />
                    <Route path="schedule_oi" element={<ScheduleOI />} />
                    <Route path="audit" element={<AuditorDetailsForm />} />
                    <Route path="cacbcd3" element={<Form3CA3CB />} />
                    <Route path="tradin" element={<DetailsOfTradingConcern />} />
                    <Route path="manufacturing_materials" element={<DetailsOfTradingConcern />} />
                    <Route path="manufacturing_products" element={<DetailsOfTradingConcern />} />
                </Route>
                <Route path="client/Capital">
                    <Route path="capital_gains_share_debentures" element={<ShareDebenturesForm />} />
                    <Route path="capital_gains_vda_income" element={<CapitalGainsForm />} />
                    <Route path="capital_gains_mutual_funds" element={<MutualFunds />} />
                    <Route path="capital_gains_stock_rsu" element={<StockOptionsForm />} />
                    <Route path="capital_gains_land_property" element={<LandOrBuildingForm />} />
                    <Route path="capital_gains_any_other_asset" element={<OtherAssetForm />} />
                    <Route path="capital_gains_deemed_capital_gain" element={<DeemedCapitalGainsForm />} />
                </Route>
                <Route path="client/tds">
                    {/* <Route path="import" element={<TdsImportComponent />} /> */}
                    <Route path="non-salary" element={<NonSalaryTDS />} />
                    <Route path="property" element={<TdsOnProperty />} />
                    <Route path="tcs" element={<TCSForm />} />
                    <Route path="esops" element={<DeferredTaxESOPs />} />
                </Route>
                <Route path="client/final">
                    <Route path="residential_status" element={<ResidentialStatus />} />
                    <Route path="unlisted_shares" element={<UnlistedShares />} />
                    <Route path="directorship_details" element={<DirectorshipDetails />} />
                    <Route path="foreign_assets_incomes_taxes">
                        <Route index element={<ForeignAssetsIncomes />} />
                        <Route path="foreign_bank" element={<ForeignCustodialAccount />} />
                        <Route path="foreign_custodial_account" element={<ForeignCustodialAccount />} />
                        <Route path="foreign_equity_debt_interest" element={<ForeignEquityDebtInterest />} />
                        <Route path="foreign_cash_value_insurance" element={<ForeignCashValueInsurance />} />
                        <Route path="financial_interest" element={<FinancialInterestForm />} />
                        <Route path="immovable_property" element={<ImmovablePropertyForm />} />
                        <Route path="other_assets" element={<OtherAssets />} />
                        <Route path="accounts_having_signing_authority" element={<AccountsHavingSigningAuthority />} />
                        <Route path="trust_outside_india_trustee" element={<TrustOutsideIndiaTrustee />} />
                        <Route path="other_sources_income_outside_india" element={<TrustOutsideIndiaTrustee />} />
                    </Route>
                    <Route path="schedule_spi" element={<ScheduleSPI />} />
                    <Route path="schedule_al" element={<PropertyDetails />} />
                    <Route path="expenditure_on_foreign_travel" element={<ExpenditureOnForeignTravel />} />
                    <Route path="expenditure_on_electricity_consumption" element={<ExpenditureOnElectricityConsumption />} />
                    <Route path="clause_iv_seventh" element={<ClauseIVSeventhProviso />} />
                    <Route path="trp_info" element={<TrpInfoForm />} />
                    <Route path="assessee_info" element={<RepresentativeAssesseeForm />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
