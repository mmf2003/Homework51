import { FaChartLine, FaCircleCheck, FaDollarSign } from "react-icons/fa6";

import Header from "./components/Header";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />

            <main className="container">
                <section className="dashboard-header">
                    <div>
                        <h2>Trading Dashboard</h2>
                        <p>Track and analyze your trading activity</p>
                    </div>
                </section>

                <section className="stats">
                    <div className="stat-card">
                        <div className="stat-card__icon">
                            <FaChartLine />
                        </div>

                        <div>
                            <p>Total Trades</p>
                            <h3>3</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__icon">
                            <FaCircleCheck />
                        </div>

                        <div>
                            <p>Profitable Trades</p>
                            <h3>2</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__icon">
                            <FaDollarSign />
                        </div>

                        <div>
                            <p>Total P&amp;L</p>
                            <h3 className="profit">+$325</h3>
                        </div>
                    </div>
                </section>

                <section className="placeholder">
                    <h3>Add Trade</h3>
                    <p>The trade form will be added in the next step.</p>
                </section>
            </main>
        </div>
    );
}

export default App;
