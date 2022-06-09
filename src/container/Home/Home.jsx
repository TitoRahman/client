import React, {Component} from 'react';
import NavBar from '../../component/NavBar/NavBar';
import ViewAllEmployee from '../../component/Pages/ViewEmployee/ViewAllEmployee';

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Sub Heading</h2>
                            <p
                                className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Main Heading
                            </p>
                            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                                cupiditate veritatis in accusamus quisquam.
                            </p>
                        </div>
                    </div>
                </div>
                <ViewAllEmployee />
            </div>
        );
    }
}

export default Home;