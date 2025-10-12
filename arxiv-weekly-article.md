# Deep Learning for Short Term Equity Trend Forecasting

**Author:** Yuqi Luan
**Date:** October 12, 2025
**arXiv:** [2508.12345](https://arxiv.org/abs/2508.12345)

## Summary

A behavior-driven, short-horizon alpha framework that combines a rich set of technical signals with a neural-network style predictive layer to produce directional and magnitude signals. The paper demonstrates that a dual-task neural network (regression for future return and classification for direction) over multiple behavior-driven factors yields robust long-short alpha.

## Key Points

- **Universe**: Fixed, diversified set of large-cap equities
- **Resolution**: Minute-level intraday data
- **Features**: 8 essential indicators (RSI, MACD, Volume spike, VWAP, Bollinger bands, Momentum, Volatility)
- **Strategy**: Long-short portfolio rebalancing every 15 minutes

## Methodology

The approach uses a dual-task neural network that outputs:
1. **Regression prediction**: Predicted 5-day return (continuous)
2. **Classification prediction**: Probability of upward move (0-1)

## Performance

- **Sharpe Ratio**: ~1.6 (annualized)
- **IC Mean**: 0.0340
- **IR**: 0.1621

## Implementation Notes

Implementable in QuantConnect LEAN by:
1. Constructing multi-factor feature set from intraday data
2. Using pre-trained lightweight neural network for scoring
3. Ranking and balancing long-short portfolio with regular rebalancing

## Worth Implementing?

**Yes** - Practical, actionably coded version of behavior-driven short-term alpha. Clear path to enhancement with transparent risk controls.

**Estimated Development Time**: 8-16 hours for MVP, plus 1-2 weeks for robust backtesting.

---

*Selected from 5 articles with score: 21/21*
