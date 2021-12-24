import img1 from './img/react.png';

function Cards(props){
    return(
        <div className="App">
      <div className = "cards" >
        <div className = "card" >
          <img src={props.imgsrc} alt="react-icon" className = "card_img" />
          <div className = "card_info" >
            <span className = "card_category" > {props.category} </span>
            <h3 className = "card_tittle" > {props.tittle} </h3>
            <a href={props.link} target = "_blank" >
              <button className = "btn" >Learn Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Cards;