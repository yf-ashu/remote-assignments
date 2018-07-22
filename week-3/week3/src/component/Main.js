import React from 'react';//jsx語法一定要import
class Main extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      hidden:'hidden'
   }
}
handleHeader(){
  this.setState({
    hidden:''
});
}
render() {
   return ( 
  <div> 
  <section className="main">
    <header className="main__subtitle">
      <h2>Section Title</h2>
    </header>
    <div className="main__articles">
      <article className="main__article">
        <span>Content Box1</span>
      </article>
      <article className="main__article">
        <span>Content Box1</span>
      </article>
      <article className="main__article">
        <span>Content Box1</span>
      </article>
      <article className="main__article">
        <span>Content Box1</span>
      </article>
    </div>
    <div className="main__button--action" onClick={() =>this.handleHeader()}>
      <button>Call to Action</button>
    </div>
  </section>

  <section className={"main "+this.state.hidden+" second"}>
      <div className="main__articles">
        <article className="main__article">
          <span>Content Box1</span>
        </article>
        <article className="main__article">
          <span>Content Box1</span>
        </article>
        <article className="main__article">
          <span>Content Box1</span>
        </article>
        <article className="main__article">
          <span>Content Box1</span>
        </article>
  
      </div>
     
    </section>
  </div>
  );
}
}

export default Main
