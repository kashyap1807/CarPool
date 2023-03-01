const SeekRide = () => {
    return(
        <div className="seekride">

        <div className="searchbox">
        <h3 className="homeh3">Need A Ride ?</h3>
            <p className="homep">[Find a ride here.]</p>
            
            <br />    
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1">Enter Place 1</label>
                    </div>
                </div>
                <h4>TO</h4>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="search" id="form1" class="form-control" />
                        <label class="form-label" for="form1">Enter Place 2</label>
                    </div>
                </div>
                <br />
                <br />
                <input type="date" id="form1" class="form-control"/>

                <br />
                <br />
                <button type="button" class="btn btn-primary btn-block mb-4">Find</button>    
        
        </div>

        </div>
    );
}

export default SeekRide;