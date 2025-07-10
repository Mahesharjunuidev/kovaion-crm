import { user,notification,piechart } from "../data/content";



export default function Header() {

  
  return (
    <>
      <div className="row g-4 justify-content-between mt-md-0 mt-3">
        <div className="col-md-5 mt-md-0">
          <div className="input-group d-none d-md-flex" style={{ maxWidth: "300px" }}>
            <input type="text" className="form-control search" placeholder="Search..." />
            <span className="input-group-text bg-white">
              <i className="bi bi-search text-muted"></i>
            </span>
          </div>
        </div>
        <div className="col-auto mt-md-0">
          <div className="row justify-content-center justify-content-md-center">
            <div className="col-auto d-flex align-items-center">
              <img src={piechart} style={{ maxWidth: '24px' }} />
              <select class="form-select custom-select" aria-label="Default select example">
                <option selected>Traditional CRM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="col-auto d-flex align-items-center gap-4">
              <i class="bi bi-question-circle" style={{ fontSize: '20px' }}></i>
              <img src={notification} style={{ width: '20px' }} />
              <img src={user} style={{ width: '50px' }} />
            </div>
          </div>
        </div>

      </div>
    <hr />
    </>
   
  );
}
