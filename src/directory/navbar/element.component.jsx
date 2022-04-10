import { React } from "react";
import { Link } from "react-router-dom";


const lib = [
    {
        id: "1",
        content: "Home",
        url: "/",
        icon: "bx bx-grid-alt"
    },
    {
        id: "2",
        content: "User",
        url: "/user",
        icon: "bx bx-user"
    },
    {
        id: "3",
        content: "Messages",
        url: "/chat",
        icon: "bx bx-chat"
    },
    {
        id: "4",
        content: "History",
        url: "/history",
        icon: "bx bx-history"
    },
    {
        id: "5",
        content: "Setting",
        url: "/setting",
        icon: "bx bx-cog"
    },
]

const Option = () => {
    return (
        <ul className="nav_list">
            {/* <li>
                <i className='bx bx-search'></i>
                <input type="text" placeholder="Search..." />
                <span className="tooltip">Search</span>
            </li> */}
            {lib.map(m => (
                <li key={m.id}>
                    <Link to={m.url}>
                        <i className={m.icon}></i>
                        <span className="links_name">{m.content}</span>
                    </Link>
                    <span className="tooltip text-black">{m.content}</span>
                </li>
            ))}
            <li className="profile">
                <div className="profile-details">
                    <img src="./avatar.jpg" alt="profileImg" />
                    <div className="name_job">
                        <div className="name">BuiDucHieu</div>
                        <div className="job">Admin</div>
                    </div>
                </div>
                <i className='bx bx-log-out' id="log_out"></i>
            </li>
        </ul>
    )
}

export default Option;