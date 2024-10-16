const Facilities = ({facility})=>{
    return(
        <div className="facility-box">
            <div className="facility-name">{facility.name}</div>
            <div className="facility-img"><img src={facility.src} alt=""/></div>
            <div className="facility-info">{facility.info}</div>
            <hr className="facility-line"/>
        </div>
    )
}

export default Facilities