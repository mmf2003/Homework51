import { FaArrowTrendDown, FaArrowTrendUp, FaTrash } from "react-icons/fa6";

function TradeItem({ trade, onDelete }) {
    const isLong = trade.direction === "long";
    const isProfit = trade.pnl >= 0;

    return (
        <div className="trade-item">
            <div
                className={`trade-direction ${
                    isLong ? "trade-direction--long" : "trade-direction--short"
                }`}
            >
                {isLong ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
            </div>

            <div className="trade-info">
                <h4>{trade.symbol}</h4>

                <span className={isLong ? "direction-long" : "direction-short"}>
                    {trade.direction.toUpperCase()}
                </span>
            </div>

            <div
                className={
                    isProfit
                        ? "trade-pnl trade-pnl--profit"
                        : "trade-pnl trade-pnl--loss"
                }
            >
                {isProfit ? "+" : "-"}${Math.abs(trade.pnl)}
            </div>

            <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(trade.id)}
                aria-label={`Delete ${trade.symbol} trade`}
            >
                <FaTrash />
                <span>Delete</span>
            </button>
        </div>
    );
}

export default TradeItem;
