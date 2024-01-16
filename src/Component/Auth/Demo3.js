import React from 'react';
import './demo3.css';

export default function Demo3() {
    return (

        <div className="container-fluid" style={{marginTop:"20px"}}>
            <h1 style={{textAlign:"center",color:"hotpink"}}>Portfolio Gallery Filter</h1><br/>
                <div className="row">


                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="showall-tab" data-toggle="pill" href="#showall" role="tab" aria-controls="showall" aria-selected="true">Show All</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Cars-tab" data-toggle="pill" href="#Cars" role="tab" aria-controls="Cars" aria-selected="false">Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="City-tab" data-toggle="pill" href="#City" role="tab" aria-controls="City" aria-selected="false">City</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Forest-tab" data-toggle="pill" href="#Forest" role="tab" aria-controls="Forest" aria-selected="false">Forest</a>
                        </li>
                    </ul>
                </div>
                {/* <hr noshade style={{marginTop:"-20px"}} /> */}
                    <div className="container" >
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="showall" role="tabpanel" aria-labelledby="showall-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 3</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 3</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 3</div></div>

                            </div>
                            <div className="tab-pane fade"  role="tabpanel" aria-labelledby="Cars-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 3</div></div>
                            </div>
                            <div className="tab-pane fade" role="tabpanel" aria-labelledby="City-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 3</div></div>
                            </div>
                            <div className="tab-pane fade"  role="tabpanel" aria-labelledby="Forest-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 3</div></div>
                            </div>
                        </div>
                    </div>




                    <div className="container" >
                        <div className="tab-content" id="pills-tabContent">
                            {/* <div className="tab-pane fade show active" id="showall" role="tabpanel" aria-labelledby="showall-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 3</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 3</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 3</div></div>

                            </div> */}
                            <div className="tab-pane fade" id="Cars" role="tabpanel" aria-labelledby="Cars-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Car 3</div></div>
                            </div>
                            {/* <div className="tab-pane fade" id="City" role="tabpanel" aria-labelledby="City-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">City 3</div></div>
                            </div> */}
                            {/* <div className="tab-pane fade" id="Forest" role="tabpanel" aria-labelledby="Forest-tab">
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 1</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 2</div></div>
                                <div className="Portfolio"><a href="#!"><img className="card-img" src="http://placehold.it/400x400" alt="" /></a><div className="desc">Forest 3</div></div>
                            </div> */}
                        </div>
                    </div>

                </div>
       
    )
}
