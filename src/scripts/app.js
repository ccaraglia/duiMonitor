import React from 'react'
import ReactDOM from 'react-dom'
import DriveDrink from './DriveDrink'

const app = function() {

	const Header = React.createClass({
		render: function(){
			return(
                  <div>
                    <DriveDrink />
		          </div>
            )
        }
	})

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()