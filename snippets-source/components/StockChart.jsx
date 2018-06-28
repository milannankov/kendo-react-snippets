<StockChart>
        <ChartTitle text="Title" />
        <ChartSeries>
            <ChartSeriesItem
                data={this.props.stockData}
                type="candlestick"
                openField="Open"
                closeField="Close"
                lowField="Low"
                highField="High"
                categoryField="Date"
            />
        </ChartSeries>
        <ChartNavigator>
            <ChartNavigatorSelect from={this.props.from} to={this.props.to} />
            <ChartNavigatorSeries>
                <ChartNavigatorSeriesItem
                    data={this.props.stockData}
                    type="area"
                    field="Close"
                    categoryField="Date"
                />
            </ChartNavigatorSeries>
        </ChartNavigator>
    </StockChart>