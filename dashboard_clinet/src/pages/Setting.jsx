import React from "react";

export const Setting = () => {
  return (
    <>
      <div class="py-4 px-3 px-md-4">
            <div class="card mb-3 mb-md-4">

                <div class="card-body">
                    {/* <!-- Breadcrumb --> */}
                    <nav class="d-none d-md-block" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="#">Profile</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Update Settings</li>
                        </ol>
                    </nav>
                    {/* <!-- End Breadcrumb --> */}

                    <div class="mb-3 mb-md-4 d-flex justify-content-between">
                        <div class="h3 mb-0">Update Settings</div>
                    </div>


                    {/* <!-- Form --> */}
                    <div>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-12 col-md-6">
                                    <label for="name">Name</label>
                                    <input type="text" class="form-control"  id="name" name="name" placeholder="User Name"/>
                                </div>
                                <div class="form-group col-12 col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control"  id="email" name="email" placeholder="User Email"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-12">
                                    <div class="font-weight-semi-bold h5 mb-3">Change Password</div>
                                </div>
                                <div class="form-group col-12 col-md-4">
                                    <label for="old_password">Current Password</label>
                                    <input type="password" class="form-control"  id="old_password" name="old_password" placeholder="Current Password"/>
                                </div>
                                <div class="form-group col-12 col-md-4">
                                    <label for="password">New Password</label>
                                    <input type="password" class="form-control"  id="password" name="password" placeholder="New Password"/>
                                </div>
                                <div class="form-group col-12 col-md-4">
                                    <label for="password_confirm">Repeat New Password</label>
                                    <input type="password" class="form-control"  id="password_confirm" name="password_confirm" placeholder="Repeat New Password"/>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary float-right">Update</button>
                        </form>
                    </div>
                    {/* <!-- End Form --> */}
                </div>
            </div>


        </div>
    </>
  );
};
