var weeks= [
    { days: [
        {day: 'Monday', location: 'Paris', total_day: 60, charges: [
            {charge: 'Taxi', cost: 20, currency: 'USD'},
            {charge: 'Visa', cost: 40, currency: 'USD'}
        ]},
        {day: 'Friday', location: 'NY', total_day: 245, charges: [
            {charge: 'BRFST', cost: 20, currency: 'USD'},
            {charge: 'Taxi', cost: 40, currency: 'USD'},
            {charge: 'Dinner', cost: 35, currency: 'USD'},
            {charge: 'Flat', cost: 150, currency: 'USD'}
        ]}
    ],
        number_week: 12, total_week: [{total_cost:250,type: "EMP"}, {total_cost:55,type: "CO"}] },
    { days:  [
        {day: 'Thusday', location: 'LA', total_day: 180, charges: [
            {charge: 'Dinner', cost: 80, currency: 'USD'},
            {charge: 'Flat', cost: 100, currency: 'USD'}
        ]},
        {day: 'Saturday', location: 'paris', total_day: 190, charges: [
            {charge: 'BRFST', cost: 15, currency: 'USD'},
            {charge: 'Taxi', cost: 35, currency: 'USD'},
            {charge: 'Dinner', cost: 20, currency: 'USD'},
            {charge: 'Flat', cost: 120, currency: 'USD'}
        ]}
    ],
        number_week: 13, total_week: [{total_cost:170, type:"EMP"}, {total_cost:200, type:"CO"}]}

];
var Charge = React.createClass({
    render: function() {
        var charge = this.props.data.charge,
            cost = this.props.data.cost,
            currency = this.props.data.currency;
        return (
            <div className='charges'>
                <p className="charge">Charge : {charge} </p>
                <p className="cost">Cost : {cost} </p>
                <p className="currency">Currency : {currency} </p>
            </div>
        )
    }
});

var Day = React.createClass({
    render: function() {
        var day = this.props.data.day,
            location = this.props.data.location,
            total_day = this.props.data.total_day;
        var dataCharges=this.props.data.charges;
        var chargesTemplate = dataCharges.map(function(item, index) {
            return (
                <div key={index}>
                    <Charge data={item} />
                </div>
            )
        });
        return (
            <div className='days'>
                <p className="day">Day : {day} </p>
                <p className="location">Location : {location} </p>
                {chargesTemplate}
                <p className="total_day">Total : {total_day} </p>
            </div>
        )
    }
});

var TotalWeek = React.createClass({
    render: function() {
        var totalCost = this.props.data.total_cost,
            type = this.props.data.type;
        return (
            <div className='totalCost'>
                <span className="totalCost">Total Cost : {totalCost} </span>
                <span className="type">{type} </span>
            </div>
        )
    }
});


var Week = React.createClass({
    render: function() {
        var number_week = this.props.data.number_week;
        var dataDays=this.props.data.days;
        var daysTemplate = dataDays.map(function(item, index) {
            return (
                <div key={index}>
                    <Day data={item} />
                </div>
            )
        });
        var dataTotalWeek=this.props.data.total_week;
        var totalWeekTemplate = dataTotalWeek.map(function(item, index) {
            return (
                <div key={index}>
                    <TotalWeek data={item} />
                </div>
            )
        });
        return (
            <div className='weeks'>
                <span className="number_week">This week : {number_week} </span>
                {daysTemplate}
                {totalWeekTemplate}
            </div>
        )
    }
});

var Weeks = React.createClass({
    render: function() {
        var dataWeeks = this.props.data;
        var weeksTemplate = dataWeeks.map(function(item, index) {
            return (
                <div key={index}>
                    <Week data={item} />
                </div>
            )
        });
        return (
            <div className="weeks">
                {weeksTemplate}
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="person">
                Ivan Ivanov
                <Weeks data={weeks}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('main')
);