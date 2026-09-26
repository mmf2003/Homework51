import { useState } from "react";
import { FaChartLine, FaCircleCheck, FaDollarSign } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import TradeForm from "./components/TradeForm";

import "./App.css";

function App() {
    const [trades, setTrades] = useState([
        {
            id: 1,
            symbol: "XAUUSD",
            direction: "long",
            pnl: 250,
        },
        {
            id: 2,
            symbol: "EURUSD",
            direction: "short",
            pnl: -75,
        },
        {
            id: 3,
            symbol: "BTCUSDT",
            direction: "long",
            pnl: 150,
        },
    ]);

    const handleAddTrade = (trade) => {
        setTrades((prevTrades) => [...prevTrades, trade]);
    };

    const profitableTrades = trades.filter((trade) => trade.pnl > 0).length;

    const totalPnl = trades.reduce((total, trade) => total + trade.pnl, 0);

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
                            <h3>{trades.length}</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__icon">
                            <FaCircleCheck />
                        </div>

                        <div>
                            <p>Profitable Trades</p>
                            <h3>{profitableTrades}</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-card__icon">
                            <FaDollarSign />
                        </div>

                        <div>
                            <p>Total P&amp;L</p>

                            <h3 className={totalPnl >= 0 ? "profit" : "loss"}>
                                {totalPnl >= 0 ? "+" : "-"}${Math.abs(totalPnl)}
                            </h3>
                        </div>
                    </div>
                </section>

                <TradeForm onAddTrade={handleAddTrade} />
            </main>

            <ToastContainer position="top-right" autoClose={2500} />
        </div>
    );
}

export default App;
