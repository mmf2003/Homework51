import { FaChartLine } from "react-icons/fa6";

function Header({ isIdle }) {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo">
                    <div className="logo__icon">
                        <FaChartLine />
                    </div>

                    <div>
                        <h1>Trade Tracker</h1>
                        <p>Trading Journal</p>
                    </div>
                </div>

                <div
                    className={
                        isIdle ? "status status--idle" : "status status--active"
                    }
                >
                    <span className="status__dot"></span>

                    {isIdle ? "Idle" : "Active"}
                </div>
            </div>
        </header>
    );
}

export default Header;
