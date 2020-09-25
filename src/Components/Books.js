import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Filter from './Filter';


class Books extends Component {
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
                                        <img src="https://imgix.bustle.com/uploads/image/2019/9/26/c74df5d1-e262-47ac-b227-b0cd1f7d4db4-folio-banner.jpg?w=400&h=300&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://multiverse.ssl.berkeley.edu/portals/0/Media/Images/Learning_Resources/TOS_books.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Casual Handbag</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://1.bp.blogspot.com/-TCLTp348Vkk/XYJwgy2C03I/AAAAAAAAE-4/uUE38aAlAW8yrfWxSMEDJiIjEktHkpw3wCLcBGAsYHQ/s1600/best-internal-medicine-books-pdf-free-download.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">e-book Reader</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 259.00 </s> $ 199.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://media.self.com/photos/5e345256fc821b000895c091/4:3/w_400%2Cc_limit/product-roundup_books2.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.educationquizzes.com/library/Knowledge-Bank/Will-teachers-need-text-books-in-the-future.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://www.livegrowplayaustin.com/images/media/posts/Books.jpg?width=400" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://libraries.towson.edu/sites/default/files/2020-08/ContactlessPickuppng.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://lh3.googleusercontent.com/proxy/HhKP5VMCLSHPfJ4DJKh-YZVctFvEWPoBVBau6ckAgZfkzzidZJ1tK4irtjQ16l3S4IKqh9JPBkBpD5e0sMiHzEXkgmzB1Lpc5r8i0K5ANnZja9bfsp1VOrE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://1.bp.blogspot.com/-TCLTp348Vkk/XYJwgy2C03I/AAAAAAAAE-4/uUE38aAlAW8yrfWxSMEDJiIjEktHkpw3wCLcBGAsYHQ/s1600/best-internal-medicine-books-pdf-free-download.jpg" class="card-img-top" alt="..." />
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

export default Books
