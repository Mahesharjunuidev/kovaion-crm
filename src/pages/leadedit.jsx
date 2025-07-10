import { userlead,editlead } from "../data/content";
const Leadedit = () => {

    return (

        <>
            <div className="lead-profile ps-0">
                <div className="card mt-md-0 mt-5 p-3 mx-md-1 mx-0 p-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3">
                        <div className="d-flex align-items-start gap-3 text-start">
                            <img src={userlead} className="img-fluid" />                           
                             <div>
                                <h5 className="mb-1 text-start fw-500">Thomas Fleming</h5>
                                <p className="text-muted mb-2">On My GoodSide Inc.</p>
                                <img src={editlead} />
                            </div>
                        </div>
                        <div className="text-end">
                            <small className="text-muted">Last contacted on: 24 Jan 2024</small>
                            <div className="actions text-start mt-3">
                                <button className="btn btn-primary mb-2 mb-md-0"> Send Email</button>
                                <button className="btn btn-outline ms-2 mb-2 mb-md-0"> Convert</button>
                                <button className="btn btn-outline ms-md-2 ms-0 mt-0 mb-2 mb-md-0 ms-2 ms-md-0"> Edit</button>

                            </div>


                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Sidebar */}


                    {/* Main Content */}
                    <div className="col-lg-12">
                        <div className="actions text-start mt-3">
                            <button className="btn btn-primary"> Overview</button>
                            <button className="btn btn-outline ms-2"> Timeline</button>
                        </div>


                        {/* Lead Details */}
                        <div className="card p-0 mt-3 hide-details m-0">
                            <div className="card-header text-start bg-white">
                                Lead Information
                            </div>
                            <div className="card-body text-start">
                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="exampleFormControlInput1" className="form-label"> First Name</label>
                                        <div className="input-group mb-3">
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Mr.</button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Ms.</a></li>

                                            </ul>
                                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Title" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
                                        </div>
                                    </div>
                                </div>


                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Mobile</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <label for="exampleFormControlInput1" className="form-label"> Lead Source</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Select Lead Source</option>
                                            <option value="1">Other social media</option>
                                            <option value="2">X</option>
                                            <option value="3">Refferal</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Industry</label>

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected> Large Enterprise</option>
                                                <option value="1">Meduium Enterprise</option>
                                                <option value="2">Startups</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Annual Revenue </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Revenue" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email Opt Out </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Opt" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Company </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Fax </label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Fax Number" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Website</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Website URL" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="exampleFormControlInput1" className="form-label">Lead Status </label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Contact in Future</option>

                                        </select>

                                    </div>
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> No. of Employees</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Employee Count" />
                                        </div>
                                    </div>
                                </div>



                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Rating</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Good</option>
                                                <option value="1">Average</option>
                                                <option value="2">Poor</option>
                                            </select>

                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">Secondary Email</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Secondary Email" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>




                        <div className="card p-0 mb-3 mt-3 hide-details m-0">
                            <div className="card-header text-start bg-white">
                                Address Information
                            </div>
                            <div className="card-body text-start">
                                <div className="row mb-4">
                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Street</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Street" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> State</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter State" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Country</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Country" />
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> City</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter City" />
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">  Zip Code</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter 57105" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card p-0 mb-3 mt-0 hide-details m-0">
                            <div className="card-header text-start bg-white">
                                Description Information
                            </div>
                            <div className="card-body text-start">
                                <div className="row mb-4">


                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label"> Country</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Country" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Leadedit;