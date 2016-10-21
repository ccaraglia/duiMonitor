import React from 'react'
import ReactDOM from 'react-dom'



const DriveDrink = React.createClass({

getInitialState: function(){

    return({
        gender: 'male',
        hours: 0,
        beer: 0,
        shot: 0,
        wine: 0,
        cocktail: 0,
        margarita: 0,
        totalDrinks:0,
        weight: 200
    })
},

selGender: function(e){
    e.preventDefault()
    this.setState({
        gender: e.target.value
    })
},

handleHours : function(e){
e.preventDefault()

        this.setState({
            hours: this.state.hours + 1
        })
},

decrease : function(e){
    e.preventDefault()
    this.setState({
        weight: this.state.weight - 5
    })
},

increase: function(e){
    e.preventDefault()
    this.setState({
        weight: this.state.weight + 5
    })
},

changeBeers : function(e){
    e.preventDefault()
    this.setState({
    beer: this.state.beer + 1,
    totalDrinks: this.state.totalDrinks + 1

})
},

changeShots : function(e){
    e.preventDefault()
    this.setState({
        shot: this.state.shot + 1,
        totalDrinks: this.state.totalDrinks + 1
    })
},

changeWines : function(e){
    e.preventDefault()
    this.setState({
        wine: this.state.wine + 1,
        totalDrinks: this.state.totalDrinks + 1
    })
},

changeCocktails : function(e){
    e.preventDefault()
    this.setState({
        cocktail: this.state.cocktail + 1,
        totalDrinks: this.state.totalDrinks + 1
    })
},


changeMargaritas : function(e){
    e.preventDefault()
    this.setState({
        margarita: this.state.margarita + 1,
        totalDrinks: this.state.totalDrinks + 1
    })
},

reset: function(e){
    e.preventDefault()
    this.setState({
        gender: 'male',
        hours: 0,
        beer: 0,
        shot: 0,
        wine: 0,
        cocktail: 0,
        margarita: 0,
        totalDrinks:0,
        weight: 200
    })
},

    render: function(){

            if (this.state.gender === 'male'){
                this.alcohol = 100 * 0.032 / this.state.weight * this.state.totalDrinks - 0.015 * this.state.hours
            }else{
                this.alcohol = 100 * 0.05 / this.state.weight * this.state.totalDrinks - 0.015 * this.state.hours
            }

            if (this.alcohol > 0.08){
                    this.state.color = 'red'
                    console.log(parseInt((this.alcohol - 0.08) / 0.015))

                    var pStyle = {
                            opacity: 1,
                            color: "red"
                        }
            }else{
                    var pStyle = {
                            opacity: 0,
                            color: "red"
                        }
            }

            return (

                <div id='dashContainer'>
                    <h1>Count your drinks</h1>
                        <div>
                            <form id='generalForm'>

                                <select id = "selGender" value={this.state.gender} onChange = {this.selGender}>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>


                                <button onClick = {this.handleHours}>Hours from last drink  {this.state.hours}</button>


                                   <form id='weight' >
                                        <input type='button' onClick={this.decrease} value='-' class='qtyminus' field='quantity'/>
                                        <input type='text' name='quantity' value={this.state.weight} class='qty' id='weightNumb' />
                                        <input type='button' onClick={this.increase} value='+' class='qtyplus' field='quantity'/>
                                    </form>
                <div id="drinks">
                    <button onClick={this.changeBeers}>BEERS  {this.state.beer}</button>
                    <button onClick={this.changeShots}>SHOTS  {this.state.shot}</button>
                    <button onClick={this.changeWines}>WINE  {this.state.wine}</button>
                    <button onClick={this.changeCocktails}>COCKTAILS  {this.state.cocktail}</button>
                    <button onClick={this.changeMargaritas}>MARGARITAS  {this.state.margarita}</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
                            </form>







                </div>
                <div>
                                    <p id="alcohol"> Your alcohol % is {this.alcohol.toFixed(3)}</p>

                                    <p id="waitP" style={pStyle}>WAIT {Math.ceil((this.alcohol - 0.08) / 0.015)} hour(s) </p>
                </div>
                </div>

                )

    }
})

export default DriveDrink