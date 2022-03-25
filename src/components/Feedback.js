import React from 'react'


class Feedback extends React.Component{    
    constructor(){
        super()
        this.state = {
            gCounter: 0,
            neutCounter: 0,
            huonCounter: 0,
            value: 0
        }
    }
            
    keskiverto =() =>{
        const keskiverto = ((this.state.gCounter - this.state.huonCounter) / (this.state.gCounter + this.state.neutCounter + this.state.huonCounter)).toFixed(1) 
        return keskiverto;
    }

    positiivista = () => {
        const positiivista = ((this.state.gCounter / (this.state.gCounter + this.state.neutCounter + this.state.huonCounter))*100).toFixed(1)
        return positiivista;
    }
    
    render(){
        return(
            <div>
               <p>Lähetä palautetta</p>
                <Button handleClick={() => 
                    this.setState({gCounter : this.state.gCounter +1, value:this.state.value+1})} text={"Hyvä"}/>

                <Button handleClick={() => 
                    this.setState({neutCounter : this.state.neutCounter +1, value:this.state.value+1})} text={"Neutraali"}/>

                <Button handleClick={() => 
                    this.setState({huonCounter : this.state.huonCounter +1, value:this.state.value+1})} text={"Huono"}/>

                <p>Statis</p>
                {
                    this.state.value > 0 ? (
            <div>
              <table>
                 <tbody>

                    <Statics name={"Hyvä"} stats={this.state.gCounter}/>

                    <Statics name={"Neutraali"} stats={this.state.neutCounter}/>

                    <Statics name={"Huono"} stats={this.state.huonCounter}/>

                    <Statistics name={"Keskiverto"} sta={this.keskiverto()}/>

                    <Statistics name={"Positiivista"} sta={this.positiivista()}/>

                </tbody>
             </table>
            </div>
                 ) 
		    :(
			<h3>Palautetta ei saatu</h3>
             )
                
			}   
            </div>
        )
    }

}


export default Feedback