import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Filter from './Filter';

class Bags extends Component {
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
                                        <img src="https://www.justanned.in/blog/wp-content/uploads/2018/08/Leather-bags-and-Wallets-for-men-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://i.pinimg.com/originals/b2/c4/13/b2c4133ae4a4bd9c9d9403754fba603a.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Casual Handbag</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.justanned.in/blog/wp-content/uploads/2018/09/laptop-bags-for-men-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">e-book Reader</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 259.00 </s> $ 199.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://cdn.shopify.com/s/files/1/0616/3149/products/3_26e9f332-f5ec-4747-8558-2af567f178e7_400x.jpg?v=1576292311" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.supreme-creations.co.uk/pub/media/wysiwyg/homecategorybanner/english/mobile/tote-bags.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUaQizT7j5ROBmv9L3PGE_13yAeFe1JkAJ3Q&usqp=CAU" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://media.cntraveler.com/photos/53da77686dec627b149ec365/master/w_400%2Cc_limit/louis-vuitton-want-les-essentiels-de-la-vie-salvatore-ferragamo-carry-on-bags-men.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.sustainablegate.com/wp-content/uploads/2020/01/sustainable-ethical-bags-brand-est-wst.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.thespruce.com/thmb/4e5IQU_FwqUqTqaWfvO25rWJZeM=/400x300/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-699094467-5c1a688d4cedfd0001217387.jpg" class="card-img-top" alt="..." />
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

export default Bags
