import React from "react";
import { useNavigate } from "react-router-dom";
import StockOptionsForm from "./stock_rsu";
import LandOrBuildingForm from "./landorbuilding_form";
import OtherAssetForm from "./any_other_asset";
const CapitalGains = ({ clientFullName, clientRelId }) => {
    const navigate = useNavigate();
    
    const sections = [
        { id: "01", label: "Share/Debentures", url: `/catalog_2024/capital_gains_share_debentures/${clientRelId}` },
        { id: "02", label: "VDA Income", url: `/catalog_2024/capital_gains_vda_income/${clientRelId}` },
        { id: "03", label: "Mutual Funds", url: `/catalog_2024/capital_gains_mutual_funds/${clientRelId}` },
        { id: "04", label: "Stock Options/ RSUs", url: `/catalog_2024/capital_gains_stock_rsu/${clientRelId}` },
        { id: "05", label: "Land or Building (Property)", url: `/catalog_2024/capital_gains_land_property/${clientRelId}` },
        { id: "06", label: "Any other asset", url: `/catalog_2024/capital_gains_any_other_asset/${clientRelId}` },
        { id: "07", label: "Deemed Capital Gains", url: `/catalog_2024/capital_gains_deemed_capital_gain/${clientRelId}` },
    ];

    return (
        <div className="main_row d-block">
            <div className="row mt-5 inr_tabs_button">
                <div className="col-md-12">
                    <div><strong>Add Capital Gains</strong></div>
<OtherAssetForm clientRelId={1234} />
                </div>

                {sections.map((section) => (
                    <div className="col-md-8 mt-4" key={section.id}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="headin_iner row w-100">
                                <div className="col-9"><strong>{section.id}</strong> {section.label}</div>
                                <button
                                    className="buton_tabs_ac btn col-3 w-auto btn-block bg-gradient-info btn-flat text-sm"
                                    onClick={() => navigate(section.url)}
                                >
                                    {section.label}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CapitalGains;
