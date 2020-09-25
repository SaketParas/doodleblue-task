import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Filter from './Filter';

class Hoodie extends Component {
    render() {
        return (
            <div className="container mt-4">
                <div class="form-row">
                    <div class="col">
                        <h3 className="float-left font-weight-bolder">Product</h3>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-danger float-right">Add Product</button>
                    </div>
                </div>


                <div class="container-fluid p-0 mt-3">
                    <div class="row text-left">
                        <div class="col-md-3 col-sm-12">
                            <p class="font-weight-bolder">CATEGORIES</p>
                            <div class="card mt-5 ">
                                <ul class="list-group list-group-flush">                                    
                                <li class="list-group-item bg-light font-weight-bold "><Link to = "/" class="text-body">All</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to = "/Books" class="text-body">Books</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to = "/Hoodie" class="text-body">Hoodie / T-shirt</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to = "/Bags" class="text-body">Bags</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to = "/Misc" class="text-body">Paintings</Link></li>

                                </ul>
                            </div>
                            <Filter />
                        </div>
                        <div class="col-md-9">
                            <div class="row">
                                <div class="col">
                                    <h6 class="font-italic text-muted">Showing 1-8 of 9 results</h6>
                                </div>
                                <div class="col-0">
                                    <div class="dropdown ">
                                        <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Default Sorting
                                </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Price</a>
                                            <a class="dropdown-item" href="#">Ratings</a>
                                            <a class="dropdown-item" href="#">Popularity</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-deck mt-5">
                                    <div class="card ">
                                        <img src="https://timesofindia.indiatimes.com/thumb/msid-71954982,imgsize-181530,width-400,resizemode-4/71954982.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://i.ebayimg.com/images/g/VxkAAMXQI5tRh0at/s-l400.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Casual Handbag</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/1532/7717/files/small-banner_400x.jpg?v=1593558004" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">e-book Reader</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 259.00 </s> $ 199.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://brodix.com/wp-content/uploads/2017/11/hoodiezip.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://static.dribbble.com/users/190300/screenshots/2720320/default_33d51784a6ff9dec2ff51af82e984648.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://static.dribbble.com/users/190300/screenshots/2701024/default_a000796ac77455860f486a50ff8fec26.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJqqG7b1Ib1GzSX0bo4qLqTh-f-VPW1_fQ6w&usqp=CAU" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.hotvero.com/wp-content/uploads/2017/08/Cheap-Urban-Mens-Womens-Hoodies.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5a0a8c30268b966170862024/1543518503903-5U1U1UDXZ3QFOW8Z1HQ8/ke17ZwdGBToddI8pDm48kDAv91l_EVpAtt3T82Wm1m9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFYJKH45azV1OdE3sZLTRbs6ZFFp8hOYq1RoRuprWGoaTqWIIaSPh2v08GbKqpiV54/hoodie+box+logo+white+2.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Online Books</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}

export default Hoodie
