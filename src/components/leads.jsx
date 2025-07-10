const Leads = () => {


    return (
        <>
            <div className="row text-start">
                <div className="col-md-12">
                    <h3 className="crm-title pb-2">Leads</h3>

                </div>

            </div>
            <div className="home-card">
                <div className="card p-2 mx-0">
                    <div className="row">
                        <div className="col-md-6 mb-5 text-start">
                            <h3>New Leads</h3>
                        </div>
                        <div className="col-md-6 pb-5">
                            <i class="bi bi-graph-up-arrow"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="existing text-start">70265</h3>
                        </div>
                        <div className="col-6">
                            <h3 className="count text-end">+11.01%</h3>
                        </div>
                    </div>
                </div>



                <div className="card p-2 mx-0">
                    <div className="row">
                        <div className="col-md-6 mb-5 text-start">
                            <h3 className="text-start">Loss</h3>
                        </div>
                        <div className="col-md-6 pb-5">
                            <i class="bi bi-graph-down-arrow"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="existing text-start">33671</h3>
                        </div>
                        <div className="col-6">
                            <h3 className="less-count text-end">-0.03%</h3>
                        </div>
                    </div>
                </div>


                <div className="card p-2 mx-0">
                    <div className="row">
                        <div className="col-md-6 mb-5 text-start">
                            <h3>Total Closed</h3>
                        </div>
                        <div className="col-md-6 pb-5">
                            <i class="bi bi-graph-up-arrow total-cost"></i>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-6">
                            <h3 className="existing text-start">70265</h3>
                        </div>
                        <div className="col-6">
                            <h3 className="count text-end">+11.01%</h3>
                        </div>
                    </div>
                </div>


                <div className="card p-2 mx-0">
                    <div className="row">
                        <div className="col-md-6 mb-5 text-start">
                            <h3> Follow Up</h3>
                        </div>
                        <div className="col-md-6 pb-5">
                            <i class="bi bi-graph-up-arrow follow-up"></i>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-6">
                            <h3 className="existing text-start">70265</h3>
                        </div>
                        <div className="col-6">
                            <h3 className="count text-end">+11.01%</h3>
                        </div>
                    </div>
                </div>


                <div className="card p-2 mx-0">
                    <div className="row">
                        <div className="col-md-6 mb-5 text-start">
                            <h3>New Leads</h3>
                        </div>
                        <div className="col-md-6 pb-5">
                            <i class="bi bi-graph-up-arrow new-leads2"></i>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-6">
                            <h3 className="existing text-start">70265</h3>
                        </div>
                        <div className="col-6">
                            <h3 className="count text-end">+11.01%</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Leads