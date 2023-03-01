import HomSec2 from './HomSec2'; 

const Home = () => {
    return ( 
        <div className="home">
            {/* <h2>Home Page</h2> */}
            <h1>Carpool for the Planet</h1>
            <hr />
            <hr />
                <div className="container">
                    <div className="col6">
                        <h2 className="heading">Pick A Ride <br/>Contribute to Socity</h2>
                        <br />
                        <p className="homep">[Partner with us to drive your own livelihood and more.]</p>
                        
                    </div>
                <hr />
                <hr />
                <br />
            <div className="searchbox">
            <h3 className="homeh3">Need A Ride ?</h3>
                <p className="homep">[Find a ride here.]</p>
                
                <br />    
                    <div class="input-group">
                        <div class="form-outline">
                            <input type="search" id="form1" class="form-control" />
                            <label class="form-label" for="form1" >Enter Place 1</label>
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
            <br />
            <br />
            <hr />
            <hr />
            <br />
            <div className="homsec2">
                <HomSec2></HomSec2>
            </div>
            <br /> 
            <hr />
            <hr />
            <br />
            <h2 className='heading-2'><a href='/publish'>Publish Ride</a></h2>
            <br /> 
            <hr />
            <hr />
    
        </div>
     );
}
 
export default Home;