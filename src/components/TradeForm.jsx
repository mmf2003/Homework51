import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { toast } from "react-toastify";

function TradeForm({ onAddTrade }) {
    const [symbol, setSymbol] = useState("");
    const [direction, setDirection] = useState("long");
    const [pnl, setPnl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!symbol.trim() || pnl === "") {
            toast.error("Please fill in all fields");
            return;
        }

        const pnlNumber = Number(pnl);

        if (Number.isNaN(pnlNumber)) {
            toast.error("P&L must be a number");
            return;
        }

        const newTrade = {
            id: Date.now(),
            symbol: symbol.trim().toUpperCase(),
            direction,
            pnl: pnlNumber,
        };

        onAddTrade(newTrade);

        toast.success("Trade added successfully!");

        setSymbol("");
        setDirection("long");
        setPnl("");
    };

    return (
        <section className="trade-form-card">
            <div className="section-header">
                <div>
                    <h3>Add Trade</h3>
                    <p>Add a new trade to your journal</p>
                </div>
            </div>

            <form className="trade-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="symbol">Symbol</label>

                    <input
                        id="symbol"
                        type="text"
                        placeholder="EURUSD"
                        value={symbol}
                        onChange={(event) => setSymbol(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="direction">Direction</label>

                    <select
                        id="direction"
                        value={direction}
                        onChange={(event) => setDirection(event.target.value)}
                    >
                        <option value="long">Long</option>
                        <option value="short">Short</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="pnl">P&amp;L ($)</label>

                    <input
                        id="pnl"
                        type="number"
                        step="0.01"
                        placeholder="150"
                        value={pnl}
                        onChange={(event) => setPnl(event.target.value)}
                    />
                </div>

                <button className="add-trade-button" type="submit">
                    <FaPlus />
                    Add Trade
                </button>
            </form>
        </section>
    );
}

export default TradeForm;
