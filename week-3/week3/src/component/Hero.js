import React from 'react';//jsx語法一定要import
class Hero extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      title:'Welcome Message'
   }
}
handleHeader(value){
  this.setState({
    title:value
});
}
render() {
   return ( 
  <div> 
  <div className="hero">
    <h1 className="hero__text" onClick={() =>this.handleHeader("Have a Good Time!")}>{this.state.title} </h1>
  </div>
  </div>
  );
}
}

export default Hero
