import BarChartComponent from "./barchart";
import AreaChartComponent from "./chart";

const Report = () => {
    return (
        <>
            <div className="row mt-2 pt-1">
                <div className="col-md-6 pe-0 pe-md-2 ">
                    <div className="chartbox">
                        <h3 className="crm-title pb-2 text-start">Revenue</h3>
                        <BarChartComponent />
                    </div>
                </div>
                <div className="col-md-6 ps-2 ps-md-1 mt-3 mt-md-0">
                    <div className="chartbox">
                        <h3 className="crm-title pb-2 text-start">Leads</h3>

                        <AreaChartComponent />
                    </div>
                </div>
            </div>
        </>
    );


}

export default Report