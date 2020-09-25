import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

class Filter extends Component {
    render() {
        return (
            <div>
                      
                      <div className="mt-5">
                                <Typography id="discrete-slider-custom" gutterBottom class="font-weight-bold text-muted">
                                    FILTER BY PRICE
                                </Typography>
                                <Slider
                                    defaultValue={50}
                                    // getAriaValueText={500}
                                    aria-labelledby="discrete-slider-custom"
                                    step={2}
                                    valueLabelDisplay="auto"
                                // marks={500}
                                />
                            </div>
                            <button type="button" class="btn btn-danger">Filter</button>
                            <p className="mt-5 font-weight-bolder">TOP PRODUCTS</p>
                            <form>
                                <div class="row">
                                    <div class="col">
                                        <img src="https://ae01.alicdn.com/kf/Hba85c26e97d04e3fb8c1ab0863d45ee0V/I-m-Solid-Muscle-Gym-Lift-Bodybuilding-T-Shirt-Men-3D-Print-Summer-Top-Round-Neck.jpg_50x50.jpg"  alt="..." />
                                    </div>
                                    <div class="col">
                                        <p className=" mt-2 font-weight-bolder">T-Shirt blue</p>
                                        <img src="https://image.shutterstock.com/image-vector/five-stars-icon-vector-260nw-1313491139.jpg" className="fixed_img" alt="..." />
                                        <p><small>$ 199.99</small></p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row">
                                    <div class="col">
                                        <img src="https://mi0.rightinthebox.com/images/50x50/201804/kgdlus1524128355396.jpg"  alt="..." />
                                    </div>
                                    <div class="col">
                                        <p className=" mt-2 font-weight-bolder">MugMockUps</p>
                                        <img src="https://image.shutterstock.com/image-vector/five-stars-icon-vector-260nw-1313491139.jpg" className="fixed_img" alt="..." />
                                        <p><small>$ 89.99</small></p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="row">
                                    <div class="col">
                                        <img src="https://sc01.alicdn.com/kf/H5de4130fb52e420dbe884a90aedb2e42y.jpg_50x50.jpg"  alt="..." />
                                    </div>
                                    <div class="col">
                                        <p className=" mt-2 font-weight-bolder">Notebook</p>
                                        <img src="https://image.shutterstock.com/image-vector/five-stars-icon-vector-260nw-1313491139.jpg" className="fixed_img" alt="..." />
                                        <p><small>$ 99.99</small></p>
                                    </div>
                                </div>
                                <hr></hr>
                            </form>
            </div>
        )
    }
}

export default Filter
