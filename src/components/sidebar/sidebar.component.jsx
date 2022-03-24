import React from "react";
import '../sidebar/sidebar.styles.css';

const Sidebar = () => {

    return (
        <div className="sidebar">

            {/* <h2>Sidebar component đang được phát triển</h2>
            <div style={{
                // backgroundColor: 'red',
                height: '100%',
            }}>
            </div> */}
            <ul>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                    <li>
                        <div className="ss_movie">
                            <img src="avatar.jpg" alt="ảnh phim" />
                            <p>tên phim</p>
                        </div>
                    </li>
                </ul>
        </div>
    )
}

export default Sidebar;