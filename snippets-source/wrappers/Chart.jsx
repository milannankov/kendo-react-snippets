<Chart
    dataSource={chartData}
    series={[
        {
            field: "hours"
        },
    ]}
    categoryAxis={[{
        field: "projectName"
    }]}
    seriesDefaults={({ type: "bar" })}
/>