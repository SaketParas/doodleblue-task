import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Filter from './Filter';

class Misc extends Component {
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
                                    <li class="list-group-item bg-light font-weight-bold "><Link to="/" class="text-body">All</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Books" class="text-body">Books</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Hoodie" class="text-body">Hoodie / T-shirt</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Bags" class="text-body">Bags</Link></li>
                                    <li class="list-group-item bg-light font-weight-bold"><Link to="/Misc" class="text-body">Paintings</Link></li>

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
                                        <img src="https://workforyourbeer.com/media/cache/small/custom/domain_1/image_files/sitemgr_photo_2711.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://d2uhsaoc6ysewq.cloudfront.net/49865/Interior-Misc.-Parts-Chevrolet-Express-14952510-thumb.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Casual Handbag</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 199.00 </s> $ 99.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://thumb4.zeppy.io/d/l400/pict/133266351857/lot-of-15-misc-wisconsin-pin-back-buttons-political-schoep-s-circus-etc" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">e-book Reader</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 259.00 </s> $ 199.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://www.thegreenpepper.com/wp-content/uploads/2015/11/packs-bags-misc.png" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Hard Coverbook</h5>
                                            <p className="text-center">$ 59.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://postmediaottawacitizen2.files.wordpress.com/2016/03/misc.jpg?quality=90&strip=all&w=400" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Mug MockUp</h5>
                                            <p className="text-center">$ 109.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://d2uhsaoc6ysewq.cloudfront.net/221/Assorted-Industrial-Equipment-Unmarked-MISC.-STEEL-15909720-thumb.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Plain Notebook</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 109.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-deck mt-4">
                                    <div class="card ">
                                        <img src="https://nescospecialty.com/file/2014/10/g0116949a-400x300.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Poster MockUp</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 399.00 </s> $ 139.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://apicms.thestar.com.my/uploads/images/2020/02/19/566701.jpg" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title text-center font-weight-bolder">Cardboard Bpxex</h5>
                                            <p className="text-center"><s class="font-italic text-muted">$ 49.00 </s> $ 29.00</p>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src="https://colosse.com/wp-content/uploads/2016/04/maple-syrup-400x300.jpg" class="card-img-top" alt="..." />
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

export default Misc
