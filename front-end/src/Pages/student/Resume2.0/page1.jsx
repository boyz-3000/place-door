import './page1.css';

const Page1 = () => {
    return (
        <>
            <div className="heading">
                <h2>Personal Information</h2>
            </div>
            <div className="content">
                <input type="text" className="form-input" name="fullName" placeholder='Full Name'/><br />

                <input type="text" className="form-input" name="phoneNo" placeholder='Phone No.'/><br />

                <input type="text" className="form-input" name="emailID" placeholder='Email ID'/><br />
            </div>
        </>
    );
}

export default Page1;