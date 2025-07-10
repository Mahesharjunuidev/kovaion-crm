import { userlead,emailprofile } from "../data/content";

const Leadprofile = () => {
    return (
        <>
            <div className="lead-profile ps-0">
                <div className="card mt-md-0 mt-5 p-3 mx-md-1 mx-0 p-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3">
                        <div className="d-flex align-items-start gap-3">
                            <img src={userlead} className="img-fluid"/>
                            <div>
                                <h5 className="mb-1 text-start">Thomas Fleming</h5>
                                <p className="text-muted mb-0 text-start">On My GoodSide Inc.</p>
                            </div>
                        </div>
                        <div className="text-end">
                            <small className="text-muted">Last contacted on: 24 Jan 2024</small>
                            <div className="actions text-start mt-3">
                                <button className="btn btn-primary mb-2 mb-md-0"> Send Email</button>
                                <button className="btn btn-outline ms-2 mb-2 mb-md-0 me-2 me-md-0"> Convert</button>
                                <button className="btn btn-outline ms-md-2 mb-2 mb-md-0"> Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 px-0 px-md-2">
                        <div className="card position-sticky p-3 ms-2 mt-3" style={{ top: '20px' }}>
                            <h6 className="text-muted mb-3 text-start">Related Lists</h6>
                            <ul className="nav related-list flex-column text-start">
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"> <i className="bi bi-journal-text pe-3"></i> Notes</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-download pe-3"></i>Attachments</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-activity pe-3"></i>Open Activities</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-x-circle pe-3"></i>Closed Activities</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-envelope pe-3"></i>Emails</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-megaphone pe-3"></i>Campaigns</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-list-task pe-3"></i>Tasks</a></li>
                                <li className="nav-item"><a href="#" className="nav-link px-0 py-1"><i className="bi bi-people pe-3"></i>Social</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9 px-0 ps-md-0">
                        <div className="actions text-start mt-3">
                            <button className="btn btn-primary"> Overview</button>
                            <button className="btn btn-outline ms-2"> Timeline</button>
                        </div>
                        <div className="card p-3 mb-3 mx-0 mt-3 text-start">
                            <ul className="profile-details ps-0 text-start">
                                <li><b>Lead owner</b> <span>Nandha Kumar</span></li>
                                <li><b>Email</b> <span>rohan.mehta@innovix.com Email</span></li>
                                <li><b>Phone</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                <li><b>Mobile</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                <li><b>Lead status</b><button className="btn btn-batch">Completed</button></li>
                            </ul>
                        </div>

                        {/* Lead Details */}
                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                Hide Details
                            </div>
                            <div className="card-body text-start">

                                <i className="bi bi-person"></i> <p className="d-inline-block">Lead Information</p>
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <ul className="profile-details grid-2 ps-0 text-start">
                                            <li><b>Lead owner</b> <span>Nandha Kumar</span></li>
                                            <li><b>Email</b> <span>rohan.mehta@innovix.com Email</span></li>
                                            <li><b>Phone</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Mobile</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Lead status</b><button className="btn btn-batch">Completed</button></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className="profile-details grid-2 ps-0 text-start">
                                            <li><b>Lead owner</b> <span>Nandha Kumar</span></li>
                                            <li><b>Email</b> <span>rohan.mehta@innovix.com Email</span></li>
                                            <li><b>Phone</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Mobile</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Lead status</b><button className="btn btn-batch">Completed</button></li>
                                        </ul>
                                    </div>
                                </div>


                                <i className="bi bi-geo-alt"></i> <p className="d-inline-block">Address Information</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="profile-details grid-2 ps-0 text-start">
                                            <li><b>Lead owner</b> <span>Nandha Kumar</span></li>
                                            <li><b>Email</b> <span>rohan.mehta@innovix.com Email</span></li>
                                            <li><b>Phone</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Mobile</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Lead status</b><button className="btn btn-batch">Completed</button></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-6">
                                        <ul className="profile-details grid-2 ps-0 text-start">
                                            <li><b>Lead owner</b> <span>Nandha Kumar</span></li>
                                            <li><b>Email</b> <span>rohan.mehta@innovix.com Email</span></li>
                                            <li><b>Phone</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Mobile</b> <span><i className="bi bi-telephone-forward" style={{ color: '#5E39DD' }}></i> +91 91234 56789</span></li>
                                            <li><b>Lead status</b><button className="btn btn-batch">Completed</button></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <h6 className="mb-0 text-black">Notes</h6>
                                    <select className="form-select form-select-sm w-auto">
                                        <option>Recent Last</option>
                                        <option>Oldest First</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                No Record Found

                            </div>
                        </div>


                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <h6 className="mb-0 text-black">Attachments</h6>
                                    <select className="form-select form-select-sm w-auto">
                                        <option>Attach</option>
                                        <option>Attach2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                No Record Found

                            </div>
                        </div>

                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <h6 className="mb-0 text-black"> Open Activities</h6>
                                    <select className="form-select form-select-sm w-auto">
                                        <option>Attach</option>
                                        <option>Attach2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                No Record Found

                            </div>
                        </div>


                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <h6 className="mb-0 text-black"> Closed Activities</h6>
                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                No Record Found

                            </div>
                        </div>


                        <div className="card p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-2 align-items-center">
                                    <h6 className="mb-0 text-black"> Invited Meetings</h6>
                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                Invited Meetings
                            </div>
                        </div>


                        <div className="card email-compose p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-0 align-items-center">
                                    <h6 className="mb-0 text-black"> Open Activities</h6>
                                    <button className="btn btn-outline ms-2 mb-0"> Composs Email</button>

                                </div>
                            </div>
                            <div className="card-body text-start">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Email</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Drafts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link">Sheduled</a>
                                    </li>
                                </ul>

                            </div>
                            <div className="card-footer text-center bg-white py-5">
                                <p>No record</p>
                            </div>
                        </div>






                        <div className="card email-compose p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-0 align-items-center">
                                    <h6 className="mb-0 text-black">Campaigns</h6>
                                    <button className="btn btn-outline ms-2 mb-0"> Composs Email</button>

                                </div>
                            </div>
                            <div className="card-body text-center py-5">
                                No record


                            </div>
                        </div>

                        <div className="card email-compose p-0 mb-3 hide-details m-0">
                            <div className="card-header text-start">
                                <div className="d-flex justify-content-between mb-0 align-items-center">
                                    <h6 className="mb-0 text-black">Campaigns</h6>
                                    <button className="btn btn-outline ms-2 mb-0"> Composs Email</button>

                                </div>
                            </div>
                            <div className="card-body text-start">
                                <div className="row">
                                    <div className="col-md-5">
                                <ul className="list-group">
                                    <li className="list-group-item"><i class="bi bi-twitter" style={{color:'#0CCEFF'}}></i> An item</li>
                                    <li className="list-group-item"> <i class="bi bi-facebook" style={{color:'#6B5EFF'}}></i> A second item</li>
                                    <li className="list-group-item"><i class="bi bi-youtube" style={{color:'#FC0204'}}></i>A third item</li>
                                    <li className="list-group-item"><i class="bi bi-linkedin" style={{color:'#2C87FF'}}></i>A fourth item</li>
                                </ul>
                                    </div>
                                    <div className="col-md-7 text-center pt-5 d-block">
                                        <img src={emailprofile}/>
                                         <p style={{ color: 'rgba(0, 0, 0, 0.3)',paddingTop:'20px'  }}>You cannot search a profile in Facebook. This has to be 
                                                associated from the Social Tab
  </p>                        </div>


                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    );
}

export default Leadprofile;