import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Full Stack Developer <span className="h6">at Google</span></h5>
                                    <p className="mb-0">APR 2020 - PRESENT</p>
                                    <small>Full Stack Developer with over 10 years of experience in Java/JS, Angular, Vue, React, Python, NumPy, SciPy, Scikit-learn.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">FrontEnd Developer <span className="h6">at Microsoft</span></h5>
                                    <p className="mb-0">APR 2017 - APR 2020</p>
                                    <small> As a grad FrontEnd Developer , I feel Microsoft has an amazing work-life balance and a wonderful place to work, show your skills, and inch towards your career </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;