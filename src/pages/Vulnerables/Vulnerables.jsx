import "./Vulnerables.css";
import {useEffect, useState} from "react";

export default function VulnerablesTab() {

    const [isVerified, setIsVerified] = useState(true);
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const dummyData = [
            { id: 1, name: "John Doe", age: 74, vulnerability: "Hearing Impaired", address: "456 Oak Ave", contact: "09171234567", barangay: "Barangay 1", email: "johndoe@email.com", verified: false },
            { id: 2, name: "Jane Smith", age: 81, vulnerability: "Mental Health Condition", address: "789 Pine Rd", contact: "09181234567", barangay: "Barangay 2", email: "janesmith@email.com", verified: true },
            { id: 3, name: "Michael Johnson", age: 34, vulnerability: "Physically Disabled", address: "404 Spruce Dr", contact: "09191234567", barangay: "Barangay 3", email: "michaelj@email.com", verified: false },
            { id: 4, name: "Emily Davis", age: 68, vulnerability: "Hearing Impaired", address: "606 Chestnut Pl", contact: "09201234567", barangay: "Barangay 1", email: "emilyd@email.com", verified: true },
            { id: 5, name: "Robert Brown", age: 55, vulnerability: "Chronic Illness", address: "101 Maple Blvd", contact: "09211234567", barangay: "Barangay 5", email: "robertb@email.com", verified: false },
            { id: 6, name: "Linda Wilson", age: 52, vulnerability: "Hearing Impaired", address: "404 Spruce Dr", contact: "09221234567", barangay: "Barangay 6", email: "lindaw@email.com", verified: true },
            { id: 7, name: "William Taylor", age: 64, vulnerability: "Elderly Care", address: "505 Walnut Ct", contact: "09231234567", barangay: "Barangay 2", email: "williamt@email.com", verified: false },
            { id: 8, name: "Elizabeth Martinez", age: 43, vulnerability: "Physically Disabled", address: "505 Walnut Ct", contact: "09241234567", barangay: "Barangay 4", email: "elizmart@email.com", verified: true },
            { id: 9, name: "James Anderson", age: 88, vulnerability: "Hearing Impaired", address: "789 Pine Rd", contact: "09251234567", barangay: "Barangay 3", email: "jamesa@email.com", verified: false },
            { id: 10, name: "Patricia Thomas", age: 34, vulnerability: "Chronic Illness", address: "404 Spruce Dr", contact: "09261234567", barangay: "Barangay 5", email: "patriciat@email.com", verified: false },
            { id: 11, name: "Charles Jackson", age: 67, vulnerability: "Visually Impaired", address: "303 Cedar St", contact: "09271234567", barangay: "Barangay 6", email: "charlesj@email.com", verified: true },
            { id: 12, name: "Barbara White", age: 19, vulnerability: "Mental Health Condition", address: "789 Pine Rd", contact: "09281234567", barangay: "Barangay 2", email: "barbaraw@email.com", verified: false },
            { id: 13, name: "Joseph Harris", age: 22, vulnerability: "Hearing Impaired", address: "606 Chestnut Pl", contact: "09291234567", barangay: "Barangay 3", email: "josephh@email.com", verified: true },
            { id: 14, name: "Susan Martin", age: 69, vulnerability: "Chronic Illness", address: "404 Spruce Dr", contact: "09301234567", barangay: "Barangay 1", email: "susanm@email.com", verified: false },
            { id: 15, name: "Thomas Thompson", age: 76, vulnerability: "Chronic Illness", address: "303 Cedar St", contact: "09311234567", barangay: "Barangay 4", email: "thomast@email.com", verified: true },
            { id: 16, name: "Jessica Garcia", age: 40, vulnerability: "Pregnant Woman", address: "707 Aspen Way", contact: "09321234567", barangay: "Barangay 5", email: "jessicag@email.com", verified: false },
            { id: 17, name: "Christopher Clark", age: 89, vulnerability: "Chronic Illness", address: "404 Spruce Dr", contact: "09331234567", barangay: "Barangay 6", email: "chrisclark@email.com", verified: true },
            { id: 18, name: "Sarah Rodriguez", age: 29, vulnerability: "Hearing Impaired", address: "707 Aspen Way", contact: "09341234567", barangay: "Barangay 2", email: "sarahr@email.com", verified: false },
            { id: 19, name: "Daniel Lewis", age: 24, vulnerability: "Mobility Issues", address: "303 Cedar St", contact: "09351234567", barangay: "Barangay 1", email: "daniel@email.com", verified: true },
            { id: 20, name: "Karen Lee", age: 80, vulnerability: "Hearing Impaired", address: "606 Chestnut Pl", contact: "09361234567", barangay: "Barangay 3", email: "karenl@email.com", verified: false },
        ];
        setData(dummyData);
    }, []);

    //function for verification [to be modify by the backend]
    const verificationStatus = (userId) => {
        //upd the main data array
        setData(prevData =>
            prevData.map(item =>
                item.id === userId ? {...item, verified: true} : item
            )
        );

        //upd the selected user state to reflect the change on the id card [to be modify for the backend]
        setSelectedUser(prevUser =>
            prevUser ? {...prevUser, verified: true} : null
        );
    }

    //filter verified from not
    const filterVulnerables = data.filter(item => item.verified === isVerified);

    return (
        <div className="vulnerable-tab">
            {/* header */}
            <div className="header">
                <h1 className="welcome-text">
                    Welcome, <span className="admin-name">Admin Name</span>
                </h1>
            </div>

            {/* search bar */}
            <div className="search-controls">
                <input type="text" placeholder="Search..." className="search-bar"/>

                {/* show verfied and unverified */}
                <div className="vulnerable-controls">
                    <label className="verify">
                        <input
                            type="checkbox"
                            className="verify-input"
                            checked={isVerified}
                            onChange={() => setIsVerified(!isVerified)}
                        />
                        <span
                            className="verify-label"
                            data-on="SHOW VERIFIED"
                            data-off="SHOW UNVERIFIED"
                        ></span>
                    </label>
                </div>

                {/* total count of vulnerables */}
                <div className="vulnerable-total-count">
                    SubTotal: {filterVulnerables.length}
                </div>

                <div className="vulnerable-total-count">
                    Total: {data.length}
                </div>
            </div>

            {/* Main Content - Table and ID Card side by side */}
            <div className="content-container">
                {/* Left side | table */}
                <div className="table-container">
                    <table className="vulnerable-data-table">
                        <thead style={{ backgroundColor: "#007BFF" , color: "white"}}>
                        <tr>
                            <th>#</th>
                            <th>Name of Vulnerable</th>
                            <th>Contact Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filterVulnerables.map((item, idx) => (
                            <tr
                                key={item.id}
                                className={idx % 2 === 0 ? "vulrow-light" : "vulrow-dark"}
                                onClick={() => setSelectedUser(item)} // NEW
                                style={{ cursor: "pointer" }}
                            >
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.contact}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* ID Card */}
                <div className="id-card">
                    {selectedUser ? (
                        <div>
                            <div className="id-header">
                                <img src="profile.jpg" alt="Profile Picture" className="profile-pic" />
                                <div>
                                    <h2 className="name">{selectedUser.name}</h2>
                                    {!selectedUser.verified ? (
                                        <button className="status pending" onClick={() => verificationStatus(selectedUser.id)}>
                                            Pending Request
                                        </button>
                                    ) : (
                                        <span className="status verified">Verified</span>
                                    )}
                                </div>
                            </div>

                            <div className="id-section">
                                <h3>Address</h3>
                                <p className="id-text">{selectedUser.address}, Quezon City, Metro Manila, Philippines.</p>
                            </div>

                            <div className="id-section">
                                <h3>Personal Information</h3>
                                <p><strong>Contact Number:</strong> {selectedUser.contact}</p>
                                <p><strong>Emergency Contact:</strong> Not Available</p> {/* Placeholder */}
                                <p><strong>Email:</strong> {selectedUser.email}</p>
                                <p><strong>Age:</strong> {selectedUser.age}</p>
                                <p><strong>Barangay:</strong> {selectedUser.barangay}</p>
                                <p><strong>Vulnerability:</strong> {selectedUser.vulnerability}</p>
                            </div>

                            <div className="id-section">
                                <h3>Account Information</h3>
                                <p><strong>Created:</strong> Not Available</p> {/* Placeholder */}
                                <p><strong>File ID:</strong> {selectedUser.name.toLowerCase().replace(' ', '_')}_identification.com</p> {/* Basic placeholder */}
                            </div>
                        </div>
                    ) : (
                        <p>Select a vulnerable from the table to see their ID card.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
