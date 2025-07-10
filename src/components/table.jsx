import { Link } from "react-router-dom";
import { tablenavright,tablenavleft,sorting } from "../data/content";


const Datatable = () => {

    return (
        <div className="card custom-table mx-0 mt-3 p-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-body">
                        <div className="table-header">
                            <div className="row">
                                <div className="col-md-6  text-start">
                                    <h3 className="crm-title">All Leads</h3>
                                    <p>Find all leads in a single place</p>
                                </div>

                                <div className="col-md-6 d-md-flex d-block gap-2 align-items-center justify-content-end">
                                    <div className="input-group mb-3 mb-md-0" style={{ maxWidth: "300px" }}>
                                        <input type="text" className="form-control search" placeholder="Search..." />
                                        <span className="input-group-text bg-white">
                                            <i className="bi bi-search text-muted"></i>
                                        </span>
                                    </div>

                                    <i class="bi bi-funnel filter"></i>
                                    <div className="btn btn-primary w-75 w-75 ms-2 ms-md-0" style={{maxWidth:'126px'}}><i class="bi bi-plus-circle"></i> Add Leads</div>
                                </div>


                            </div>
                        </div>
                        <hr className="mt-0 mb-3"/>
                        <div style={{overflow:'auto'}}>
                        <table class="table table-responsive table-hover align-middle text-nowrap">
                            <thead class="table-light" style={{ width: '100%' }}>
                                <tr>
                                    <th scope="col" style={{ width: '12.5%' }}># <img src={sorting} /></th>
                                    <th scope="col" style={{ width: '12.5%' }}>Full Name <img src={sorting} />
                                    </th>
                                    <th scope="col" style={{ width: '12.5%' }}>description</th>
                                    <th scope="col" style={{ width: '12.5%' }}> Status <img src={sorting} /></th>
                                    <th scope="col" style={{ width: '12.5%' }}>Source</th>
                                    <th scope="col" style={{ width: '12.5%' }}>Size</th>
                                    <th scope="col" style={{ width: '12.5%' }}>Interest</th>
                                    <th scope="col" style={{ width: '12.5%' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                    <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                      <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                     <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                     <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>                                </tr>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                     <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>                              </tr>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Otto</td>
                                    <td>mark.otto@example.com</td>
                                    <td><span class="badge">Open</span></td>
                                    <td>Organic</td>
                                    <td>-$270.00</td>
                                    <td>------</td>
                                     <td className="d-flex gap-2 justify-content-center align-items-center">
                                          <Link to='/lead-profile'><i class="bi bi-eye" style={{ color: '#000' }}></i></Link>

                                        <i class="bi bi-plus-circle" style={{ color: '#5E39DD' }}></i>
                                       <Link to='/lead-edit'> <i class="bi bi-pencil-square" style={{ color: '#05DF83' }}></i></Link>
                                        <i class="bi bi-trash" style={{ color: '#FC0204' }}></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="table-footer d-flex justify-content-md-between justify-content-center align-items-center flex-wrap gap-2">
                            <div className="text-start">
                                <p className="m-0">1–10 of 97</p>
                            </div>

                            <div className="d-flex align-items-center justify-content-center justify-content-md-end  gap-4 flex-wrap">
                                <div className="page-drop-down d-flex gap-1">
                                <p className="m-0">Rows per page</p>
                                <select className="form-select form-select-sm w-auto" aria-label="Default select example">
                                    <option selected>10</option>
                                    <option value="1">10</option>
                                    <option value="2">20</option>
                                    <option value="3">30</option>
                                </select>
                            </div>
                                <div className="row-nav">
                                   <img src={tablenavleft}/> <span  className="mt-md-2 mt-0">1 / 10</span> <img src={tablenavright}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Datatable;
