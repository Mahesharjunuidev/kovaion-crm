import { Link } from "react-router-dom";

const Menu = () => {

    return (

        <>
            <nav className="desk-menu d-flex flex-column">
                <Link className="nav-link active text-start" to='/'>
                    <i className="bi bi-speedometer2 me-2"></i>
                    <span className="sidebar-text">Dashboard</span>
                </Link>

                <div className="modules">
                    <h1 className="text-start ps-4">Modules</h1>
                    <a className="nav-link text-start" href="#dashboard">
                        <i className="bi bi-telephone me-2"></i>
                        <span className="sidebar-text">Contacts</span>
                    </a>
                    <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-bar-chart me-2"></i>
                        <span className="sidebar-text">Accounts</span>
                    </a>
                    <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-ticket-detailed me-2"></i>
                        <span className="sidebar-text">Deals</span>
                    </a> <a className="nav-link text-start" href="#settings">
                        <i class="bi bi-telephone-inbound me-2"></i>
                        <span className="sidebar-text">Calls</span>
                    </a> <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-list-task me-2"></i>
                        <span className="sidebar-text">Tasks</span>
                    </a> <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-calendar-minus me-2"></i>
                        <span className="sidebar-text">Meetings</span>
                    </a>
                    <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-file-earmark-text me-2"></i>
                        <span className="sidebar-text">Documents</span>
                    </a>
                    <a className="nav-link text-start" href="#settings">
                        <i className="bi bi-folder2-open me-2"></i>
                        <span className="sidebar-text">Projects</span>
                    </a>
                </div>
            </nav>

        </>
    );

}

export default Menu;