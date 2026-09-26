import TradeItem from "./TradeItem";

function TradeList({ trades, onDelete }) {
    return (
        <section className="trade-list-section">
            <div className="trade-list-header">
                <div>
                    <h3>Recent Trades</h3>
                    <p>Your latest trading activity</p>
                </div>

                <span className="trade-count">{trades.length} trades</span>
            </div>

            {trades.length === 0 ? (
                <div className="empty-trades">
                    <p>No trades yet.</p>
                    <span>Add your first trade using the form above.</span>
                </div>
            ) : (
                <div className="trade-list">
                    {trades.map((trade) => (
                        <TradeItem
                            key={trade.id}
                            trade={trade}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default TradeList;
