
const Tableform = () =>{
    return (

        <form className="form">
            <div className="form-group">
                <input type="text" placeholder="Prekiu pavadinimas"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Kainas"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Kiekis"/> 
            </div>
            <div className="button">
                <button type="button" class="btn btn-primary">Issaugoti</button>
            </div>
        </form>
    )

    }
export default Tableform;

