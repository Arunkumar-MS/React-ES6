import React from 'react';


class Footer extends React.Component {


    render() {
        return (
            <div>
                <ul className="col-sm-4 col-lg-4 col-md-4">
                    <li>Help </li>
                    <li>Contact Us </li>
                    <li>Call - 999 999 999 </li>
                </ul>
                <ul className="col-sm-4 col-lg-4 col-md-4">
                    <li>Terms and Conditions </li>
                    <li>Guide Price</li>
                    <li>Privacy and Cookies </li>
                </ul>
                <ul className="col-sm-4 col-lg-4 col-md-4">
                    <li>Clubcard </li>
                    <li>Vendors </li>
                    <li>Stores </li>
                </ul>
                <div className="col-sm-11 col-lg-11 col-md-11 copyright">&copy; Tesco 2015</div>
            </div>
        );
    }
}
export default Footer;