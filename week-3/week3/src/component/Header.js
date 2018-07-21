import React from 'react';//jsx語法一定要import
class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
       right:'-100%'
    }
}
handleHeader(value){
  this.setState({
    right:value
});
console.log(this.state.right);
}
render() {
  const styles = {
    right:this.state.right
  };
  const prop ={
    name:this.props.children
  } 

    return ( 
  <div> 
   <header className="main-header">
    <div className="main-header__title">
      <span>Website Title / Logo {prop.name}</span>
    </div>
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">
            <span> Item1</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span> Item2</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span> Item3</span>
          </a>
        </li>
        <li>
          <a href="/">
            <span> Item4</span>
          </a>
        </li>
      </ul>
    </nav>
    <aside className="sidenav" onClick={() =>this.handleHeader(0)} >
      <span></span>
      <span></span>
      <span></span>
    </aside>
   
 <nav className="sidenav--open" style={styles}>
    <div className="closeBtn" onClick={() =>this.handleHeader('-100%')}>
      <span className="close"></span>
      <span className="close"></span>
    </div>
    <ul>
      <li>
        <a href="">
          <span> Item1</span>
        </a>
      </li>
      <li>
        <a href="">
          <span> Item2</span>
        </a>
      </li>
      <li>
        <a href="">
          <span> Item3</span>
        </a>
      </li>
      <li>
        <a href="">
          <span> Item4</span>
        </a>
      </li>
    </ul>
  </nav>

  </header>
  </div>
  );
}
}
Header.propTypes={

}


export default Header
