import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'; // Custom CSS for additional styles

function StudentDashboard() {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
    const [isClosed, setIsClosed] = useState(false); 

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
    };

    const handleToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleToggle1 = () => {
        setIsSubMenuOpen1(!isSubMenuOpen1);
    };

    return (
        <div className={`d-flex ${isClosed ? 'flex-column' : 'flex-row'}`}>
            <nav id="sidebar" className={`bg-dark text-white p-3 ${isClosed ? 'sidebar-closed' : ''}`}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <span className="logo">Dashboard</span>
                    <button onClick={toggleSidebar} className="btn btn-outline-light">
                        <i className="bi bi-list"></i>
                    </button>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="index.html">
                            <i className="bi bi-house"></i> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="dashboard.html">
                            <i className="bi bi-grid"></i> Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleToggle1} className="btn btn-link text-white dropdown-toggle">
                            <i className="bi bi-folder"></i> Create
                        </button>
                        <ul className={`sub-menu ${isSubMenuOpen1 ? 'show' : ''} list-unstyled`}>
                            <li><a className="dropdown-item text-white" href="#">Folder</a></li>
                            <li><a className="dropdown-item text-white" href="#">Document</a></li>
                            <li><a className="dropdown-item text-white" href="#">Project</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleToggle} className="btn btn-link text-white dropdown-toggle">
                            <i className="bi bi-check-square"></i> Todo-List
                        </button>
                        <ul className={`sub-menu ${isSubMenuOpen ? 'show' : ''} list-unstyled`}>
                            <li><a className="dropdown-item text-white" href="#">Work</a></li>
                            <li><a className="dropdown-item text-white" href="#">Private</a></li>
                            <li><a className="dropdown-item text-white" href="#">Coding</a></li>
                            <li><a className="dropdown-item text-white" href="#">Gardening</a></li>
                            <li><a className="dropdown-item text-white" href="#">School</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="calendar.html">
                            <i className="bi bi-calendar"></i> Calendar
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="profile.html">
                            <i className="bi bi-person"></i> Profile
                        </a>
                    </li>
                </ul>
            </nav>
            <main className="flex-grow-1 p-4">
                <h1 className="mb-4">Welcome to Your Dashboard</h1>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Your Activities</h5>
                        <p className="card-text">Here you can manage your tasks and view your progress.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Upcoming Deadlines</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Project Submission - <strong>Next Friday</strong></li>
                                    <li className="list-group-item">Assignment Due - <strong>Next Monday</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recent Activities</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Completed Math Assignment</li>
                                    <li className="list-group-item">Attended Workshop on React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default StudentDashboard;
